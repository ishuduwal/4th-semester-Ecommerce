import React from 'react'
import { useNavigate } from 'react-router';
import nitro from '../../assets/img/featured/acer nitro5.png';
import logitechkeyboard from '../../assets/img/featured/logitech-k120.png';
import fantecheadphone from '../../assets/img/featured/fantech scar eg2.png';
import logitechspeaker from '../../assets/img/featured/logitech z150.png';
import logitechmouse from '../../assets/img/featured/logitech-g403.png';
import graphics from '../../assets/img/featured/asus ko geforce rtx 3060 ti v2.png';
export const Featured = () => {
  const navigate = useNavigate();
  const handleLaptopClick = (productName) => {
    navigate(`/laptop`,{state:productName.toLowerCase()});
  }
  const handleAccessoriesClick = (productName) => {
    navigate(`/accessories`,{state:productName.toLowerCase()});
  }
  return (
    <div className='product-home'>
        <div className='text-2xl font-bold'>
        Featured Products
        </div>
        <div className='parent'>
          <div className='flex items-center flex-row justify-around div1'>
            <div>
              <p className='text-white'>Acer Laptop</p>
              <button className='home-btn' onClick={()=> handleLaptopClick('Acer')}>See Product</button>
            </div>
            <div><img src={nitro} className='home-product-img'/></div>
          </div>
          <div className='flex items-center flex-row justify-around div2'>
            <div>
              <p className='text-white'>Graphics Card</p>
              <button className='home-btn' onClick={()=> handleAccessoriesClick('Graphics Card')}>See Product</button>
            </div>
          <div><img src={graphics} className='home-product-img'/></div>
          </div>
          <div className='flex items-center flex-row justify-around div3'>
            <div>
              <p className='text-white'>Keyboard</p>
              <button className='home-btn' onClick={()=> handleAccessoriesClick('Keyboard')}>See Product</button>
            </div>
            <div><img src={logitechkeyboard} className='home-product-img'/></div>
          </div>
          <div className='flex items-center flex-row justify-around div4'>
            <div>
              <p className='text-black'>Speaker</p>
              <button className='home-btn' onClick={()=> handleAccessoriesClick('Speaker')}>See Product</button>
            </div>
            <div><img src={logitechspeaker} className='home-product-img'/></div>
          </div>
          <div className='flex items-center flex-row justify-around div5'>
            <div>
              <p className='text-white'>Mouse</p>
              <button className='home-btn' onClick={()=> handleAccessoriesClick('Mouse')}>See Product</button>
            </div>
            <div><img src={logitechmouse} className='home-product-img'/></div>
          </div>
          <div className='flex items-center flex-row justify-around div6'>
            <div>
              <p className='text-black'>Headphone</p>
              <button className='home-btn' onClick={()=> handleAccessoriesClick('Headphone')}>See Product</button>
            </div>
            <div><img src={fantecheadphone} className='home-product-img'/></div>
          </div>
        </div>
      </div>
  )
}
