import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AuthHelpers from './AuthHelpers';
import withAuth from './withAuth';

class Logout extends Component {

    Auth = new AuthHelpers();

    handleLogout = () => {
        this.Auth.logout()
        // this.props.history.replace('/login');
    }

    render() {
        return (
            <NavLink className="logout-link" to="/login" onClick={() => this.handleLogout()}>Logout</NavLink>
        );
    }
}

export default withAuth(Logout);