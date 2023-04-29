/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'react-elastic-carousel';
import { recentCars } from '../redux/actions/fetch';
// import ImageDisplay from './ImageDisplay';
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
const Home = () => {
  const recents = useSelector((state) => state.recent);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(recentCars());
  }, []);
  return (
    <div className="home">

      <div className="home__header">
        <h1 className="home__header__title">LATEST MODEL</h1>
        <p className="home__header__subtitle">Please select a car model </p>
      </div>
      <div className="home__display">
        <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={1500}>
          {
            recents.map((car) => (
              <div key={car.id} className="slide">
                {/* <div className="slides"> */}
                  <div className="card">
                    <img src={car.imageUrl} className="card-img-top" alt="cadillac" />
                  </div>
                {/* </div> */}
                <h4>
                  {car.title}
                </h4>
              </div>
            ))
          }
        </Carousel>
      </div>
    </div>
  );
};
export default Home;
