import React, {useState} from 'react'
import { useEffect } from 'react';
import { GetUser, DeleteUser } from '../../function/User'

export const Manageuser = () => {
  const [users, setUsers] = useState([]);

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
      setUsers(userData);
    } catch (error) {
      console.error('Errorer fetching:', error)
    }
  };
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
          <th>Password:</th>
          <th className='opt-btn'>Option</th>
        </tr>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name }</td>
              <td>{user.email }</td>
              <td>{ user.password}</td>
              <td>
                <button>Edit<i class="fa-solid fa-pen-to-square"></i></button>
                <button onClick={()=>handleDeleteUser(user._id)}>Delete<i class="fa-solid fa-trash"></i></button>
              </td>
            </tr>
          ))}
      </table>
    </div>
  )
}
