import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

const Home = () => {
  const loginStatus = useSelector((state) => state);
  console.log('login', loginStatus);
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    console.log('heo');
    setCount(count + 1);
  };

  return (
    <div>
      <h1>
        Logo
        {count}
      </h1>
      <ClickCounter eventHandler={incrementCount} />
      <HoverCounter eventHandler={incrementCount} />
    </div>
  );
};
export default Home;
