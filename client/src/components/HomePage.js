import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="login-button">
          <Link to="/login" onClick={this.handleLoginSubmit}>Login</Link>
        </div>
        <div className="register-button">
          <Link to="/register">Register</Link>
        </div>
      </div>
    );
  }
}

export default Home;