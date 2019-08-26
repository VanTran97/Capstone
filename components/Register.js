import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './register.css';
import Navbar from './Navbar';

class Register extends Component {

    render() { 
        return ( 
            <div>
                <h1>Register</h1>

                <h3>First Name</h3>
                <input type="fname"></input>
                <h3>Last Name</h3>
                <input type="lname"/>
                <h3>Username</h3>
                <input type="uname"/> 
                <h3>Password</h3>
                <input type="password"/>
                <h3>E-Mail Address</h3>
                <input type="email"></input>
                <br></br>
                <br></br>
                <br></br>
                <button class="button1"><Link to={"/login"}>Register</Link></button>
                <br></br>
            </div>
    
         );
    }
}
 
export default Register;
