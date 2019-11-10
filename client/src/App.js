import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/styles.scss';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="workspace">
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
