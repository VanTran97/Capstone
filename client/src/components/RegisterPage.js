import React, { Component } from 'react';
import Register from './Register';

class RegisterPage extends Component {
  _success = false;
  _submitted = false;

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      response: {},
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(data) {
    const apiUrl = 'http://localhost:3001/users';

    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    };

    fetch(apiUrl, options)
      .then(res => {
        if (res.status === 201) {
          this._success = true;
          res.json();
        } else {
          this._success = false;
        }
      })
      .then(result => {
        this.setState({ respose: result })
      }, (error => this.setState({ error })))
    this._submitted = true;
  }

  render() {
    return (
      <div className="register-page-content">
        <div className="register-page-alert-box">
          {this._submitted 
            ? (this._success 
            ? <label className="register-page-alert-success">Register successful</label> 
            : <label className="register-page-alert-fail">Register failure, please try again</label>) 
            : <label className="register-page-alert-none"></label> }
        </div>
        <Register onFormSubmit={this.onFormSubmit} />
        {this.state.error && <div>Error: {this.state.error.message}</div>}
      </div>
    );
  }
}

export default RegisterPage;