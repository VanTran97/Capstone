import React, { Component } from 'react';
import AuthHelpers from "./AuthHelpers";
import { updateBalance, addTransaction, addAsset } from '../apiHelpers/accountModel';

class Buy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.props,
            amtToBuy: '',
            type: 'buy'
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    Auth = new AuthHelpers()

    handleChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    handleSubmit = (e) => {
        e.preventDefault()

        let acc = this.state.account
        let toBuy = parseFloat(this.state.amtToBuy)
        let newBalance = acc.balance - toBuy

        updateBalance(acc._id, newBalance)
            .then(
                addTransaction(
                    acc._id,
                    this.state.type,
                    this.state.crypto.base,
                    this.state.crypto.name,
                    toBuy
                )
            )
            .then(
                addAsset(
                    acc._id,
                    this.state.crypto.base,
                    this.state.crypto.name,
                    toBuy / this.state.crypto.rate
                )
            )
            .then(
                this.setState({ amtToBuy: '' })
            )
    }

    componentDidMount() {
        console.log('mount: ' + JSON.stringify(this.state))
    }

    render() {
        console.log('render: ' + JSON.stringify(this.state))
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        className="buy-input"
                        placeholder="Amount to Purchase"
                        name="amtToBuy"
                        type="text"
                        pattern="^[+]?([.]\d+|\d+[.]?\d*)$"
                        onChange={this.handleChange}
                        value={this.state.amtToBuy}
                    />
                    <input type="submit" value="Buy" />
                </form>
            </div>
        );
    }
}

export default Buy;