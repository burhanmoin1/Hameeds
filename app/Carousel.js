'use client';
import React, { useState, useEffect, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import firstimage from './blackleather.jpg';
import secondimage from './leatherforexample.jpg';
import thirdimage from './thirdimageforcarousel.jpg';
import Link from 'next/link';

const imagesDetails = [
  {
    id: 1,
    image: firstimage.src,
    category: 'Our Products',
    title: 'Leather Finishing',
    details: "Leather finishing chemicals are a vital component in the leather manufacturing process, contributing to the final appearance, feel, and durability of leather products. Hameeds has state-of-the-art leather finishing facilities to accommodate finishing.",
    link: '/products'
  },
  {
    id: 2,
    image: thirdimage.src,
    category: 'About Us',
    title: "Innovators in Leather Solutions",
    details: "Hameeds, a vanguard in the leather industry since 2020, pioneers in innovation with our comprehensive range of leather solutions. Situated in Korangi, Karachi, our cutting-edge facility caters to diverse customer needs nationwide.",
    link: '/aboutus'
  },
  {
    id: 3,
    image: secondimage.src,
    category: 'Our Products',
    title: 'Shoe care',
    details: "Shoe leather care chemicals play a crucial role in maintaining the quality, appearance, and longevity of leather footwear. At Hameeds we make sure these chemicals are designed to clean, condition, protect, and enhance the leather, ensuring that your shoes remain in optimal condition over time.",
    link: '/products'
  }
];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const startXRef = useRef(0);
  const isDraggingRef = useRef(false);
  const [timer, setTimer] = useState(null);

  const resetTimer = () => {
    clearInterval(timer); // clear previous timer
    const newTimer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesDetails.length);
    }, 18000); // set new timer
    setTimer(newTimer);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesDetails.length);
    }, 18000);
  
    resetTimer(); // Reset the timer whenever the component mounts
  
    return () => clearInterval(interval);
  }, []);
  

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesDetails.length);
    resetTimer(); 
  };

  const goToPrevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imagesDetails.length - 1 : prevIndex - 1
    );
    resetTimer(); 
  };

  const handleTouchStart = (e) => {
    startXRef.current = e.touches[0].clientX;
    isDraggingRef.current = true;
  };

  const handleTouchMove = (e) => {
    if (!isDraggingRef.current) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startXRef.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToPrevSlide();
      } else {
        goToNextSlide();
      }
      isDraggingRef.current = false;
    }
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
  };

  const handleMouseDown = (e) => {
    startXRef.current = e.clientX;
    isDraggingRef.current = true;
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    const currentX = e.clientX;
    const diff = currentX - startXRef.current;
  
    // Calculate the new position of the slides based on the drag distance
    const newPosition = -currentImageIndex * 100 + (diff / window.innerWidth) * 100;
  
    // Update the position of the slides
    document.querySelector('.slides').style.transform = `translateX(${newPosition}%)`;
  
    if (Math.abs(diff) > 300) {
      if (diff > 0) {
        goToPrevSlide();
      } else {
        goToNextSlide();
      }
      isDraggingRef.current = false;
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const goToSlide = (index) => {
    console.log('Go to slide clicked');
    setCurrentImageIndex(index);
    resetTimer(); 
  };

  return (
    <div
      className='carousel-container'
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className='carousel'>
        <h2 className='Hameedsheading'>Hameeds</h2>
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
                <Link href='/#products' className="learnmorecontainer">
                <button className="learnmorebutton">
                Learn More<span className='learnmorearrow'><FontAwesomeIcon icon={faArrowRight} /></span> 
                </button>
                </Link>
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
