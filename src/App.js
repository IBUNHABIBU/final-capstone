import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Models from './containers/Models';
import Booking from './containers/Booking';
import TabButton from './components/TabButton';
import CarForm from './containers/CarForm';
import { checkLoginStatus } from './redux/actions/fetch';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkLoginStatus());
  }, []);

  return (
    <div className="App">
      <Router>
        <TabButton />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/models" exact component={Models} />
          <Route path="/booking" exact component={Booking} />
          <Route path="/newcar" exact component={CarForm} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
