import React, { Component } from 'react';
import './App.css';
import { Route, Link, Redirect } from 'react-router-dom';

import MainMenu from './Components/MainMenu/MainMenu';
import ChooseGame from './Components/ChooseGame/ChooseGame';
import Options from './Components/Options/Options';
import Battle from './Components/Battle/Battle';
import Endgame from './Components/Endgame/Endgame';

class App extends Component {

  state = {
    username: 'player',
    players: {},
    playerList: [],
    redirectToEndgame: false
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

  handleRedirect = (target, boolean) => {
    this.setState({
      [target]: boolean
    })
  }

  shuffleArray = (arr) => {
    let cloneArr = arr;
    for (let i = 0; i < arr.length; i++) {
      let j = Math.floor(Math.random() * (arr.length - 1));
      let temp = cloneArr[i];
      cloneArr[i] = cloneArr[j];
      cloneArr[j] = temp;
    }
    return cloneArr;
  }

  pairPlayers = (playerList, playersObj) => {
    const copy = {...playersObj};
    const shuffledPlayerList = this.shuffleArray(playerList);
    for (let i = 0; i < shuffledPlayerList.length; i += 2) {
      let player1 = shuffledPlayerList[i];
      let player2 = shuffledPlayerList[i + 1];
      if (player2 === undefined) {
        copy[player1].currentOpponent = 'noOpponent'
      } else {
        copy[player1].currentOpponent = player2;
        copy[player2].currentOpponent = player1;
      }
    }
    return copy;
  }


  render() {

    if (this.state.redirectToEndgame) {
      return (
        <div>
          <Route path='/endgame' component={Endgame} />
          <Redirect to='/endgame' />
        </div>
      )
    }

    return (
      <div>
        <p>Welcome to Rock, Paper, Scissors Battle Royal!</p>
        <button><Link to='/'>Main Menu</Link></button>
        <Route exact path='/' component={MainMenu} />

        <Route path='/gamemode' render={()=><ChooseGame 
          players={this.state.players}
          playerList={this.state.playerList}
          handlePlayersChange={this.handlePlayersChange}
          shuffleArray={this.shuffleArray}
          pairPlayers={this.pairPlayers}
        />}/>

        <Route path='/battle' render={()=><Battle 
          handlePlayersChoice={this.handlePlayersChoice}
          handlePlayersChange={this.handlePlayersChange}
          pairPlayers={this.pairPlayers}
          shuffleArray={this.shuffleArray}
          players={this.state.players}
          playerList={this.state.playerList}
          handleRedirect={this.handleRedirect}
        />}/>

        <Route path='/options' component={Options} />
      </div>
    )
  }
}

export default App;
