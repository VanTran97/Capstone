import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './navbar.css';

export default class Navbar extends Component {
    render() {
        return (
            <div>

            <div class="nav">
                <a><Link to={"/login"}>Home</Link></a>
                <a><Link to={"/login"}>Buy/Sell</Link></a>
                <a><Link to={"/login"}>About</Link></a>
                <div class="dropdown">
                    <button class="dropbtn">Markets</button>
                        <div class="dropdown-content">
                            <a href="#">BTC</a>
                            <a href="#">ETH</a>
                            <a href="#">LTC</a>
                        </div>
                </div>

                <h4>Logo</h4>
            </div>

            </div>
        )
    }
}