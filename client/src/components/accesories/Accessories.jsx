import React from 'react'
import {Link, useLocation, useNavigate } from 'react-router-dom'
import './Accessories.css'
import corsair from '../../assets/img/keyboard/corsair-k70.jpg'
import { useEffect, useState } from 'react';
import { GetAccessories } from '../../function/Accessories';
export const Accessories = () => {
    const location = useLocation();
    const {state} = location; 
    const [ accessories, setAccessories ] = useState([])
    
  const navigate = useNavigate();
  const AccessoriesSelectedHandler = (e, item) => {
    e.preventDefault();
    navigate('/accessoriesdetail',{state:item})
  }
  useEffect(() => {
    const FetchAccessories = async () => {
      const res = await GetAccessories();
      setAccessories(res);
      console.log(res);
    }
    FetchAccessories()
  },[])
  return (
    <div className='accessories'>
      {accessories && accessories.map((item) =>
        <Link onClick={(e) => AccessoriesSelectedHandler(e, item)} className='accessories-item'>
          <img src={corsair} alt="corsair-k70" className='item-image' />
          <div className='text-description text-base text-center mt-4'>
            <p className='mb-2'>{item.title}/{item.category}/{item.weight}/{item.length}</p>
            <button className='add-to-cart'>Add to cart</button>
          </div>
        </Link>
      )}
    </div>
  )
}
