import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigator from './components/Navigator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigator />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <div class="container" >        
          <h2>MAIN Container</h2>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        
      </div>
    );
  }
}

export default App;
