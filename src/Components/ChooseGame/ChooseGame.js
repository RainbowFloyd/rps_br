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

	const pairNewOpponents = (playerList) => {
		const playerPairs = [];
		const shuffledPlayerList = shuffleArray(playerList);
		for (let i = 0; i < shuffledPlayerList.length; i += 2) {
			playerPairs.push([shuffledPlayerList[i], shuffledPlayerList[i + 1]]);
		}
		console.log(playerPairs);
		return playerPairs;
	}

	const createOpponents = (numOfOpponents) => {
		let newOpponents = {};
		let newOpponentsArr = ['player'];
		for (let i = 0; i < numOfOpponents; i++) {
			let opponentName = `oppenent${i}`
			newOpponentsArr.push(opponentName);
			newOpponents[opponentName] = {
				alive: true,
				lastChoice: '',
				currentOpponents: {}
			}
		}
		let playerPairs = pairNewOpponents(newOpponentsArr);
		props.handleOpponentChange(newOpponents, newOpponentsArr, playerPairs);
	}

	return(
		<div>
			<h1>Choose Game Mode</h1>
			<button onClick={() => createOpponents(1)}><Link to='/battle'>1v1</Link></button>
			<button onClick={() => createOpponents(5)}><Link to='/battle'>1v5</Link></button>
		</div>
	) 

}

export default ChooseGame;