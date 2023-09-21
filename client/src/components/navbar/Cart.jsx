import React,{useEffect, useRef} from 'react'
import cartImg from '../../assets/img/Dell laptop/dell-inspiron-15-5515.jpg';

export const Cart = ()=> {

  return (
      <>
        <div className='cart'>
            <div className='added-cart-item flex justify-center items-center m-8 flex-col p-4'>
                <div className='flex gap-4 justify-center items-center cart-content'>
                    <div className='img-cont'>
                        <img src={cartImg} alt="Dell Inspiron" className='added-cart-image'/>
                    </div>
                    <div>
                        <p>Dell inspiron 15 5625 Ryzen5 5625U/8gb RAM / 512GB SSD / 16.1' FHD Display</p>
                        <p>NPR.92000</p>
                    </div>
                </div>
                <div className='items-start flex'>
                    <button className='item-remove'>Remove</button>
                </div> 
            </div>
            <div className='cart-ship flex justify-between items-center px-8 py-4'>
                <div className='flex'>
                    <p className='font-bold'>Total Amount:</p>
                    <p className='font-bold pl-2'>99999</p>
                </div>
                <div className='flex justify-center items-center'>
                    <button className='proceed'>Proceed</button>
                </div>
            </div>
        </div>
      </>
  )
}
