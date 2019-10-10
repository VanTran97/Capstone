import React, { Component } from 'react';
import Header from './Header';
import AuthHelpers from "./AuthHelpers";

class BuyPage extends Component {

    Auth = new AuthHelpers();

    componentDidMount() {
        if (!this.Auth.loggedIn()) {
            this.props.history.replace("/login");
        }
        if(!this.props.location.state) {
            this.props.history.replace("/buysell");
        }
    }

    render() {
        if (this.Auth.loggedIn() && this.props.location.state) {
            console.log(this.props);
            return (
                <div>
                    <Header />
                    <p>Buy Page</p>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default BuyPage;