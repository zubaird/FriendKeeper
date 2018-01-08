import React, { Component } from 'react';
import Add from './components/add'
import Edit from './components/edit'
import Landing from './components/landing'
import logo from './logo.svg';
import { Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
  }




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">FriendKeeper</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
