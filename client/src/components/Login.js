import React, { Component } from "react";
import Header from './Header';

/* We want to import our 'AuthHelperMethods' component in order to send a login request */
import AuthHelpers from './AuthHelpers';
import { Link } from 'react-router-dom';



class Login extends Component {

    /* In order to utilize our authentication methods within the AuthService class, we want to instantiate a new object */
    Auth = new AuthHelpers();

    state = {
        email: "",
        password: ""
    }

    /* Fired off every time the use enters something into the input fields */
    _handleChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    handleFormSubmit = (e) => {

        e.preventDefault();
        /* Here is where all the login logic will go. Upon clicking the login button, we would like to utilize a login method that will send our entered credentials over to the server for verification. Once verified, it should store your token and send you to the protected route. */
        this.Auth.login(this.state.email, this.state.password)
            .then(res => {
                if (res === false) {
                    return alert("Sorry those credentials don't exist!");
                }
                this.props.history.replace('/');
            })
            .catch(err => {
                alert(err);
            })
    }

    componentDidMount() {
        /* Here is a great place to redirect someone who is already logged in to the protected route */
        if (this.Auth.loggedIn())
            this.props.history.replace('/');
    }

    render() {
        return (
            <React.Fragment>
                <div className="login-content">
                <Header />
                    <div className="login-header">
                        <h1>Login</h1>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="email-content">
                            <div>
                                <input
                                    className="login-input"
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
                                    className="login-input"
                                    placeholder="Password"
                                    name="password"
                                    type="password"
                                    onChange={this._handleChange}
                                    value={this.state.password}
                                />
                            </div>
                        </div>
                        <input
                            className="login-submit-button"
                            type="submit"
                            onClick={this.handleFormSubmit}
                            value="Login"
                        />
                    </form>
                </div>
                <Link className="link" to="/register">Don't have an account? <span className="link-register">Register</span></Link>
            </React.Fragment>
        );
    }
}
export default Login;