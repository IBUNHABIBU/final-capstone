import './App.css';
import Home from './containers/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Models from './containers/Models';
import Booking from './containers/Booking';
import TabButton from './components/TabButton';
function App() {
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
       </Switch>
      </Router>
    </div>
  );
}

export default App;
