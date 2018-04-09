import React, { Component } from 'react';
import Login from './Login';
import Home from './Home';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    }
  }

  loginHandler() {
    this.setState({ isLoggedIn: true });
  }

  logoutHandler() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    return (
      <div>
        {
          this.state.isLoggedIn ?
            <Home
              toggleLogout={this.logoutHandler.bind(this)}
            />
            :
            <Login
              toggleLogin={this.loginHandler.bind(this)}
            />
        }
      </div>
    )
  }
}