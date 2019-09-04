import React from 'react';

const rpsArr = ['Rock', 'Paper', 'Scissors'];
const rpsObj = {
	Rock: 'Scissors',
	Paper: 'Rock',
	Scissors: 'Paper'
}

const Battle = (props) => {

	let choiceOrder = [];
	let playersChoice = {};

	//Make function that will set a Timer for all players to make a choice
	//If no choice is made, make a random choice for them
	//AI opponents will choose between 2-5 seconds
	//when each choice is made, add playerName and choice to an object and wait for other inputs
	//use async & await with promises

	//use props to access needed inputs
	const runBattle = () => {
		//wait for state to update, then run this function
		let playerList = props.playerList;
		let minWait = 500;
		let maxWait = 2500;
		for (let i = 0; i < playerList.length; i++) {
			let randomTime = Math.floor(Math.random() * maxWait) + minWait
			if (playerList[i] !== 'player') {
				setTimeout(opponentChoice, randomTime, playerList[i]);
			}
		}
	}

	const handlePlayerChoice = (e) => {
		const playerChoice = e.target.value;
		choiceOrder.push('player');
		playersChoice['player'] = playerChoice;
		if (checkIfAllChoose()) {

		}
	}

	const opponentChoice = (opponentName) => {
		let opponentChoice = rpsArr[Math.floor(Math.random() * rpsArr.length)];
		choiceOrder.push(opponentName);
		playersChoice[opponentName] = opponentChoice;
		if (checkIfAllChoose()) {

		}
	}

	const checkIfAllChoose = () => {
		if (choiceOrder.length === props.playerList.length) {
			props.handleOpponentChoice(playersChoice);
		}
		return false;
	}

	const determineWinners = () => {
		//for each player choice
		//find oppenent and determine who wins
		//if player was an opponent, splice him out of the array
	}

	runBattle();

	const choicesList = rpsArr.map((choice, index) => {
		return <button onClick={handlePlayerChoice} value={choice}>{choice}</button>
	});

	return (
		<div>
			<h1>Battle Screen</h1>
			{choicesList}
		</div>
	)
}

export default Battle;