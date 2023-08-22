import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CardSlider = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="card-slider">
      <div className="card-slider-wrapper">
        {cards.map((card) => (
          // {
          //     const { id, content } = card;
          //     return (
          //         <div key={id} className={`card ${id === currentIndex ? 'active' : ''}`}>
          //             {content}
          //         </div>
          //     );
          // }
          console.log(card)

        ))}
      </div>
      <button
        className="arrow prev"
        onClick={handlePrevClick}
        disabled={currentIndex === 0}
        type="button"
      >
        &lt;
      </button>
      <button
        className="arrow next"
        onClick={handleNextClick}
        disabled={currentIndex === cards.length - 3}
        type="button"
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
