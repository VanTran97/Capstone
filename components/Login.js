import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import './login.css';
import Navbar from './Navbar';

class Login extends Component {
    render() { 
        return ( 
            <div>
                <h1>Login Here</h1>

                <h3>Username:</h3>
                <input type="username" name="username"></input>
                <br></br>
                <br></br>

                <h3>Password:</h3>
                <input type="password" name="password"></input>
                <br></br>
                <br></br>

                <br></br>
                <button class="button1"><a><Link to={"/login"}>Login</Link></a></button>
                <br></br>
                <br></br>
                <br></br>
                <button class="button2"><Link to={"/register"}>Register</Link></button>

            </div>
         );
    }
}
 
export default Login;