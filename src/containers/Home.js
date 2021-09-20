import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const checkUser = useSelector(state => state);
  console.log(checkUser);
  return(
  <div>
    <h1>
      Logo
    </h1>
  </div>
)};
export default Home;
