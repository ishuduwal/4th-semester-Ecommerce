import React from 'react'
import './Home.css'
import { Carousel } from './Carousel';
import { Featured } from './Featured';
import { Footer } from './Footer';
export const Home = () => {
  return (
    <>
      <Carousel />
      <Featured />
      <Footer />
    </>
  )
}
