'use client';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import firstimage from './blackleather.jpg';
import secondimage from './leatherforexample.jpg';
import thirdimage from './thirdimageforcarousel.jpg';

const imagesDetails = [
  {
    id: 1,
    image: firstimage.src,
    category: 'Our Products',
    title: 'Leather Finishing',
    details: "Leather finishing chemicals are a vital component in the leather manufacturing process, contributing to the final appearance, feel, and durability of leather products. "
  },
  {
    id: 2,
    image: secondimage.src,
    category: 'About Us',
    title: 'Wetend Chemicals',
    details: 'Top Notch Chemicals'
  },
  {
    id: 3,
    image: thirdimage.src,
    category: 'News and Events',
    title: 'Shoe care',
    details: 'Top Notch Chemicals'
  }
];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesDetails.length);
    }, 1800000);

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
    console.log('Go to slide clicked');
    setCurrentImageIndex(index);
  };

  return (
    <div className='carousel-container'>
      <div className='carousel'>
        <h2 className='Hameedsheading'>Hameed's</h2>
        <div className='slides' style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
          {imagesDetails.map((item, index) => (
            <div
              key={item.id}
              className='slide'
            >
              <img src={item.image} alt={`Slide ${index}`} />
              <div className="slide-content">
                <h2 className='carousel-category'>{item.category}</h2>
                <h2 className='carousel-title'>{item.title}</h2>
                <p className='carousel-details'>{item.details}</p>
              </div>
            </div>
          ))}
        </div>
        <button className='arrow prev' onClick={goToPrevSlide}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button className='arrow next' onClick={goToNextSlide}>
          <FontAwesomeIcon icon={faArrowRight} />
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
