import './App.css';
import Home from './containers/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Models from './containers/Models';
function App() {
  return (
    <div className="App">
      <Router>
       <Nav />
       <Switch>
         <Route path="/" exact component={Home} />
         <Route path="/login" exact component={Login} />
         <Route path="/signup" exact component={Signup} />
         <Route path="/models" exact component={Models} />
       </Switch>
      </Router>
    </div>
  );
}

export default App;
