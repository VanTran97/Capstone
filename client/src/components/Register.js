import React, { Component } from "react";
import AuthHelpers from './AuthHelpers';
import Header from './Header';
import axios from "axios";
import { Link } from 'react-router-dom';

export default class Register extends Component {
    Auth = new AuthHelpers();
    state = {
        name: "",
        email: "",
        password: ""
    }

    _handleChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/users/", {
            username: this.state.name,
            email: this.state.email,
            password: this.state.password
        }).then((data) => {
            console.log(data);
            this.props.history.replace('/login');
        })
    }

    componentDidMount() {
        console.log(this.Auth.loggedIn());
        if (this.Auth.loggedIn()) {
            this.props.history.push('/dashboard')
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="login-content">
                <Header />
                    <div className="login-header">
                        <h1>Register</h1>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="name-content">
                            <div>
                                <input
                                    className="register-input"
                                    placeholder="Name"
                                    name="name"
                                    type="text"
                                    onChange={this._handleChange}
                                    value={this.state.name}
                                />
                            </div>
                        </div>
                        <div className="email-content">
                            <div>
                                <input
                                    className="register-input"
                                    placeholder="Email"
                                    name="email"
                                    type="email"
                                    onChange={this._handleChange}
                                    value={this.state.email}
                                />
                            </div>
                        </div>
                        <div className="password-content">
                            <div>
                                <input
                                    className="register-input"
                                    placeholder="Password"
                                    name="password"
                                    type="password"
                                    onChange={this._handleChange}
                                    value={this.state.password}
                                />
                            </div>
                        </div>
                        <input
                            className="register-submit-button"
                            type="submit"
                            onClick={this.handleFormSubmit}
                            value="Register"
                        />
                    </form>
                </div>
                <Link className="link" to="/login">Already have an account? <span className="link-register">Login</span></Link>
            </React.Fragment>
        );
    }
}