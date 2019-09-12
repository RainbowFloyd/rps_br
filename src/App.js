import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';

import MainMenu from './Components/MainMenu/MainMenu';
import ChooseGame from './Components/ChooseGame/ChooseGame';
import Options from './Components/Options/Options';
import Battle from './Components/Battle/Battle';

class App extends Component {

  state = {
    username: 'player',
    players: {},
    playerList: []
  }
  componentDidUpdate = () => {
    console.log(`state updated!`)
    console.log(this.state)
  }

  handlePlayersChange = (newPlayers, newPlayersArr) => {
    this.setState({
      players: newPlayers,
      playerList: newPlayersArr
    });
  }

  handlePlayersChoice = (playersChoice) => {
    let players = this.state.players
    for (let player in players) {
      players[player].lastChoice = playersChoice[player]
    }
    this.setState({
      players: players
    })
  }

  render() {
    return (
      <div>
        <p>Welcome to Rock, Paper, Scissors Battle Royal!</p>
        <button><Link to='/'>Main Menu</Link></button>
        <Route exact path='/' component={MainMenu} />

        <Route path='/gamemode' render={()=><ChooseGame 
          players={this.state.players}
          playerList={this.state.playerList}
          handlePlayersChange={this.handlePlayersChange}
        />}/>

        <Route path='/battle' render={()=><Battle 
          handlePlayersChoice={this.handlePlayersChoice}
          players={this.state.players}
          playerList={this.state.playerList}
        />}/>

        <Route path='/options' component={Options} />
      </div>
    )
  }
}

export default App;
