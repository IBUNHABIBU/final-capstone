import React from 'react';
import { useSelector } from 'react-redux';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
import Counter from './mycomponent/Counter';
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
      {/* <CounterTwo />
      <Hover /> */}
      {/* <UserComponent render={(isLogedIn) => (isLogedIn ? 'Juhudi' : 'Makaveli')} /> */}
      <Counter render={(count, incrementCount) => <CounterTwo count={count} incrementCount={incrementCount} />} />
      <Counter render={(count, incrementCount) => <Hover count={count} incrementCount={incrementCount} />} />
   
    </div>
  );
};
export default Home;
