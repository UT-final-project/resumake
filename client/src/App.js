import './App.css';
import Home from './components/Home/home.js';
import Navbar from './components/Navbar/navbar.js';
import Login from './components/Login/login.js';
import UserForm from './components/UserForm/userForm.js';
import Userhome from './components/Userhome/userhome.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from 'react';
import API from "./utils/API";
import AboutUs from './components/About/about';

function App() {
  const [user, setUser] = useState();
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  function handleUserState(id) {
    API.isLoggedIn(id)
      .then((res) => {
        console.log(`isLoggedIn Response `, { res });
        setUser(res.data);

      })
      .catch((err) => {
        console.log(err);
      })
    setUserLoggedIn(true);
  }

  function getUser() {
    console.log("GET USER FUNCTION");
    if (userLoggedIn) {
      console.log("userLoggedIn");
      console.log(user);
      return user;
    }
    else {
      console.log("NO USER LOGGED IN");
      return;
    }
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
            <UserForm 
            userLoggedIn={userLoggedIn}
            getUser={getUser}
            user={user}
            />
          </Route>
          <Route exact path="/userhome">
            <Userhome
              userLoggedIn={userLoggedIn}
              getUser={getUser}
              user={user}
            />
          </Route>
          <Route exact path="/aboutus">
            <AboutUs/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
