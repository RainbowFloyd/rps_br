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

	const pairNewPlayers = (playerList) => {
		const playerPairs = [];
		const shuffledPlayerList = shuffleArray(playerList);
		for (let i = 0; i < shuffledPlayerList.length; i += 2) {
			playerPairs.push([shuffledPlayerList[i], shuffledPlayerList[i + 1]]);
		}
		return playerPairs;
	}

	const createPlayers = (numOfPlayers) => {
		let newPlayers = {};
		let newPlayersArr = ['player'];
		for (let i = 0; i < numOfPlayers; i++) {
			newPlayersArr.push(`opponent${i}`);
		}
		newPlayersArr.forEach((playerName) => {
			newPlayers[playerName] = {
				alive: true,
				lastChoice: ''
			}
		});
		let playerPairs = pairNewPlayers(newPlayersArr);
		props.handlePlayersChange(newPlayers, newPlayersArr, playerPairs);
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