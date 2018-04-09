import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  onChangeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log('state: ', this.state);
  }

  onSignUpHandler() {
    console.log('fired onSignUpHandler');

    const payload = {
      username: this.state.username,
      password: this.state.password
    }

    axios.post('/api/user/signup', payload)
      .then(response => {
        console.log('Server replied with ...', response);
      })
      .catch(error => {
        console.log('Server errored out with ...', error);
      });
  }

  onLoginHandler() {
    console.log('fired onLogin Handler');

    axios.get(`/api/user/login/${this.state.username}/${this.state.password}`)
      .then(response => {
        response.status === 202 && this.props.toggleLogin();
      })
      .catch(error => {
        console.log('Server error: ', error);
      });
  }

  render() {
    return (
      <div>
        <div>Username: </div>
        <input
          name="username"
          onChange={this.onChangeHandler.bind(this)}
        />
        <br /><br />
        <div>Password: </div>
        <input
          name="password"
          type="password"
          onChange={this.onChangeHandler.bind(this)}
        />
        <br /><br />
        <button onClick={this.onLoginHandler.bind(this)}>
          Login
        </button>
        <br />
        <button onClick={this.onSignUpHandler.bind(this)}>
          Sign Up
        </button>
      </div>
    )
  }
}