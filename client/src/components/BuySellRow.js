import React, { Component } from 'react';
import Buy from './Buy';

class BuySellRow extends Component {
    constructor() {
        super();
        this.state = {
            display: {
                buy: true,
                sell: true,
                back: false
            },
            show: false
        }
    }

    toggleDisplay = (e) => {
        e.preventDefault();
        if (e.target.value === 'Buy') {
            this.setState({
                display: {
                    buy: true,
                    sell: false,
                    back: true
                }
            })
        } else if (e.target.value === 'Sell') {
            this.setState({
                display: {
                    buy: false,
                    sell: true,
                    back: true
                }
            })
        } else if (e.target.value === 'Back') {
            this.setState({
                display: {
                    buy: true,
                    sell: true,
                    back: false
                }
            })
        }
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        const coinNameLow = this.props.crypto.name.toLowerCase().replace(/\s/g, '');
        const d = this.state.display;


        return (
            <tr className="table-row">
                <td className="row-logo-name">
                    <div>
                        <img className="row-logo" src={require('../assets/' + coinNameLow + '.png')} alt={coinNameLow + " logo"} />
                    </div>
                </td>
                <td className="row-name">
                    <div className="row-name-container">
                        <span>{this.props.crypto.name}</span>
                    </div>
                </td>
                <td className="row-rate">{this.props.crypto.rate.toFixed(2)}</td>
                {d.buy && d.sell && !d.back && <td className="row-buy-sell-back"><button className="row-buy-button" value="Buy" onClick={this.toggleDisplay}>{'Buy ' + this.props.crypto.base}</button></td>}
                {d.buy && d.sell && !d.back && <td className="row-buy-sell-back"><button className="row-sell-button" value="Sell" onClick={this.toggleDisplay}>{'Sell ' + this.props.crypto.base}</button></td>}
                {d.back && <td className="row-buy-sell-back"><div className="row-back"><button className="row-back-button" value="Back" onClick={this.toggleDisplay}>Back</button></div></td>}
                <td className="row-buy-sell">
                    {this.state.show && d.buy && <Buy {...this.props} />}
                    {this.state.show && d.sell && <label>SELL</label>}
                </td>
            </tr>
        );
    }
}

export default BuySellRow;