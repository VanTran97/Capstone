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
        <p3>2. Once a user buys and sells crypto currencey their total balance will reduce or increase depending on whether you buy or sell</p3>
        <br></br>
        <p3>3. A user can not go into the negatives, if they have no bogus money they will have to sell their crypto shares in order to gain money</p3>
        <br></br>
        <p3>4. The game will be incremented in seasons 6 months being a season and at the end of every season the entire game resets to $1,000,000 bogus money</p3>
        <br></br>
      </div>
    );
  }
}

export default About;