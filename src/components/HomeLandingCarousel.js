// HomeLandingCarousel.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    title: "Welcome to Dhriti Solutions",
    description: "Solutions delivery with your best interests and ready for you to Take-On!!",
  },
  {
    title: "Empowering Digital Transformation",
    description: "We help businesses modernize with innovative technology solutions and expert consulting.",
  },
  {
    title: "Staffing for the Future",
    description: "Access top-tier tech talent and scalable workforce solutions for every stage of growth.",
  }
];

const arrowStyle = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(0,0,0,0.4)',
  color: 'white',
  border: 'none',
  borderRadius: '50%',
  fontSize: '2rem',
  width: '40px',
  height: '40px',
  cursor: 'pointer',
  zIndex: 2
};

const HomeLandingCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToPrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const variants = {
    enter: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100
    }),
    center: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction < 0 ? 100 : -100
    })
  };

  return (
    <section
      id="home"
      style={{
        backgroundImage: `url('/images/Banner-11.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        minHeight: '500px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '2rem 4rem',
        overflow: 'hidden'
      }}
    >
      {/* Left Text Box */}
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          style={{
            backgroundColor: 'rgba(66, 29, 0, 0.9)',
            padding: '2rem',
            borderRadius: '8px',
            maxWidth: '480px',
            position: 'absolute'
          }}
        >
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            {slides[currentIndex].title}
          </h1>
          <p>{slides[currentIndex].description}</p>
        </motion.div>
      </AnimatePresence>

      {/* Right Visual Placeholder */}
      <div style={{ flex: 1 }}></div>

      {/* Arrows */}
      <button onClick={goToPrev} style={{ ...arrowStyle, left: '1rem' }}>‹</button>
      <button onClick={goToNext} style={{ ...arrowStyle, right: '1rem' }}>›</button>
    </section>
  );
};

export default HomeLandingCarousel;
