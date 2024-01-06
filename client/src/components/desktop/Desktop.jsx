import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Desktop.css'
import { useEffect, useState } from 'react';
import { GetDesktop } from '../../function/Desktop';
export const Desktop = () => {
    const location = useLocation();
    const { state } = location;
    const [desktop, setdesktop] = useState([])
    
    const navigate = useNavigate();
    const DesktopSelectedHandler = (e, item) => {
        e.preventDefault();
        navigate('/desktopdetail',{state:item})
    }
    useEffect(() => {
        const FetchDesktop = async () => {
            const res = await GetDesktop();
            setdesktop(res);
            console.log(res);
        }
        FetchDesktop()
    },[])
  return (
      <div className='desktop'>
          {desktop && desktop.map((item) => 
              <Link onClick={(e) => DesktopSelectedHandler(e, item)} className='desktop-item'>
                  <img src={require('../../assets/img/uploadedImage/'+item.image)} alt="hp-omen-40l" className='item-image' />
                  <div className='text-description text-base text-center mt-4'>
                      <p className='mb-2'>{item.title}/{item.brand}/{item.price}</p>
                      <button className='add-to-cart'>See More</button>
                  </div>
              </Link>
          )}
      </div>
  )
}
