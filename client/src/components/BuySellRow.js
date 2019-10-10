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
            <tr className="table-row">
                <td className="row-logo-name">
                    <div>
                        <img className="row-logo" src={require('../assets/' + coinNameLow + '.png')} alt={coinNameLow + " logo"} />
                    </div>
                </td>
                <td>
                    <div className="row-name-container">
                        <span className="row-name">{this.props.crypto.name}</span>
                    </div>

                </td>
                <td className="row-rate">{this.props.crypto.rate.toFixed(2)}</td>
                <td className="row-buy-sell">
                    {this.state.display && <Buy {...this.props} />}
                    <div>
                        <button className="row-buy-button" value="Buy" onClick={this.toggleDisplay}>{!this.state.display ? 'Buy' : 'Back'}</button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default BuySellRow;