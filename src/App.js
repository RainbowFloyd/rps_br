import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';

import MainMenu from './Components/MainMenu/MainMenu';
import ChooseGame from './Components/ChooseGame/ChooseGame';
import Options from './Components/Options/Options';
import Battle from './Components/Battle/Battle';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <p>Welcome to Rock, Paper, Scissors Battle Royal!</p>
        <button><Link to='/'>Main Menu</Link></button>
        <Route exact path='/' component={MainMenu} />
        <Route path='/gamemode' component={ChooseGame} />
        <Route path='/options' component={Options} />
        <Route path='/battle' component={Battle} />
      </div>
    )
  }
}

export default App;
