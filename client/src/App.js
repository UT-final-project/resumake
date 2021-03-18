import './App.css';
import Home from './components/Home/home.js';
import Navbar from './components/Navbar/navbar.js';
import Login from './components/Login/login.js';
import Userhome from './components/Userhome/userhome.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path ={["/", "/homepage"]}>
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/userhome">
            <Userhome />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
