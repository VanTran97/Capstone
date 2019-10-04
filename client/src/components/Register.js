import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
  }

  componentDidMount(){
    console.log('mounted');
  }

  handleRegisterSubmit(event) {
    event.preventDefault();
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="register-content">
        <div className="name-content">
          <div>
            <label className="register-label">Name</label>
          </div>
          <div>
            <input className="register-input"></input>
          </div>
        </div>
        <div className="email-content">
          <div>
            <label className="register-label">Email</label>
          </div>
          <div>
            <input className="register-input"></input>
          </div>
        </div>
        <div className="password-content">
          <div>
            <label className="register-label">Password</label>
          </div>
          <div>
            <input className="register-input"></input>
          </div>
        </div>
        <button className="register-submit-button" onClick={this.handleRegisterSubmit}>Submit</button>
      </div>
    );
  }
}

export default Register;