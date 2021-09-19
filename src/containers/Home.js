import React from 'react';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
import CounterComponent from './mycomponent/CounterComponent';
import CounterTwo from './mycomponent/CounterTwo';
import Hover from './mycomponent/Hover';

const Home = () => (
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
export default Home;
