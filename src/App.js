import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Register from './component/Register';
import Login from './component/Login';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <nav class="navbar navbar-inverse">
            <div class="container-fluid">
              <div class="navbar-header">
                <a class="navbar-brand active" href="#">BridgeLabz React</a>
              </div>
              <ul class="nav navbar-nav navbar-right">
                <li><a href="/register"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                <li><a href="/login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
              </ul>
            </div>
         </nav>
          <Switch>
              <Route path='/register' component={Register} />
              <Route path='/login' component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;