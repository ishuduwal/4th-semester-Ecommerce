import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Laptop.css'
import dellinspiron from '../../assets/img/Dell laptop/dell-inspiron-15-5515.jpg';
import { useEffect } from 'react';
import { GetLaptop } from '../../function/Laptop';
export const Laptop = () => {

    const location = useLocation();
    const {state} = location; 
  const [laptop, setLaptop] = useState([])

  const navigate = useNavigate();
  
  const LaptopSelectedHandler = (e, item) => {
    e.preventDefault();
    navigate('/laptopdetail', { state:item})
  }
  useEffect(() => {
    const FetchLaptop = async()=> {
      const res = await GetLaptop();
      setLaptop(res);
      console.log(res)
    }
    FetchLaptop()
    },[])

  return (
    <div className='laptop'>
      {laptop && laptop.map((item) =>
        <Link onClick={(e)=>LaptopSelectedHandler(e,item)} className='item'>
        <img src={dellinspiron} alt="Dell Inspiron" className='item-image' />
        <div className='text-description text-base text-center mt-4'>
            <p className='mb-2'>{item.title} {item.cpu} / {item.ram } RAM / {item.storage} SSD / {item.display} FHD Display</p>
          <button className='add-to-cart'>Add to cart</button>
        </div>
        </Link>
      )}
    </div>
  )
}
