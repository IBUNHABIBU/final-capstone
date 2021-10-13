import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Models from './containers/Models';
import TabButton from './components/TabButton';
import { checkLoginStatus } from './redux/actions/fetch';
import CarList from './containers/CarList';
import CarDetails from './containers/CarDetails';
import Appointment from './containers/Appointment';

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
          <Route path="/cars" exact component={CarList} />
          <Route path="/cars/:id" exact component={CarDetails} />
          <Route path="/appointment/" exact component={Appointment} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
