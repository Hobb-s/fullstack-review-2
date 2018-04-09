import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    }
  }

  render() {
    return (
      <div>
        <div>
          Welcome!
        </div>
        <button onClick={() => this.props.toggleLogout()}>
          Logout
        </button>
      </div>
    )
  }
}