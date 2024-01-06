import React, {useState} from 'react'
import { useEffect, useRef } from 'react';
import { GetUser, DeleteUser, EditUser } from '../../function/User'

export const Manageuser = () => {
  const [users, setUsers] = useState([]);
  const [editedUser, setEditedUser] = useState(null);

  const editUserRef = useRef(null);

  const handleDeleteUser = async (id) => {
    try {
      await DeleteUser(id);
      fetchData();
    } catch(error) {
        console.error('error:', error);
        if (error.response) {
            console.error('Response data:', error.response.data);
        }
    }
  }
  const fetchData = async () => {
    try {
      const userData = await GetUser();
      console.log(userData)
      setUsers(userData);
    } catch (error) {
      console.error('Errorer fetching:', error)
    }
  };

  const handleEditClick = (user) => {
    setEditedUser(user);
    console.log(user.isAdmin)
  };

  const handleCloseEditForm = () => {
    setEditedUser(null);
  };

  const handleSaveEdit = async () => {
    try {
      await EditUser(editedUser);
      fetchData();
      console.log(editedUser)
      setEditedUser(null);
    } catch (error) {
      console.error('error updating:', error);
    }
  };

  const handleOutsideClick = (event) => {
    if (editedUser !== null && !editUserRef.current.contains(event.target)) {
      handleCloseEditForm();
    }
  };

  useEffect(() => {
    if (editedUser !== null) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [editedUser]);


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='product'>
      <table className='admin-laptop'>
        <tr>
          <th>S.N.</th>
          <th>Name:</th>
          <th>Email address:</th>
          <th>isAdmin:</th>
          <th>Password:</th>
          <th className='opt-btn'>Option</th>
        </tr>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name }</td>
              <td>{user.email}</td>
              <td>{user.isAdmin?"True":"False"}</td>
              <td>{ user.password}</td>
              <td>
                <button onClick={()=> handleEditClick(user)}>Edit<i class="fa-solid fa-pen-to-square"></i></button>
                <button onClick={()=>handleDeleteUser(user._id)}>Delete<i class="fa-solid fa-trash"></i></button>
              </td>
            </tr>
          ))}
      </table>
      {editedUser !== null && (
        <div className='edit-laptop' ref={editUserRef}>
          <div className='flex flex-col inputBox'>
            <input type='text' value={editedUser.name} name="name" onChange={(e) => setEditedUser({...editedUser, name:e.target.value})}/>
            <label>Name:</label>
          </div>
          <div className='flex flex-col inputBox'>
            <input type='text' value={editedUser.email} name="email" onChange={(e) => setEditedUser({...editedUser, email:e.target.value})}/>
            <label>Email:</label>
          </div>
          <div className='flex flex-col inputBox'>
            <input type='text' value={editedUser.password} name="password" onChange={(e) => setEditedUser({...editedUser, password:e.target.value})}/>
            <label>Password:</label>
          </div>
          <div className='flex flex-col inputBox'>
            <select className='h-12 brand-option is-admin' onSelect={(e) => { console.log("first"); setEditedUser({...editedUser, isAdmin:e.target.value})}}>
              <option value={"True"}>True</option>
              <option value={"False"}>False</option>
            </select>
            <label>isAdmin:</label>
          </div>
          <button onClick={handleSaveEdit} className=' bg-green-600 edit-save'>Save</button>
          <button onClick={handleCloseEditForm} className='bg-red-600 edit-cancel'>Cancel</button>
        </div>
      )}
    </div>
  )
}
