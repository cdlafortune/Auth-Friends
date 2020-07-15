import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Friends from "./components/Friends";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <li>
              <Link to="/login">Log In</Link>
            </li>

            <li>
              <Link to="/protected">Friends</Link>
            </li>
          </nav>
        </header>

        <Switch>
          <PrivateRoute exact path="/protected" component={Friends}/>
          <Route path="/login" component={Login}/>
          <Route component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
