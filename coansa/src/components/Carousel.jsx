// components/Carousel.js
"use client"

import React, { useState } from 'react';
import Image from 'next/image';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <div className="w-full h-64 relative overflow-hidden">
        <img
            src={images[currentIndex]}
            alt="Carousel Image"
            className="object-cover w-full h-full absolute top-0 left-0"
        />
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 w-auto h-fit rounded-full"
      >
      <svg xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 320 512" style={{fill:'#787878'}}><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 320 512" style={{fill:'#787878'}}><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
      </button>
    </div>
  );
};

export default Carousel;
