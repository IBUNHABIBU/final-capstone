import React, { useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { recentCars } from '../redux/actions/fetch';

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
  console.log('Recent', recents);
  return (
    <div className="home-container">

      <div className="heading-container">
        <h1 className="">LATEST MODEL</h1>
        <p className="lead">Please select a car model </p>
      </div>
      <div className="container m-5 model">

        <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={1500}>
          {
            recents.map((car) => (
              <div key={car.id} className="slides">
                <div className="card">
                  <img src={car.imageUrl} className="card-img-top" alt="cadillac" />
                </div>
              </div>
            ))
          }
        </Carousel>
      </div>
    </div>
  );
};
export default Home;
