import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const loginStatus = useSelector((state) => state);
  console.log('login', loginStatus);
  return (
    <div>
      <h1>Logo </h1>
    </div>
  );
};
export default Home;
