
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
<<<<<<< HEAD
import Home from './components/Home';
=======
import Home from './components/Home'
import Kalender from './components/Kalender';
>>>>>>> 64b123b10f3d64d9542a0ff233043dc92981f691

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
<<<<<<< HEAD
            <Route path="/home" component={Home}/>
=======
            <Route path="/home" component={Home} />
            <Route path="/kalender" component={Kalender} />
>>>>>>> 64b123b10f3d64d9542a0ff233043dc92981f691
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
