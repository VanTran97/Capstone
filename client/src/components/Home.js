import React, { Component } from 'react';
import Header from './Header';

/* Once the 'Authservice' and 'withAuth' componenets are created, import them into Home.js */
import AuthHelpers from './AuthHelpers';

//Our higher order component
import withAuth from './withAuth';

class Home extends Component {

  state = {
    username: ''
  }
  /* Create a new instance of the 'AuthHelperMethods' compoenent*/
  Auth = new AuthHelpers();

  _handleLogout = () => {
    this.Auth.logout()
    this.props.history.replace('/login');
  }

  //Render the protected component
  render() {
    let name = null;
    console.log('confirm: ' + JSON.stringify(this.props.confirm));
    if (this.props.confirm) {
      name = this.props.confirm.username;
    }
    //let name = this.props.confirm.email;
    console.log("Rendering Appjs!")
    return (
      <div className="Home">
        <Header />
        <div className="Home">
          <div className="main-page">
            <div className="top-section">
              <h1>Welcome, {name}</h1>
            </div>
            <div className="bottom-section">
              <button onClick={this._handleLogout}>LOGOUT</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//In order for this component to be protected, we must wrap it with what we call a 'Higher Order Component' or HOC.

export default withAuth(Home);