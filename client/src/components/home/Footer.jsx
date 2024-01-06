import React from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
export const Footer = () => {
  const navigate = useNavigate();
  const handleProductClick = (productName) => {
    navigate(`/laptop`, { state: productName.toLowerCase() });
  }
  const handleAccessoriesClick = (productName) => {
    navigate(`/accessories`, { state: productName.toLowerCase() });
  }
  return (
    <>
      <div className='footer grid'>
        <div className='flex justify-evenly footer-first'>
        <div className='flex flex-col'>
            <p className='footer-title text-base font-bold'>Techmart</p>
            <Link to='/aboutus'>About Us</Link>
            <Link>Warranty</Link>
            <Link>Privacy Policy</Link>
            <Link>Terms & Conditions</Link>
        </div>
        <div className='flex flex-col'>
            <p className='footer-title text-base font-bold'>Laptop Categories</p>
            <p onClick={()=> handleProductClick('Dell')}>Dell</p>
            <p onClick={()=> handleProductClick('Lenovo')}>Lenovo</p>
            <p onClick={()=> handleProductClick('Acer')}>Acer</p>
            <p onClick={()=> handleProductClick('Asus')}>Asus</p>
            <p onClick={()=> handleProductClick('Hp')}>HP</p>
        </div>
        <div className='flex flex-col'>
            <p className='footer-title text-base font-bold'>Accessories</p>
            <p onClick={()=> handleAccessoriesClick('Mouse')}>Mouse</p>
            <p onClick={()=> handleAccessoriesClick('Hp')}>Monitor</p>
            <p onClick={()=> handleAccessoriesClick('Keyboard')}>Keyboard</p>
            <p onClick={()=> handleAccessoriesClick('Storage')}>Storage</p>
            <p onClick={()=> handleAccessoriesClick('Ram')}>RAM</p>
            <p onClick={()=> handleAccessoriesClick('Mousepad')}>Mousepad</p>
            <p onClick={()=> handleAccessoriesClick('Headphone')}>Headphone</p>
            <p onClick={()=> handleAccessoriesClick('Graphics card')}>Graphics Card</p>
            <p onClick={()=> handleAccessoriesClick('Speaker')}>Speaker</p>
        </div>
        <div className='flex flex-col gap-8 footer-second'>
            <div className='flex flex-col gap-2'>
              <p className='footer-title text-base font-bold'>Be with Us!</p>
            <div className='gap-4 flex text-xl'>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-tiktok"></i>
            </div>
            </div>
        </div>
        </div>
        <div className='text-center'>
            <p>© 2022 Techmart. All rights reserved - Developed by IshuDuwal and Ravi Basnet</p>
        </div>
      </div>
    </>
  )
}
