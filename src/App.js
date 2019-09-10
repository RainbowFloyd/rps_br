import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';

import MainMenu from './Components/MainMenu/MainMenu';
import ChooseGame from './Components/ChooseGame/ChooseGame';
import Options from './Components/Options/Options';
import Battle from './Components/Battle/Battle';

class App extends Component {

  state = {
    opponents: {},
      playerList: ['player'],
      playerPairs: [],
      player: {
        username: 'default',
        alive: true,
        lastChoice: undefined,
        currentOpponents: {}
      }
  }
  componentDidUpdate = () => {
    console.log(`state updated!`)
    console.log(this.state)
  }

  handleOpponentChange = (newOpponents, newOpponentsArr, newPlayerPairs) => {
    this.setState({
      opponents: newOpponents,
      playerList: newOpponentsArr,
      playerPairs: newPlayerPairs
    });
  }

  handleCurrentOpponentChange = (newOpponents) => {
    this.setState({
      currentOpponents: newOpponents
    })
  }

  handleOpponentChoice = (opponentsChoice) => {
    let opponents = this.state.opponents
    for (let player in opponents) {
      opponents[player].lastChoice = opponentsChoice[player]
    }
    this.setState({
      opponents: opponents
    })
  }

  handlePlayerChoice = (choice) => {
    const player = this.state.player
    player.lastChoice = choice;
    this.setState({
      player: player
    })  
  }

  render() {
    return (
      <div>
        <p>Welcome to Rock, Paper, Scissors Battle Royal!</p>
        <button><Link to='/'>Main Menu</Link></button>
        <Route exact path='/' component={MainMenu} />

        <Route path='/gamemode' render={()=><ChooseGame 
          opponents={this.state.opponents}
          playerList={this.state.playerList}
          handleOpponentChange={this.handleOpponentChange}
          handleCurrentOpponentChange={this.handleCurrentOpponentChange}
        />}/>

        <Route path='/battle' render={()=><Battle 
          handleCurrentOpponentChange={this.handleCurrentOpponentChange}
          handleOpponentChoice={this.handleOpponentChoice}
          handlePlayerChoice={this.handlePlayerChoice}
          opponents={this.state.opponents}
          playerList={this.state.playerList}
          playerPairs={this.state.playerPairs}
          player={this.state.player}
        />}/>

        <Route path='/options' component={Options} />
      </div>
    )
  }
}

export default App;
