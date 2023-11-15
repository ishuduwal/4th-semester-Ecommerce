import React, { useEffect, useRef, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

export const Sidebar = ({ isSidebar, setIsSidebar }) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    setIsAdmin(window.localStorage.getItem("isAdmin"));
},[])

  useEffect(() => {
    function handleClickOutside(event) {
      if (isSidebar && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebar(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebar, setIsSidebar]);

  const [isAdmin, setIsAdmin] = useState();

  const toggleSidebar = () => {
    setIsSidebar(!isSidebar);
  };

  const navigate = useNavigate();

  const LogoutHandler=() => {
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("isAdmin")
    navigate('/');
    window.location.reload();
  }

  return (
    <div ref={sidebarRef} className={`sidebar ${isSidebar ? 'open' : ''}`}>
      <button onClick={toggleSidebar} className='toggle-button'>
      </button>
      
      <div className='sidebar-content'>
      {
          isAdmin ?
            <>
              <Link to="/managelaptop" onClick={() => setIsSidebar(false)}>
          <button className='manage-item'>Laptop</button>
        </Link>
        <Link to="/manageaccessories" onClick={() => setIsSidebar(false)}>
          <button className='manage-item'>Accessories</button>
        </Link>
        <Link to="/managedesktop" onClick={() => setIsSidebar(false)}>
          <button className='manage-item'>Desktop</button>
        </Link>
        <Link to="/manageuser" onClick={() => setIsSidebar(false)}>
          <button className='manage-item'>User</button>
        </Link>
            </>
            :
            ""
      }
        
        <button className='logout' onClick={()=>LogoutHandler()}>Logout</button>
      </div>
    </div>
  );
};
