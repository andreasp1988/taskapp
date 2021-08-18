
import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddAufgabe from './components/AddAufgabe';
import UpdateAufgabe from './components/UpdateAufgabe';
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/registation" component={Registration} />
            <Route path="/addAufgabe" component={AddAufgabe} />
            <Route path="/updateAufgabe" component={UpdateAufgabe} />
            <Route path="/home" component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
