import React, {
    Component
} from 'react';
import AuthHelpers from "./AuthHelpers";
import {
    updateBalance,
    addTransaction,
    addAsset
} from '../apiHelpers/accountModel';

//
//  TODO: Justin
//
//  Leaderboard is ranked by total asset value or 

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
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        let acc = this.state.account
        let toBuy = parseFloat(this.state.amtToBuy)
        let newBalance = acc.balance - toBuy

        await addTransaction(
            acc._id,
            this.state.type,
            this.state.crypto.base,
            this.state.crypto.name,
            toBuy
        )
        await addAsset(
            acc._id,
            this.state.crypto.base,
            this.state.crypto.name,
            toBuy / this.state.crypto.rate
        )
        await updateBalance(acc._id, newBalance)
        console.log('seetstat')
        this.setState({
            account: {
                _id: this.state.account._id,
                balance: newBalance,
                owner: this.state.account.owner
            },
            amtToBuy: ''
        })
    }

    componentDidMount() {
        console.log('mount: ' + JSON.stringify(this.state))
    }

    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    render() {
        console.log('render: ' + JSON.stringify(this.state))
        return (
            <div>
                <form className="buy" onSubmit={this.handleSubmit} >
                    <input className="buy-input"
                        placeholder="Purchase in AUD"
                        name="amtToBuy"
                        type="text"
                        pattern="^[+]?([.]\d+|\d+[.]?\d*)$"
                        onChange={this.handleChange}
                        value={this.state.amtToBuy} />
                    <input className="buy-submit" type="submit" value="Buy" />
                </form>
            </div>
        );
    }
}

export default Buy;