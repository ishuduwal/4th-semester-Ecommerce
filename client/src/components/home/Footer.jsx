import React from 'react'
import { Link } from 'react-router-dom';
export const Footer = () => {
  return (
    <>
      <div className='footer grid'>
        <div className='flex justify-evenly footer-first'>
        <div className='flex flex-col'>
            <p className='footer-title text-base font-bold'>Techmart</p>
            <Link>About Us</Link>
            <Link>Contact Us</Link>
            <Link>Warranty</Link>
            <Link>Privacy Policy</Link>
            <Link>Terms & Conditions</Link>
        </div>
        <div className='flex flex-col'>
            <p className='footer-title text-base font-bold'>Laptop Categories</p>
            <Link>Dell</Link>
            <Link>Lenovo</Link>
            <Link>Acer</Link>
            <Link>Asus</Link>
            <Link>HP</Link>
        </div>
        <div className='flex flex-col'>
            <p className='footer-title text-base font-bold'>Accessories</p>
            <Link>Mouse</Link>
            <Link>Monitor</Link>
            <Link>Keyboard</Link>
            <Link>Storage</Link>
            <Link>RAM</Link>
            <Link>Mousepad</Link>
            <Link>Headphone</Link>
            <Link>Graphics Card</Link>
            <Link>Speaker</Link>
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
            <div>
                <input type='email' placeholder='Enter your Email' className='footer-email' />
                <button className='footer-btn'><i class="fa-solid fa-paper-plane"></i></button>
            </div>
        </div>
        </div>
        <div className='text-center'>
            <p>© 2022 Techmart. All rights reserved - Developed by IshuDuwal and Ravi Basnet</p>
            <p>"Dive into our digital universe and find the perfect gadget that complements your lifestyle"</p>
        </div>
      </div>
    </>
  )
}
