import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './component/Login';
import logo from './book.jpg';
import Register from './component/Register.jsx';
import {Success} from './component/Success.jsx';

class App extends React.Component {
  render() {
    return (
    <Router>
        <div>
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <img src={logo} width="40px" height="40px"/>
                <a className="navbar-brand active" href="/">BridgeLabz React</a>
              </div>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="/register"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                <li><a href="/login"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
              </ul>
            </div>
         </nav>
          <Switch>
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <Route path='/success' component={Success} />
              <Route path='/' component={Register} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;