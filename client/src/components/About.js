import React, { Component } from 'react';
import Header from './Header';

class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>About Page</h1>
        <p1>This is a Crypto game created for budding investors to learn about the risks, and opportunities about the crypto trade market. This game will mimic the real world and give users insight on how real trade markets work. </p1>
        <br></br><br></br>
        <p2>The following is a general guide on how the game will operate.</p2>
        <br></br><br></br>
        <p3>1. A user will have to create and account to gain access to the crypto market. Once a user creates an account they will then gain access to the websites features such as the crypto market, graphs and user profile page. The users account will also start with $1,000,000 bogus money that they can use to invest into the crypto market.</p3>
        <br></br><br></br>
        <p3>2. Once a user buys crypto</p3>
      </div>
    );
  }
}

export default About;