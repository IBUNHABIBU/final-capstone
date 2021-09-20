import axios from 'axios';
import React from 'react';

const Home = () => {
  const checkLoginStatus = () => {
    axios.get('http://localhost:3001/logged_in', {
      withCredentials:true,
    }).then(response => {
      console.log(response);
    })
  }
  return (
  <div>
    <h1>
      Logo
    </h1>
  </div>
)};
export default Home;
