/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 3 ? 0 : prevIndex + 1));
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 3 : prevIndex - 1));
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
        {
            images.map((car) => (
              <div key={car.id} className="slide-container">
                <div className="slides">
                  <div className="card">
                    <img src={car.imageUrl} className="card-img-top" alt="cadillac" />
                  </div>
                </div>
                <div className="slide__details">
                  <h4>
                    rav
                  </h4>
                  <p className="paragraph">{car.description}</p>
                  <div className="social-links">
                    <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
                    <FontAwesomeIcon icon={faTwitter} className="social-icon" />
                    <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                  </div>
                </div>
              </div>
            ))
          }
      </div>
      <div className="slider-controls">
        <button type="submit" disabled={currentIndex === 0} onClick={prev} className="btn btn--display">
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
