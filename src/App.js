import React, { Component } from 'react';
import RandomColor from './RandomColor';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App site">
        <div className="wrapper">
          <header className="App-header">
            <h1 className="App-title">Guess the Color!</h1>
          </header>
          <RandomColor />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
