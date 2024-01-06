import React from 'react'
import {Link, useLocation, useNavigate } from 'react-router-dom'
import './Accessories.css'
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
      var res = await GetAccessories();
      console.log(res )
      res = res.filter(item => item.category == state.toLowerCase())
      setAccessories(res);
      console.log(res);
    }
    console.log("acc")
    FetchAccessories()
  }, [state])
  return (
    <div className='accessories'>
      {accessories && accessories.map((item) =>
        <Link onClick={(e) => AccessoriesSelectedHandler(e, item)} className='accessories-item'>
          <img src={require('../../assets/img/uploadedImage/'+item.image)} alt="corsair-k70" className='item-image' />
          <div className='text-description text-base text-center mt-4'>
            <p className='mb-2'>{item.title}/{item.category}/{item.weight}/{item.length}</p>
            <button className='add-to-cart'>See More</button>
          </div>
        </Link>
      )}
    </div>
  )
}
