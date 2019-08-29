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
      opponents: {},
      player: {
        username: 'default',
        alive: true,
        lastChoice: undefined,
        currentOpponents: {}
      }
    }
    this.handleOpponentChange = this.handleOpponentChange.bind(this);
    this.handleCurrentOpponentChange = this.handleCurrentOpponentChange.bind(this);
  }

  componentDidUpdate() {
    console.log(`state updated!`)
    console.log(this.state)
  }


  render() {
    return (
      <div>
        <p>Welcome to Rock, Paper, Scissors Battle Royal!</p>
        <button><Link to='/'>Main Menu</Link></button>
        <Route exact path='/' component={MainMenu} />

        <Route path='/gamemode' render={()=><ChooseGame 
          opponents={this.state.opponents}
          handleOpponentChange={this.handleOpponentChange}
          handleCurrentOpponentChange={this.handleCurrentOpponentChange}
        />}/>

        <Route path='/battle' render={()=><Battle 
          opponents={this.state.opponents}
          currentOpponents={this.state.currentOpponents}
          handleCurrentOpponentChange={this.handleCurrentOpponentChange}
          player={this.state.player}
        />}/>

        <Route path='/options' component={Options} />
      </div>
    )
  }

  handleOpponentChange(newOpponents) {
    this.setState({
      opponents: newOpponents
    })
  }

  handleCurrentOpponentChange(newOpponents) {
    this.setState({
      currentOpponents: newOpponents
    })
  }

}

export default App;
