/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 3 : prevIndex - 1
    );
  };

  const visibleImages = images.slice(currentIndex, currentIndex + 3);

  const slideStyle = {
    display: 'flex',
    width: `${images.length * 33.33}%`,
    transform: `translateX(-${currentIndex * 33.33}%)`,
    transition: 'transform 0.5s ease-in-out',
  };

  return (
    <div className="slider-container">
      <div className="slider" style={slideStyle}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${visibleImages.includes(image) && 'active'}`}
          >
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <div className="slider-controls">
        <button disabled={currentIndex === 0} onClick={prev}>
          Prev
        </button>
        <button
          disabled={currentIndex === images.length - 3}
          onClick={next}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
