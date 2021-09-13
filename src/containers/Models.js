import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Models = () => (
  <div className="container m-5 model">
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USC90CAS011B021003.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-cadillac-escalade-001-1567021710.jpg?crop=0.681xw:0.604xh;0.218xw,0.396xh&resize=1200:*"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.dealer.com/ddc/vehicles/2020/CADILLAC/Escalade/SUV/perspective/front-left/1982_22.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
);

export default Models;
