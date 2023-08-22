import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
export const Sidebar = ({setIsSidebar}) => {
  return (
    <div className='sidebar'>
          <Link to="/managelaptop" onClick={()=>{setIsSidebar(false)}}>
          <button className='manage-item'>Manage Laptop</button>
          </Link>
          <Link to="/manageaccessories" onClick={()=>{setIsSidebar(false)}}>
          <button className='manage-item'>Accessories</button>
          </Link>
          <Link to="/manageuser" onClick={()=>{setIsSidebar(false)}}>
          <button className='manage-item'>Manage User</button>
          </Link>
          <button className='logout'>Logout</button>
    </div>
  )
}
