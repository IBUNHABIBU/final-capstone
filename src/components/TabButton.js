import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Booking from '../containers/Booking';
// import Lifestyle from '../containers/Lifestyle';
import Models from '../containers/Models';
// import PropTypes from 'prop-types';

const TabButton = () => {
  const [tab, setTab] = useState(1);
  const toggleTab = (index) => {
    setTab(index);
  };
  return (
    <div className="tab-container">
      <div className="logo">
        <img src="logo.jpg" alt="" />
      </div>
      <div className="d-flex align-items-start">
        <div className="nav sidenav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button onClick={() => toggleTab(1)} className={tab === 1 ? 'nav-link active' : 'nav-link'} id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</button>
          <button onClick={() => toggleTab(2)} className={tab === 2 ? 'nav-link active' : 'nav-link'} id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Models</button>
          <button onClick={() => toggleTab(3)} className={tab === 3 ? 'nav-link active' : 'nav-link'} id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Shop</button>
          <button onClick={() => toggleTab(4)} className={tab === 4 ? 'nav-link active' : 'nav-link'} id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Test Drive</button>
          <hr />
          <button type="submit" className="sinup-btn mt-5">Sinup</button>
          <div>
            <p>Already a member?</p>
            <Link to="/login">Login</Link>
          </div>

        </div>
        <div className="tab-content" id="v-pills-tabContent">
          <div className={tab === 1 ? 'tab-pane fade show active' : 'tab-pane fade'} id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
            <Models />
          </div>
          <div className={tab === 2 ? 'tab-pane fade show active' : 'tab-pane fade'} id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
            <Models />
          </div>
          <div className={tab === 3 ? 'tab-pane fade show active' : 'tab-pane fade'} id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
            <Booking />
          </div>
          <div className={tab === 4 ? 'tab-pane fade show active' : 'tab-pane fade'} id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
            lorem Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Optio porro nemo aperiam ea alias deserunt vol
            uptatem excepturi, enim officiis dicta
            nihil natus accusantium quam eum unde ipsam iste dolores laboriosam!
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabButton;
