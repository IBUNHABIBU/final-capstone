import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Models from './containers/Models';
import { checkLoginStatus } from './redux/actions/fetch';
import CarList from './containers/CarList';
import CarDetails from './containers/CarDetails';
import Appointment from './containers/Appointment';
import layout from './layouts';
import './App.scss';
import Pop from './containers/Pop';
import Project from './containers/Project';

const App = () => {
  const dispatch = useDispatch();
  const HomeComponent = layout(Home);
  const LoginComponent = layout(Login);
  const SignupComponent = layout(Signup);
  const ModelsComponent = layout(Models);
  const CarListComponent = layout(CarList);
  const CarDetailsComponent = layout(CarDetails);
  const AppointmentComponent = layout(Appointment);
  const PopComponent = layout(Pop);
  const ProjectComponent = layout(Project);

  useEffect(() => {
    dispatch(checkLoginStatus());
  }, []);

  const router = createBrowserRouter(
    [
      { path: '/', element: <HomeComponent /> },
      { path: '/login', element: <LoginComponent /> },
      { path: '/signup', element: <SignupComponent /> },
      { path: '/models', element: <ModelsComponent /> },
      { path: '/cars', element: <CarListComponent /> },
      { path: '/cars/:id/:slug', element: <CarDetailsComponent /> },
      { path: '/appointments', element: <AppointmentComponent /> },
      { path: '/pop', element: <PopComponent /> },
      { path: '/projects', element: <ProjectComponent /> },
    ],
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
