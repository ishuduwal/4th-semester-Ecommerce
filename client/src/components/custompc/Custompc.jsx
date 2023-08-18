import React from 'react'
import { useLocation } from 'react-router-dom'
import './Custompc.scss'
export const Custompc = () => {
    const location = useLocation();
    const {state} = location; 
  return (
    <div className='custompc'>{state}</div>
  )
}
