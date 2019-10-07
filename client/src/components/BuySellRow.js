import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BuySellRow extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        const coinNameLow = this.props.name.toLowerCase().replace(/\s/g,'');
        return (
            <tr>
                <td>
                    <img className="coin-logo" src={require('../assets/' + coinNameLow + '.png')} alt={coinNameLow + " logo"} />
                    <span>{this.props.name}</span>
                </td>
                <td>{this.props.rate.toFixed(2)}</td>
                <td>
                    <Link to="/buy" value="Buy" name={this.props.name}>Buy</Link>
                    <button value="Sell">Sell</button>
                </td>
            </tr>
        );
    }
}

export default BuySellRow;