import React, { Component } from 'react';
import Buy from './Buy';

class BuySellRow extends Component {
    constructor() {
        super();
        this.state = {
            display: false
        }
    }

    toggleDisplay = () => {
        this.setState({
            display: !this.state.display
        })
    }

    render() {
        const coinNameLow = this.props.crypto.name.toLowerCase().replace(/\s/g, '');
        return (
            <tr>
                <td>
                    <img className="coin-logo" src={require('../assets/' + coinNameLow + '.png')} alt={coinNameLow + " logo"} />
                    <span>{this.props.crypto.name}</span>
                </td>
                <td>{this.props.crypto.rate.toFixed(2)}</td>
                <td>
                    {this.state.display && <Buy {...this.props}/>}
                    <button value="Buy" onClick={this.toggleDisplay}>{!this.state.display ? 'Buy' : 'Back'}</button>
                </td>
            </tr>
        );
    }
}

export default BuySellRow;