import React from 'react';
import { useSelector } from 'react-redux';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
import CounterTwo from './mycomponent/CounterTwo';
import Hover from './mycomponent/Hover';
import User from './mycomponent/User';

const Home = () => {
  const loginStatus = useSelector((state) => state);
  console.log('login', loginStatus);

  return (
    <div>
      <h1>
        Logo
      </h1>
      <ClickCounter name="Juma" />
      <HoverCounter />
      <CounterTwo />
      <Hover />
      <User />
    </div>
  );
};
export default Home;
