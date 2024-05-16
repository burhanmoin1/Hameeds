'use client';
import React, { useState, useEffect } from 'react';
import firstimage from './exampleforcarousel.jpg';
import secondimage from './leatherforexample.jpg';
import thirdimage from './thirdimageforcarousel.jpg';

const imagesDetails = [
  {
    id: 1,
    image: firstimage.src,
    title: 'Leather finishing chemicals',
    details: 'Top Notch Chemicals'
  },
  {
    id: 2,
    image: secondimage.src,
    title: 'Wetend Chemicals',
    details: 'Top Notch Chemicals'
  },
  {
    id: 3,
    image: thirdimage.src,
    title: 'Shoe care',
    details: 'Top Notch Chemicals'
  }
];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesDetails.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesDetails.length);
  };

  const goToPrevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imagesDetails.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className='carousel-container'>
      <div className='carousel'>
        <div className='slides' style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
          {imagesDetails.map((item, index) => (
            <div
              key={item.id}
              className='slide'
            >
              <img src={item.image} alt={`Slide ${index}`} />
              <div className="slide-content">
                <h2>{item.title}</h2>
                <p>{item.details}</p>
              </div>
            </div>
          ))}
        </div>
        <button className='arrow prev' onClick={goToPrevSlide}>
        &larr;
        </button>
        <button className='arrow next' onClick={goToNextSlide}>
        &rarr;
        </button>
        <div className='dots'>
          {imagesDetails.map((_, index) => (
            <span
              key={index}
              className={index === currentImageIndex ? 'dot active' : 'dot'}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
