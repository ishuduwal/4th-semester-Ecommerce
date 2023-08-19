import React, {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
export const Navbar = () => {

  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setClicked(!clicked);
  };

  const LaptopHandler = (e) =>{
    e.preventDefault();
    navigate('/laptop',{state:e.target.textContent})
  }

  const AccessoriesHandler = (e) => {
    e.preventDefault();
    navigate('/accessories',{state:e.target.textContent})
  }

  const DesktopHandler = (e) => {
    e.preventDefault();
    navigate('/desktop',{state:e.target.textContent})
  }
  return (
    <>
    <nav>
    <div className="logo-toggle-btn">
        <Link to="/"><p><span>T</span>echmart</p></Link>
        <ul id="navbar" className={clicked ? "active" : ""}>
          <li className='cursor-pointer'>Laptops<i class="fa-solid fa-caret-down"></i>
           <ul>
             <li><a onClick={(e)=>{LaptopHandler(e)}}>Dell</a></li>
             <li><a onClick={(e)=>{LaptopHandler(e)}}>HP</a></li>
             <li><a onClick={(e)=>{LaptopHandler(e)}}>Asus</a></li>
             <li><a onClick={(e)=>{LaptopHandler(e)}}>Acer</a></li>
             <li><a onClick={(e)=>{LaptopHandler(e)}}>Lenovo</a></li>
             <li><a onClick={(e)=>{LaptopHandler(e)}}>Apple</a></li>
           </ul>
          </li>
          <li className='cursor-pointer'>Accessories<i class="fa-solid fa-caret-down"></i>
           <ul>
             <li><a onClick={(e)=>{AccessoriesHandler(e)}}>Monitor</a></li>
             <li><a onClick={(e)=>{AccessoriesHandler(e)}}>Keyboard</a></li>
             <li><a onClick={(e)=>{AccessoriesHandler(e)}}>Speaker</a></li>
             <li><a onClick={(e)=>{AccessoriesHandler(e)}}>Mouse</a></li>
             <li><a onClick={(e)=>{AccessoriesHandler(e)}}>MousePad</a></li>
             <li><a onClick={(e)=>{AccessoriesHandler(e)}}>Headphones</a></li>
             <li><a onClick={(e)=>{AccessoriesHandler(e)}}>Graphics Card</a></li>
             <li><a onClick={(e)=>{AccessoriesHandler(e)}}>Storage</a></li>
           </ul>
          </li>
          <li className='cursor-pointer'><a onClick={(e)=>{DesktopHandler(e)}}>Desktop</a></li>
        </ul>
        <div id='mobile'>
            <i id="bar" className={clicked ? 'fas fa-times' : 'fas fa-bars'}
            onClick={handleClick}>
            </i>
        </div>
    </div>
    <div className='search-section'>
        <div className='srch'>
          <input type='text' placeholder='Enter keywords to search...' id='search'/>
          <i className='fa fa-search'></i>
        </div>
        <div className='login-signup'>
            <div>
             <Link to="/login"><i class="fa-solid fa-user"></i></Link>
            </div>
            <div>
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
        </div>
    </div> 
    </nav>
    </>
  )
}
