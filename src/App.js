import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import MainMenu from './Components/MainMenu/MainMenu';
import ChooseGame from './Components/ChooseGame/ChooseGame';
import Options from './Components/Options/Options';

class App extends Component {
  render() {
    return (
      <div>
        <p>Welcome to Rock, Paper, Scissors Battle Royal!</p>
        <Route exact path='/' component={MainMenu} />
        <Route path='/gamemode' component={ChooseGame} />
        <Route path='/options' component={Options} />
      </div>
    )
  }
}

export default App;
