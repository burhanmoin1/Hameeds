'use client';
import React, { useState, useEffect } from 'react';
import firstimage from './exampleforcarousel.jpg';
import secondimage from './leatherforexample.jpg';
import thirdimage from './thirdimageforcarousel.jpg';

const Carousel = () => {
  const images = [firstimage.src, secondimage.src, thirdimage.src];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 14000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className='carousel'>
      <div className='slides' style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div
            key={index}
            className='slide'
          >
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button className='arrow prev' onClick={goToPrevSlide}>
        &lt;
      </button>
      <button className='arrow next' onClick={goToNextSlide}>
        &gt;
      </button>
      <div className='dots'>
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentImageIndex ? 'dot active' : 'dot'}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
