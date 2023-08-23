import React from 'react'
import nitro from '../../assets/img/acer laptop/acer nitro5.png';
import logitechkeyboard from '../../assets/img/keyboard/logitech-k120.png';
import fantecheadphone from '../../assets/img/headphones/fantech scar eg2.png';
import logitechspeaker from '../../assets/img/speaker/logitech z150.png';
import logitechmouse from '../../assets/img/mouse/logitech-g403.png';
import monitor from '../../assets/img/monitor/Samsung-tu87f.png';
export const Featured = () => {
  return (
    <div className='product-home'>
        <div className='text-2xl font-bold'>
        Featured Products
        </div>
        <div className='parent'>
          <div className='flex items-center flex-row justify-around div1'>
            <div>
              <p>Laptop</p>
              <button className='home-btn'>See Product</button>
            </div>
            <div><img src={nitro} className='home-product-img'/></div>
          </div>
          <div className='flex items-center flex-row justify-around div2'>
            <div>
              <p>Monitor</p>
              <button className='home-btn'>See Product</button>
            </div>
            <div><img src={monitor} className='home-product-img'/></div>
          </div>
          <div className='flex items-center flex-row justify-around div3'>
            <div>
              <p>Keyboard</p>
              <button className='home-btn'>See Product</button>
            </div>
            <div><img src={logitechkeyboard} className='home-product-img'/></div>
          </div>
          <div className='flex items-center flex-row justify-around div4'>
            <div>
              <p>Speaker</p>
              <button className='home-btn'>See Product</button>
            </div>
            <div><img src={logitechspeaker} className='home-product-img'/></div>
          </div>
          <div className='flex items-center flex-row justify-around div5'>
            <div>
              <p>Mouse</p>
              <button className='home-btn'>See Product</button>
            </div>
            <div><img src={logitechmouse} className='home-product-img'/></div>
          </div>
          <div className='flex items-center flex-row justify-around div6'>
            <div>
              <p>Headphone</p>
              <button className='home-btn'>See Product</button>
            </div>
            <div><img src={fantecheadphone} className='home-product-img'/></div>
          </div>
        </div>
      </div>
  )
}
