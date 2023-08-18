import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import dellinspiron from '../../assets/img/Dell laptop/dell-inspiron-15-5515.jpg';
import './Laptop.css'
export const Laptopdetail = () => {
  const location = useLocation()
  const { state } = location
  
        const [quantity, setQuantity] = useState(1);
        const [totalPrice, setTotalPrice] = useState(parseInt(state.price));

  console.log(typeof parseInt(state.price))
  
        const handleAddClick = () => {
            setQuantity(quantity + 1);
            setTotalPrice((price)=>price + parseInt(state.price) );
  };
  
        const handleSubtractClick = () => {
            if (quantity > 1) {
                setQuantity(quantity - 1);
                setTotalPrice((price)=>price - state.price);
            }
        };
  return (
    <div className='laptop-detail flex'>
          <div>
              <img src={dellinspiron} alt='Dell Inspiron' className='detail-img'/>
          </div>
          <div className='detail-text'>
        <h2 className='text-xl font-bold'>{ state.title}</h2>
              <h3 className='font-bold'>Product Detail</h3>
        <p className='flex'><p className='mr-1 font-semibold'>Brand:</p>{ state.brand}</p>
        <p className='flex'><p className='mr-1 font-semibold'>CPU:</p>{state.cpu}</p>
              <p className='flex'><p className='mr-1 font-semibold'>Graphics:</p>{state.graphic}</p>
        <p className='flex'><p className='mr-1 font-semibold'>Ram:</p>{ state.ram }</p>
              <p className='flex'><p className='mr-1 font-semibold'>Storage:</p>{state.storage}</p>
              <p className='flex'><p className='mr-1 font-semibold'>Weight:</p>{state.weight}</p>
        <p className='flex'><p className='mr-1 font-semibold'>Display:</p>{ state.weight }</p>
              <div className='laptop-price'>
                <p>NPR {totalPrice}</p>
              </div>
              <div className='flex gap-16 quantity-cart'>
                  <div className='flex'>
                      <p className='mt-2 mr-4'>Quantity:</p>
                      <button className='subtract mr-4' onClick={handleSubtractClick}><i class="fa-solid fa-minus"></i></button>
                      <input type='number' className='number' value={quantity} readOnly/>
                      <button className='add ml-4' onClick={handleAddClick}><i class="fa-solid fa-plus"></i></button>
                  </div>
                  <div>
                    <button className='add-to-cart-detail'>Add-to-cart</button>  
                  </div>
              </div>
          </div>
    </div>
  )
}
