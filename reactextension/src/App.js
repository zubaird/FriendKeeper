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
      <div className='App'>
        <Landing />
        <Add />
        <Edit />
      </div>
    );
  }
}

export default App;
