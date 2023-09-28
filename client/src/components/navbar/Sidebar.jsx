import React, { useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Sidebar = ({ isSidebar, setIsSidebar }) => {
  const sidebarRef = useRef(null);
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
  const toggleSidebar = () => {
    setIsSidebar(!isSidebar);
  };
  return (
    <div ref={sidebarRef} className={`sidebar ${isSidebar ? 'open' : ''}`}>
      <button onClick={toggleSidebar} className='toggle-button'>
      </button>
      <div className='sidebar-content'>
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
        <button className='logout'>Logout</button>
      </div>
    </div>
  );
};
