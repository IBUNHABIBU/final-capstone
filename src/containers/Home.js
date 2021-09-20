import axios from 'axios';
import React, { useEffect } from 'react';
import { setUser } from '../redux/actions/actions';

const Home = () => {
  const checkLoginStatus = () => {
    axios.get('http://localhost:3001/logged_in', {
      withCredentials: true,
    }).then((response) => {
      setUser(response.data);
    }).catch((error) => {
      console.log('Error', error);
    });
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);
  return (
    <div>
      <h1>
        Logo
      </h1>
    </div>
  );
};
export default Home;
