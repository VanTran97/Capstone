import React, { Component } from 'react';
import Header from './Header';
import withAuth from './withAuth';

class Buy extends Component {
  render() {
      console.log(this.props)
    return (
      <div>
        <Header />
        <p>Buy Page</p>
      </div>
    );
  }
}

export default withAuth(Buy);