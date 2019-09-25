import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CryptoSearch from './components/CryptoSearch';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="workspace">
          <CryptoSearch />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
