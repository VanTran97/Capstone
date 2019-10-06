import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import AuthHelperMethods from './AuthHelperMethods';

class Header extends Component {
    Auth = new AuthHelperMethods();
    render() {
        const title = 'Crypto Game';
        const option1 = 'Home';
        const option2 = 'Crypto Search';
        const option3 = 'About';
        return (
            <header className="header">
                <div className="content-container">
                    <div className="header__content">
                        <Link className="header__title" to="/">
                            <h1>{title}</h1>
                        </Link>
                        <div className="header__nav">
                            <NavLink to="/" activeClassName="is-active">
                                {option1}
                            </NavLink>
                            {this.Auth.loggedIn()
                                && <NavLink to="/cryptosearch" activeClassName="is-active">
                                    {option2}
                                </NavLink>}
                            <NavLink to="/about" activeClassName="is-active">
                                {option3}
                            </NavLink>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}


export default Header;