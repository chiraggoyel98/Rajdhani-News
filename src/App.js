import './App.css';

import React, { Component } from 'react'
import Navbar from './myComponents/Navbar';
import News from './myComponents/News';

export default class App extends Component {

  render() {
    return (
      <div>
      <Navbar />
      <News />
      </div>
    )
  }
}

