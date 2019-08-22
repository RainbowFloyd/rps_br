import React, { Component } from 'react';
import './App.css';

import MainMenu from './Components/MainMenu/MainMenu';

class App extends Component {
  render() {
    return (
      <div>
        <p>Welcome to Rock, Paper, Scissors Battle Royal!</p>
        <MainMenu />
      </div>
    )
  }
}

export default App;
