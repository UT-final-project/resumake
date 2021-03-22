import './App.css';
import Home from './components/Home/home.js';
import Navbar from './components/Navbar/navbar.js';
import Login from './components/Login/login.js';
import UserForm from './components/UserForm/userForm.js';
import Userhome from './components/Userhome/userhome.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from 'react';
import API from "./utils/API";

function App() {
  const [user, setUser] = useState()

  function handleUserState(id) {
    API.isLoggedIn(id)
      .then((res) => {
        setUser(res.data)
      })
  }


  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path={["/", "/homepage"]}>
            <Home
              handleUserState={handleUserState}
            />
          </Route>
          <Route exact path="/login">
            <Login
              handleUserState={handleUserState}
            />
          </Route>
          <Route exact path="/form">
            <UserForm />
          </Route>
          <Route exact path="/userhome">
            <Userhome
              user={user}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
