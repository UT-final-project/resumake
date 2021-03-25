import './App.css';
import Home from './components/Home/home.js';
import Navbar from './components/Navbar/navbar.js';
import Login from './components/Login/login.js';
import UserForm from './components/UserForm/userForm.js';
import Userhome from './components/Userhome/userhome.js';
import Resume from './pages/Resume/Resume';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from 'react';
import API from "./utils/API";
import AboutUs from './components/About/about';
import NothingHere from './components/NothingHere/NothingHere';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPenFancy, faSave, faEye, faArrowRight, faArrowLeft, faPlus, faSignInAlt, faSignOutAlt, faUserPlus, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import UserContext from "./utils/UserContext";


library.add(fab, faPenFancy, faSave, faEye, faArrowRight, faArrowLeft, faPlus, faSignInAlt, faSignOutAlt, faUserPlus, faFileAlt)

function App() {
  const [user, setUser] = useState();
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  function handleUserState(id) {
    API.isLoggedIn(id)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setUserLoggedIn(true);
  };

  function getUser(user) {
    if (userLoggedIn) {
      return user;
    }
    else {
      return;
    };
  };

  function handleLogOut(e) {
    e.preventDefault();
    setUser();
    setUserLoggedIn(false);
    console.log(`User log out status ${userLoggedIn}`);
    API.logout(user);
    window.location.href = "/login";
  }


  return (
    <Router>
      <div>
        <UserContext.Provider value={{ user, userLoggedIn, handleLogOut }}>
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
            {userLoggedIn ? 
            <Route exact path="/form">
              <UserForm
                getUser={getUser}
              />
            </Route> :
            <Route exact path="/form">
              <NothingHere />
            </Route>
            }
            <Route exact path="/userhome">
              <Userhome
                getUser={getUser}
              />
            </Route>
            <Route exact path="/aboutus">
              <AboutUs/>
            </Route>
            <Route exact path="/resume/:email">
              <Resume/>
            </Route>
          </Switch>
        </UserContext.Provider>
      </div>
    </Router>
  );
};

export default App;
