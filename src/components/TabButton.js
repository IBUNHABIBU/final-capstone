import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const TabButton = () => {
  const userLogin = useSelector((state) => state.isLoggedIn);
  console.log(userLogin);
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

          <Link to="/" className="link"><button onClick={() => toggleTab(1)} className={tab === 1 ? 'nav-link active' : 'nav-link'} id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</button></Link>
          <Link to="/models" className="link">

            <button onClick={() => toggleTab(2)} className={tab === 2 ? 'nav-link active' : 'nav-link'} id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Models</button>

          </Link>
          <button onClick={() => toggleTab(3)} className={tab === 3 ? 'nav-link active' : 'nav-link'} id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Shop</button>
          <Link to="/booking" className="link">

            <button onClick={() => toggleTab(4)} className={tab === 4 ? 'nav-link active' : 'nav-link'} id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Test Drive</button>
          </Link>
          <hr />
          {userLogin ? (<div>
            <p><strong>Login as </strong></p>
            <p>LogOut</p>
          </div>) : (<div className="user-container">
            <Link to="/signup" className="link"><button type="submit" className="sinup-btn mb-2 mt-5">Sinup</button></Link>
            <div>
              <p>Already a member?</p>
              <Link to="/login" className="link">Login</Link>
            </div>
          </div>)
          }
        </div>
      </div>
    </div>
  );
};

export default TabButton;
