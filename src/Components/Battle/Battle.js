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
		//props.handlePlayerChoice(playerChoice);
		if (checkIfAllChoose()) {
			return determineWinners();
		}
	}

	const opponentChoice = (playerName) => {
		let opponentChoice = rpsArr[Math.floor(Math.random() * rpsArr.length)];
		choiceOrder.push(playerName);
		playersChoice[playerName] = opponentChoice;
		if (checkIfAllChoose()) {
			return determineWinners();
		}
	}

	const checkIfAllChoose = () => {
		if (choiceOrder.length === props.playerList.length) {
			props.handlePlayersChoice(playersChoice);
			return true;
		}
		return false;
	}

	const determineWinners = () => {
		const players = JSON.parse(JSON.stringify(props.players));
		for (let player in players) {
			let playerObj = players[player];
			let opponentObj = players[playerObj.currentOpponent]
			if (playerObj.isAlive && opponentObj.isAlive) {
				let playerChoice = playerObj.lastChoice;
				let opponentChoice = opponentObj.lastChoice;
				if (rpsObj[playerChoice] === opponentChoice) {
					opponentObj.isAlive = false;
				}
			}
		}
		return removeDefeatedPlayers(players);
	}

	const removeDefeatedPlayers = (players) => {
		const playersCopy = JSON.parse(JSON.stringify(players));
		for (let player in playersCopy) {
			if (!playersCopy[player].isAlive) {
				if (player === 'player') {
					console.log('you lost');
					return props.renderRedirect('/endgame');
				}
				delete playersCopy[player];
			}
		}
		console.log(playersCopy);
	}

	runBattle();

	const choicesList = rpsArr.map((choice, index) => {
		return <button key={index} onClick={handlePlayerChoice} value={choice}>{choice}</button>
	});

	return (
		<div>
			<h1>Battle Screen</h1>
			{choicesList}
		</div>
	)
}

export default Battle;