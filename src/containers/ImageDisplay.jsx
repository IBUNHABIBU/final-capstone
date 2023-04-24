/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

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
          <div key={index} className="slide">
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <div className="slider-controls">
        <button type="submit" disabled={currentIndex === 0} onClick={prev}>
          Prev
        </button>
        <button
          type="submit"
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
