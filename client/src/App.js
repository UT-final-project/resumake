import './App.css';
import Home from './components/Home/home.js';
import Navbar from './components/Navbar/navbar.js';
import Login from './components/Login/login.js';
import UserForm from './components/UserForm/userForm.js';
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
          <Route exact path="/form">
            <UserForm />
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
