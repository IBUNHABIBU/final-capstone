import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const layout = (Component) => () => (
  <div className="layout">
    <Nav />
    <div className="container">
      <div className="main-container">
        <Component />
      </div>
    </div>
    <Footer />
  </div>
);

export default layout;
