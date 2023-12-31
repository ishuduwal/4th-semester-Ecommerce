import React, {useRef, useState} from 'react';
import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Sidebar } from './Sidebar';
export const Navbar = ({ user, setUser }) => {

  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  const [isUser, setIsUser] = useState(null);
  const [isSidebar, setIsSidebar] = useState(false);
  const [laptopMenuOpen, setLaptopMenuOpen] = useState(false);
  const [accessoriesMenuOpen, setAccessoriesMenuOpen] = useState(false);
  const LaptopMenu = ['Hp', 'Dell', 'Acer', 'Asus', 'Apple', 'Lenovo']
  const AccessoriesMenu = ['Keyboard', 'Mouse', 'Speaker', 'Storage', 'Mousepad', 'Graphics card', 'Headphone']
  const [searchQuery, setSearchQuery] = useState('');
  const goto = useNavigate();

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Perform the search only if the searchQuery is not empty
    if (searchQuery.trim() !== '') {
      goto('/searchresult', { state: { query: searchQuery } });
    }
  };

  const menuRef = useRef();
  const dropdownRef = useRef();

  var location = useLocation();
  
  

  useEffect(() => {
    const checkUser = () => {
      try {
        setUser(location.state.user);
      } catch (error) {
        setUser(window.localStorage.getItem("user"));
      };
    }
    
    checkUser();
  }, [])

  useEffect(()=>{
  const handleClickOutside = (e) => {
    if (
      menuRef.current && !menuRef.current.contains(e.target) && dropdownRef.current && !dropdownRef.current.contains(e.target)
    ) {
      setLaptopMenuOpen(false);
      setAccessoriesMenuOpen(false);
    }
  };
  document.addEventListener('mousedown', handleClickOutside);
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, []);
 

  const handleClick = () => {
    setClicked(!clicked);
  };
  const LaptopHandler = (e) =>{
    e.preventDefault();
    navigate('/laptop', { state: e.target.textContent })
    setClicked(false)
  }

  const AccessoriesHandler = (e) => {
    e.preventDefault();
    navigate('/accessories', { state: e.target.textContent })
    setClicked(false)
  }

  const DesktopHandler = (e) => {
    e.preventDefault();
    navigate('/desktop', { state: e.target.textContent })
    setClicked(false)
  }
  
  
  return (
    <>
    <nav>
    <div className="logo-toggle-btn">
        <Link to="/" className='logo-techmart'><p><span>T</span>echmart</p></Link>
          <ul id="navbar" className={clicked ? "active" : ""}>
            <div className='nav-item cursor-pointer'>
              <div>
              <div className='relative' ref={menuRef}>
                  <p onClick={() => setLaptopMenuOpen(!laptopMenuOpen)} className='text-lg'>Laptop</p>
               </div>
              </div>
              {laptopMenuOpen && (
                  <div className='absolute dropdown-item' ref={dropdownRef}>
                      <ul className='flex flex-col gap-4'>
                          {LaptopMenu.map((menu) => (
                              <li key={menu} onClick={()=>setLaptopMenuOpen(false)}><a onClick={(e)=>{LaptopHandler(e)}}>{menu}</a></li>
                          ))}
                      </ul>
                  </div>
              )}
            </div>
            <div className='nav-item cursor-pointer'>
              <div>
              <div className='relative' ref={menuRef}>
                  <p onClick={() => setAccessoriesMenuOpen(!accessoriesMenuOpen)} className='text-lg'>Accessories</p>
               </div>
              </div>
              {accessoriesMenuOpen && (
                  <div className='absolute dropdown-item access' ref={dropdownRef}>
                      <ul className='flex flex-col gap-4'>
                          {AccessoriesMenu.map((menu) => (
                              <li key={menu} onClick={()=>setAccessoriesMenuOpen(false)}><a onClick={(e)=>{AccessoriesHandler(e)}}>{menu}</a></li>
                          ))}
                      </ul>
                  </div>
              )}
            </div>
          <div className='cursor-pointer text-lg nav-item-desktop'><a onClick={(e)=>{DesktopHandler(e)}}>Desktop</a></div>
        </ul>
        <div id='mobile'>
            <i id="bar" className={clicked ? 'fas fa-times' : 'fas fa-bars'}
            onClick={handleClick}>
            </i>
        </div>
    </div>
    <div className='search-section'>
        <div className='srch'>
              <input type='text' placeholder='Enter keywords to search...' id='search' value={searchQuery} onChange={handleSearchInputChange}/>
              <button type='button' onClick={handleSearchSubmit}>
                <i className='fa fa-search'></i>
              </button>
          </div>
        <div className='login-signup'>
            <div>
              {user ? (
                <div>
                  <button onClick={() => setIsSidebar(true)}>
                    <i className='large material-icons mb-2'>account_circle</i>
                  </button>
                  <p className='user-in'>{user}</p>
                  </div>):(
                  <Link to='/login'><i className='fa-solid fa-user'></i></Link>
                  )}
              {isSidebar ? <Sidebar isSidebar={isSidebar} setIsSidebar={ setIsSidebar } />: ""}
            </div>
            <div>
              <Link to='/cart'><i class="fa-solid fa-cart-shopping"></i></Link>
            </div>
        </div>
    </div> 
    </nav>
    </>
  )
}
