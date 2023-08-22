import React from 'react';
import CardSlider from './CardSlider';

const cards = [
  {
    id: 1,
    content: <div className="card-content">Card 1</div>,
  },
  {
    id: 2,
    content: <div className="card-content">Card 2</div>,
  },
  {
    id: 3,
    content: <div className="card-content">Card 3</div>,
  },
  {
    id: 4,
    content: <div className="card-content">Card 4</div>,
  },
  {
    id: 5,
    content: <div className="card-content">Card 5</div>,
  },
  {
    id: 6,
    content: <div className="card-content">Card 6</div>,
  },
  {
    id: 7,
    content: <div className="card-content">Card 7</div>,
  },
];

const SliderMain = () => (
  <div className="app">
    <CardSlider cards={cards} />
  </div>
);

export default SliderMain;
