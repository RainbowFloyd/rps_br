import React from 'react'
import { Link } from 'react-router-dom'


const ChooseGame = (props) => {

	const createPlayers = (numOfPlayers) => {
		let newPlayers = {};
		let newPlayersArr = ['player'];
		for (let i = 0; i < numOfPlayers; i++) {
			newPlayersArr.push(`opponent${i}`);
		}
		newPlayersArr.forEach((playerName) => {
			newPlayers[playerName] = {
				isAlive: true,
				lastChoice: '',
				currentOpponent: ''
			}
		});
		newPlayers = props.pairPlayers(newPlayersArr, newPlayers);
		props.handlePlayersChange(newPlayers, newPlayersArr);
	}

	return(
		<div>
			<h1>Choose Game Mode</h1>
			<button onClick={() => createPlayers(1)}><Link to='/battle'>1v1</Link></button>
			<button onClick={() => createPlayers(5)}><Link to='/battle'>1v5</Link></button>
		</div>
	) 

}

export default ChooseGame;