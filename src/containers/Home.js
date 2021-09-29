import React from 'react';
import Carousel from 'react-elastic-carousel';

const breakPoints = [
  {width: 1, itemsToShow: 1},
  {width: 550, itemsToShow: 2},
  {width: 768, itemsToShow: 3},
  {width: 1200, itemsToShow: 4},
];
const Home = () => (
  <div className="home-container">
    <h1>LATEST MODEL</h1>
    <p>Please select a car model </p>
    <Carousel breakPoints={breakPoints}>
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
      <div>Eleven</div>
      <div>Four</div>
      <div>Six</div>
      <div>One Two </div>
      <div>Seven</div>
    </Carousel>
    <div className="container m-5 model">
      <div className="arrows left" />
      <div className="arrows right" />
    </div>
  </div>
);
export default Home;
