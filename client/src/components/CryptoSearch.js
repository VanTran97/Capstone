import React, { Component } from 'react';

class CryptoSearch extends Component {
  constructor(props) {
    super(props)
    this.state = { year: new Date().getFullYear() }
  }

  render() {
    return (
        <div className="crypto-search">
          <p>Get Current Cryptocurrency Rate</p>
          <form>
            <select className="select-css" id="select-crypto">
              <option value disabled selected>Select Crypto</option>
              <option value="BTC">Bitcoin</option>
              <option value="BCH">Bitcoin Cash</option>
              <option value="LTC">Litecoin</option>
              <option value="ETH">Ethereum</option>
            </select>
            <select className="select-css" id="select-currency">
              <option value disabled selected>Select Currency</option>
              <option value="USD">USD</option>
              <option value="AUD">AUD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
            <button>Search</button>
          </form>
          <p id="message-1" />
          <p id="message-2" />
        </div>
    );
  }
}

export default CryptoSearch;