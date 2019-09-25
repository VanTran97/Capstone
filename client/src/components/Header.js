import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <h1>Crypto Game</h1>
                <a href="/">Crypto Search</a>
                <a href="/about">About</a>
            </header>
        );
    }
}


export default Header;