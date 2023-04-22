import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, createBrowserRouter } from 'react-router-dom';
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
import layout from './layouts';

const App = () => {
  const dispatch = useDispatch();
  const HomeComponent = layout(Home);
  const LoginComponent = layout(Login);
  const SignupComponent = layout(Signup);
  const ModelsComponent = layout(Models);
  const CarlistComponent = layout(Carlist);
  const CarDetailsComponent = layout(CarDetails);
  const AppointmentComponent = layout(Appointment);

  useEffect(() => {
    dispatch(checkLoginStatus());
  }, []);

  const router = createBrowserRouter(
    [
      { path: '/', element: <HomeComponent /> },
      { path: '/login', element: <LoginComponent /> },
      { path: '/signup', element: <SignupComponent /> },
    ]
  )
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
