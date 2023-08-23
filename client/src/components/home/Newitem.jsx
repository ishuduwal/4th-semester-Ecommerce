import React from 'react'
import { Accessories } from '../accesories/Accessories'
export const Newitem = () => {
  return (
      <>
          <div className='newitem flex justify-center items-center flex-col'>
             <div className='text-2xl font-bold'>
               Newest Goods
              </div>
              <Accessories />
          </div>
      </>
  )
}
