import React, { Component } from 'react';
import CryptoSearch from './CryptoSearch';

class CryptoSearchPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
       crypto: 'Select Crypto',
       currency: 'Select Currency'
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.state = { year: new Date().getFullYear() }
  }

  handleChange(event) {
    // const value = target.id === 'select-crypto' ? 
    this.setState({
      crypto: event.target.value,
      currency: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.crypto);
    event.preventDefault();
  }

  render() {
    return (
        <div className="crypto-search">
          <p>Get Current Cryptocurrency Rate</p>
          <form onSubmit={this.handleSubmit}>
            <select className="select-css" id="select-crypto" value={this.state.crypto} onChange={this.handleChange}>
              <option value disabled selected>Select Crypto</option>
              <option value="BTC">Bitcoin</option>
              <option value="BCH">Bitcoin Cash</option>
              <option value="LTC">Litecoin</option>
              <option value="ETH">Ethereum</option>
            </select>
            <select className="select-css" id="select-currency" value={this.state.currency} onChange={this.handleChange}>
              <option value disabled selected>Select Currency</option>
              <option value="USD">USD</option>
              <option value="AUD">AUD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
            <button className="crypto-search__button">Search</button>
          </form>
          <p id="message-1" />
          <p id="message-2" />
          <CryptoSearch />
        </div>
    );
  }
}

export default CryptoSearchPage;