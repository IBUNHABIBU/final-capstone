import React from 'react';
import { useSelector } from 'react-redux';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
import CounterComponent from './mycomponent/CounterComponent';
import CounterTwo from './mycomponent/CounterTwo';
import Hover from './mycomponent/Hover';
// import UserComponent from './mycomponent/UserComponent';

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
      <CounterComponent>
        {
          (count, incrementCount) => <CounterTwo count={count} incrementCount={incrementCount} />
        }
      </CounterComponent>
      <CounterComponent>
        {
          (count, incrementCount) => <Hover count={count} incrementCount={incrementCount} />
        }
      </CounterComponent>

    </div>
  );
};
export default Home;
