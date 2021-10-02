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
              <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Cadillac/Cadillac-CTS/2785/1560319395535/front-left-side-47.jpg?impolicy=resize&imwidth=480" className="card-img-top" alt="cadillac" />
              <div className="card-body">
                <h5 className="card-title">Cadillac xt5</h5>
                <p className="card-text">v8</p>
                <Link to="/cars/id" className="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          </div>
          <div className="slides">
            <div className="card">
              <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Cadillac/Cadillac-STS/4449/1560320072554/front-left-side-47.jpg?tr=w-456" className="card-img-top" alt="cadillac" />
              <div className="card-body">
                <h5 className="card-title">Cadillac sts</h5>
                <p className="card-text">v8</p>
                <Link to="/cars/id" className="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          </div>
          <div className="slides">
            <div className="card">
              <img src="https://www.ccarprice.com/products/Cadillac-CTS-2.0L-Turbo-2019.png" className="card-img-top" alt="cadillac" />
              <div className="card-body">
                <h5 className="card-title">Cadillac Escalade</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cardcontent.</p>
                <Link to="/cars/id" className="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          </div>
          <div className="slides">
            <div className="card">
              <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Cadillac/Cadillac-CTS/2785/1560319395535/front-left-side-47.jpg?impolicy=resize&imwidth=480" className="card-img-top" alt="cadillac" />
              <div className="card-body">
                <h5 className="card-title">Cadillac cts</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cardcontent.</p>
                <Link to="/cars/id" className="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          </div>
          <div className="slides">
            <div className="card">
              <img src="https://images.hgmsites.net/lrg/2020-cadillac-escalade-2wd-4-door-luxury-angular-front-exterior-view_100721645_l.jpg" className="card-img-top" alt="cadillac" />
              <div className="card-body">
                <h5 className="card-title">Cadillac Escalade</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cardcontent.</p>
                <Link to="/cars/id" className="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          </div>
          <div className="slides">
            <div className="card">
              <img src="data:image/jpeg;base64,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" className="card-img-top" alt="cadillac" />
              <div className="card-body">
                <h5 className="card-title">Cadillac ct5</h5>
                <p className="card-text">Sk of the cardcontent.</p>
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
