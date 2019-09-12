import React from 'react'
import { Link } from 'react-router-dom'


const ChooseGame = (props) => {

	const shuffleArray = (arr) => {
		let cloneArr = arr;
		for (let i = 0; i < arr.length; i++) {
			let j = Math.floor(Math.random() * (arr.length - 1));
			let temp = cloneArr[i];
			cloneArr[i] = cloneArr[j];
			cloneArr[j] = temp;
		}
		return cloneArr;
	}

	const pairNewPlayers = (playerList, playersObj) => {
		const playerPairs = [];
		const copy = playersObj
		const shuffledPlayerList = shuffleArray(playerList);
		for (let i = 0; i < shuffledPlayerList.length; i += 2) {
			let player1 = shuffledPlayerList[i];
			let player2 = shuffledPlayerList[i + 1];
			copy[player1].currentOpponent = player2;
			copy[player2].currentOpponent = player1
			//playerPairs.push([player1, player2]);
		}
		return copy;
	}

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
		newPlayers = pairNewPlayers(newPlayersArr, newPlayers);
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