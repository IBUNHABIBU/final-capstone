import React from 'react';
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';

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
            <div className="card">
              <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Cadillac/Cadillac-Escalade/3027/1560320021838/front-left-side-47.jpg?tr=w-360" className="card-img-top" alt="cadillac" />
              <div className="card-body">
                <h5 className="card-title">Cadillac Escalade</h5>
                <p className="card-text">v8 of the cardcontent.</p>
                <Link to="/cars/id" className="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          </div>
          <div className="slides">
            <div className="card">
              <img src="https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/media/51/2012-cadillac-cts-inline-678-photo-623583-s-original.jpg?resize=768:*" className="card-img-top" alt="cadillac" />
              <div className="card-body">
                <h5 className="card-title">Cadillac CTS</h5>
                <p className="card-text">V6.</p>
                <Link to="/cars/id" className="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          </div>
          <div className="slides">
            <div className="card">
              <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Cadillac/Cadillac-Escalade/3027/1560320021838/front-left-side-47.jpg?tr=w-360" className="card-img-top" alt="cadillac" />
              <div className="card-body">
                <h5 className="card-title">Cadillac Escalade</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cardcontent.</p>
                <Link to="/cars/id" className="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          </div>
          <div className="slides">
            <div className="card">
              <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Cadillac/Cadillac-Escalade/3027/1560320021838/front-left-side-47.jpg?tr=w-360" className="card-img-top" alt="cadillac" />
              <div className="card-body">
                <h5 className="card-title">Cadillac Escalade</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cardcontent.</p>
                <Link to="/cars/id" className="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          </div>
          <div className="slides">
            <div className="card">
              <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Cadillac/Cadillac-Escalade/3027/1560320021838/front-left-side-47.jpg?tr=w-360" className="card-img-top" alt="cadillac" />
              <div className="card-body">
                <h5 className="card-title">Cadillac Escalade</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cardcontent.</p>
                <Link to="/cars/id" className="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          </div>
          <div className="slides">
            <div className="card">
              <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Cadillac/Cadillac-Escalade/3027/1560320021838/front-left-side-47.jpg?tr=w-360" className="card-img-top" alt="cadillac" />
              <div className="card-body">
                <h5 className="card-title">Cadillac Escalade</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cardcontent.</p>
                <Link to="/cars/id" className="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          </div>
          <div className="slides">
            <div className="card">
              <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Cadillac/Cadillac-Escalade/3027/1560320021838/front-left-side-47.jpg?tr=w-360" className="card-img-top" alt="cadillac" />
              <div className="card-body">
                <h5 className="card-title">Cadillac Escalade</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cardcontent.</p>
                <Link to="/cars/id" className="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          </div>
          <div className="slides">
            <div className="card">
              <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Cadillac/Cadillac-Escalade/3027/1560320021838/front-left-side-47.jpg?tr=w-360" className="card-img-top" alt="cadillac" />
              <div className="card-body">
                <h5 className="card-title">Cadillac Escalade</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cardcontent.</p>
                <Link to="/cars/id" className="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          </div>
        </Carousel>

      </div>
    </div>
  );
};
export default Home;
