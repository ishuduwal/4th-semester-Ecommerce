import React, { useState, useEffect } from 'react';
import img1 from '../../assets/img/carousel/img1.jpg';
import img4 from '../../assets/img/carousel/img4.jpg';
import img3 from '../../assets/img/carousel/img3.jpg';
import img2 from '../../assets/img/carousel/img2.jpg';
import img5 from '../../assets/img/carousel/img5.jpg';

export const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    {
      image: img1,
      title: 'Embrace the extraordinary',
    },
    {
      image: img2,
      title: 'Unlock Universe of Possibilities',
    },
    {
      image: img3,
      title: 'Gearup for a tech revolution',
    },
    {
      image: img4,
      title: 'Upgrade your Gaming',
    },
    {
      image: img5,
      title: 'Experience innovation better.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [currentImage, images.length]);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="imageCarousel flex justify-center items-center">
        <div className="textOverlay">
          <h2 className="text-2xl font-bold img-text">{images[currentImage].title}</h2>
        </div>
        <div className='buttonOverlay'>
          <div>
           <button onClick={previousImage} className="carousel-button previous"><i className="fa-solid fa-arrow-left"></i></button>
          </div>
          <div>
           <button onClick={nextImage} className="carousel-button next"><i className="fa-solid fa-arrow-right"></i></button>  
          </div>
        </div>
        <img src={images[currentImage].image} alt="image-carousel"className={`img-slide ${currentImage !== 0 ? 'fade-in' : ''}`}/>
      </div>
    </>
  );
};
