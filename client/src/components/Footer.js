import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = { year: new Date().getFullYear() }
    }

    render() {
        return (
            <footer className="footer">
                <div className="content-container">
                    <div className="footer__content">
                        <ul>
                            <li>
                                &copy; {this.state.year} Crypto-Game
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;