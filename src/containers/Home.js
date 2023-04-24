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
  return (
    <div className="home">

      <div className="home__header">
        <h1 className="home__header__title">LATEST MODEL</h1>
        <p className="home__header__subtitle">Please select a car model </p>
      </div>
      <div className=" m-5 model">

        <ImageDisplay />
      </div>
    </div>
  );
};
export default Home;
