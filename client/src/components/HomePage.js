import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    alert('login');
  }

  handleRegisterSubmit(event) {
    event.preventDefault();
    alert('register');
  }

  render() {
    return (
      <div>
        <div>
          <button className="login-button" onClick={this.handleLoginSubmit}>Login</button>
        </div>
        <div>
          <button className="register-button" onClick={this.handleRegisterSubmit}>Register</button>
        </div>
      </div>
    );
  }
}

export default Home;