import './App.css';
import Home from './containers/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
       <Nav />
       <Switch>
         <Route path="/" exact component={Home} />
       </Switch>
      </Router>
    </div>
  );
}

export default App;
