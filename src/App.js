import React, { Component } from 'react';
import './App.css';

import Main_menu from './Components/MainMenu/MainMenu';

class App extends Component {
  render() {
    return (
      <div>
        <p>Welcome to Rock, Paper, Scissors Battle Royal!</p>
        <Main_menu />
      </div>
    )
  }
}

export default App;
