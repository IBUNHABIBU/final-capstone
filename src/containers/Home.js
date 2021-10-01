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
          <div className="slides">
          <div className="card" style="width: 18rem;">
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
          </div>
          <div className="slides">Two</div>
          <div className="slides">Three</div>
          <div className="slides">Four</div>
          <div className="slides">Five</div>
          <div className="slides">six</div>
          <div className="slides">Seven</div>
          <div className="slides">Eight</div>
        </Carousel>

      </div>
    </div>
  );
};
export default Home;
