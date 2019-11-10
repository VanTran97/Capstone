import React, { Component } from 'react';
import Header from './Header';
import Graph from './Graph';

class GraphPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Graph />
        </div>
      </div>
    );
  }
}

export default GraphPage;