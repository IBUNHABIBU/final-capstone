/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
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
        <h1 className="heading-primary">LATEST MODEL</h1>
        <p className="paragraph">Please select a car model </p>
      </div>
      <div className="home__display">
        <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={1500}>
          {
            recents.map((car) => (
              <div key={car.id} className="slide">
                {/* <div className="slides"> */}
                <div className="slide__image">
                  <img src={car.imageUrl} className="card-img-top" alt="cadillac" />
                </div>
                {/* </div> */}
                <div className="slide__details u-mt-lg">
                  <h4 className="heading-secondary border-line">
                    {car.title}
                  </h4>
                  <p className="paragraph">{car.description}</p>
                  <div className="social--links">
                    <a href="https://github.com/IBUNHABIBU">
                      <FontAwesomeIcon icon={faGithub} className="social--icon" />
                    </a>
                    <a href="www.google.com">
                      <FontAwesomeIcon icon={faTwitter} className="social--icon" />
                    </a>
                    <a href="www.google.com">
                      <FontAwesomeIcon icon={faInstagram} className="social--icon" />
                    </a>
                  </div>
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
