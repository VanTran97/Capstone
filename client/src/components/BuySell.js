import React, { Component } from 'react';
import Header from './Header';
import withAuth from './withAuth';

class BuySell extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="body">
            <table className="table">
                <thead>
                    <tr>
                        <th>Coin</th>
                        <th>Rate</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img className="coin-logo" src={ require('../assets/bitcoin.png') } alt="bitcoin logo" />
                            <span>Bitcoin</span>
                        </td>
                        <td>100</td>
                        <td>Buy Button</td>
                    </tr>
                    <tr>
                        <td>
                            <img className="coin-logo" src={ require('../assets/bitcoinCash.png') } alt="bitcoin cash logo" />
                            <span>Bitcoin Cash</span>
                        </td>
                        <td>200</td>
                        <td>Buy Button</td>
                    </tr>
                    <tr>
                        <td>
                            <img className="coin-logo" src={ require('../assets/ethereum.png') } alt="ethereum logo" />
                            <span>Ethereum</span>
                        </td>
                        <td>300</td>
                        <td>Buy Button</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    );
  }
}

export default withAuth(BuySell);