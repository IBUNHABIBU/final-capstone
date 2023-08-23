import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CardSlider = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="card-slider">
      <div
        className="card-slider-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {cards.map((card) => (
          <div key={card.id} className="card">
            {card.content}
          </div>
        ))}
      </div>
      <button
        type="button"
        className="arrow prev"
        onClick={handlePrevClick}
      >
        &lt;
      </button>
      <button
        type="button"
        className="arrow next"
        onClick={handleNextClick}
      >
        &gt;
      </button>
    </div>
  );
};

// props validation
CardSlider.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.element).isRequired,
};
export default CardSlider;
