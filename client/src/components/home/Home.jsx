import React from 'react'
import './Home.css'
import { Carousel } from './Carousel';
import { Featured } from './Featured';
import { Newitem } from './Newitem';
export const Home = () => {
  return (
    <>
      <Carousel />
      <Featured />
      <Newitem />
    </>
  )
}
