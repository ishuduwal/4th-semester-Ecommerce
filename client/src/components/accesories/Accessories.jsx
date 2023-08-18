import React from 'react'
import { useLocation } from 'react-router-dom'
import './Accessories.scss'
export const Accessories = () => {
    const location = useLocation();
    const {state} = location; 
  return (
    <div className='accessories'>{state}</div>
  )
}
