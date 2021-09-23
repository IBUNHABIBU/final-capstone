import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Models from './containers/Models';
import Booking from './containers/Booking';
import TabButton from './components/TabButton';
import { setUser } from './redux/actions/actions';
import CarForm from './containers/CarForm';

function App() {
  const dispatch = useDispatch();
  const checkLoginStatus = () => {
    axios.get('http://localhost:3001/logged_in', {
      withCredentials: true,
    }).then((response) => {
      dispatch(setUser(response.data));
      console.log('appjs response', response.data);
    });
  };

  useEffect(() => {
    checkLoginStatus();
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
}

export default App;
