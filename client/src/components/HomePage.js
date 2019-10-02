import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <p>Crypto Game Home Page</p>
        <h1>Login Here</h1>
                <form method="GET">
                <h3>Username:</h3>
                <div class="div">
                <input type="username" name="username"></input>
                </div>
                <br></br>
                <br></br>

                <h3>Password:</h3>
                <input type="password" name="password"></input>
                <br></br>
                <br></br>

                <br></br>
                <button class="button2"><input type="submit" value="Login"></input></button>
                <br></br>
                <br></br>
                <br></br>
                </form>

      </div>
    );
  }
}

export default Home;