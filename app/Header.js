"use client";
import React , { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HameedsLogo from './Hameedslogo.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
          setIsMobile(window.innerWidth <= 768); // Adjust this value according to your breakpoint
      };

      // Initial check
      handleResize();

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
  }, []);

    const scrollToAboutUsSection = () => {
      const section = document.getElementById('aboutus');
      if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
      }
  };

  const scrollToContactUsSection = () => {
    const section = document.getElementById('contactus');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

  const scrollToProductsSection = () => {
    const section = document.getElementById('products');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};


    useEffect(() => {
        const handleScroll = () => {
          if (menuOpen && window.scrollY > 0.01) {
            setMenuOpen(false);
          }
        };

        if (menuOpen) {
          window.addEventListener('scroll', handleScroll);
        }
 
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [menuOpen]);


    const navContainer = {
        visible: {
          x: 0,
          transition: {
            delay: 0.02,
            type: 'tween'
          }
        },
        hidden: {
          x: 800,
          transition: {
            delay: 0.02,
            duration: 0.2,
            type: 'tween'
          }
        }
      };

    return ( 
        <motion.div className="main-header">
            <motion.img src={HameedsLogo.src}
                className='HeaderLogo' /> 
            {isMobile ? (
                <motion.button
                    className={`menu-button ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}>
                    <motion.div className="menu-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </motion.div>
                </motion.button>
            ) : (
                <div className="desktop-links">
                    <a href='/#aboutus' className="individual-link">About Us</a>
                    <a href='/#contactus' className="individual-link">Contact Us</a>
                    <a href='/#products' className="individual-link">Products</a>
                </div>
            )}
            <AnimatePresence>
            {menuOpen && (
                <motion.div
                    className="menu-overlay"
                    initial="hidden"
                    animate={menuOpen ? "visible" : "hidden"}
                    exit="hidden"
                    variants={navContainer}
                >
                    <div className="menu-items">
                        <motion.div className='menu-item' initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 0.1}} onClick={scrollToAboutUsSection}>About Us</motion.div>
                        <motion.div className='menu-item' initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 0.18}} onClick={scrollToContactUsSection}>Contact Us</motion.div>
                        <motion.div className='menu-item' initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 0.32}} onClick={scrollToProductsSection}>Products</motion.div>
                    </div>
                </motion.div>
            )}
            </AnimatePresence>
        </motion.div>
        );
    }

export default Header;
