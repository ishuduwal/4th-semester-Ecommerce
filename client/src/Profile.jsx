import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { EditUser } from './function/User';

export const Profile = () => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password:""
  });
  const [editedUser, setEditedUser] = useState(null);

  const handleSaveEdit = async () => {
    try {
      if (editedUser) {
        await EditUser(editedUser);
        setEditedUser(null); 
      }
    } catch (error) {
      console.error('error updating:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    
    setUser(JSON.parse(window.localStorage.getItem("userInfo")))
    console.log(JSON.parse(window.localStorage.getItem("userInfo")))

  }, [])
  

  return (
    <>
      <div className='edit-user'>
        <div className='profile-edit'>
          <div>
            <i class="fa-solid fa-user"></i>
          </div>
          <div>
            <label>Username</label>
            <input type='text' name="name" className='edit-input' value={editedUser?.name || user.name} onChange={handleInputChange} />
          </div>
          <div>
            <label>Email</label>
            <input type='text' name="email" className='edit-input' value={editedUser?.email || user.email} onChange={handleInputChange}/>
          </div>
          <div>
            <label>Password</label>
            <input type='text' name="password" className='edit-input' value={editedUser?.password || user.password} onChange={handleInputChange}/>
          </div>
        </div>
      </div>
    </>
  )
}
