import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GitHub from './Github';

class App extends Component {
  render() {
    //jackfranklin
    return (
      <div className="App">
        <GitHub username="jackfranklin"></GitHub>
        <GitHub username="laurareyeslarrosa"></GitHub>
      </div>
    );
  }
}

export default App;
