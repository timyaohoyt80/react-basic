import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header';

class App extends Component {
  // rednerHeader() {
  //   return (
  //     <Fragment>
  //       <h1>Hello World!</h1>
  //       <h2>Where is my hot loader?</h2>
  //     </Fragment>
  //   );
  // }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Header></Header>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
