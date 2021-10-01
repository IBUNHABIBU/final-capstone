import React from 'react';
import Carousel from 'react-elastic-carousel';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
const Home = () => {
  console.log('home');
  return (
    <div className="home-container">

      <div className="heading-container">
        <h1 className="">LATEST MODEL</h1>
        <p className="lead">Please select a car model </p>
      </div>
      <div className="container m-5 model">

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

      </div>
    </div>
  );
};
export default Home;
