import React from 'react';

const rpsArr = ['Rock', 'Paper', 'Scissors'];
const rpsObj = {
	Rock: 'Scissors',
	Paper: 'Rock',
	Scissors: 'Paper'
}

const Battle = (props) => {

	let playersChoice = {};

	const runBattle = (playerChoice) => {
		const playersCopy = {...props.players};
		playersCopy['player'].lastChoice = playerChoice;
		opponentChoice(playersCopy, props.playerList);
		determineWinners(playersCopy);
		removeDefeatedPlayers(playersCopy);
		// if(props.playerList.length === 1) {
		// 	console.log('you win!')
		// } else {
		// 	let newPlayerPairs = props.pairPlayers(newInfoObj.playersList, newInfoObj.players);
		// 	props.handlePlayersChange(newPlayerPairs, newInfoObj.playerList);
		// 	console.log('make new choice!');
		// }
	}

	const opponentChoice = (playersObj, playerList) => {
		for (let i = 0; i < playerList.length; i++) {
			let playerName = playerList[i]
			if (playerName !== 'player') {
				const playerChoice = rpsArr[Math.floor(Math.random() * rpsArr.length)];
				playersObj[playerName].lastChoice = playerChoice; 
			}
		}
		return playersObj;
	}


	const handlePlayerChoice = (e) => {
			//e.target.value is the players choice
			runBattle(e.target.value);
	}

	const determineWinners = (playersObj) => {
		for (let player in playersObj) {
			let playerObj = playersObj[player];
			let opponentObj = playersObj[playerObj.currentOpponent]
			if (playerObj.isAlive && opponentObj.isAlive) {
				let playerChoice = playerObj.lastChoice;
				let opponentChoice = opponentObj.lastChoice;
				if (rpsObj[playerChoice] === opponentChoice) {
					opponentObj.isAlive = false;
				} else if (rpsObj[opponentChoice] === playerChoice) {
					playerObj.isAlive = false;
				}
			}
		}
		return playersObj;
	}

	const removeDefeatedPlayers = (playersObj) => {
		console.log({...playersObj});
		const newAlivePlayers = [];
		for (let player in playersObj) {
			if (!playersObj[player].isAlive) {
				if (player === 'player') {
					console.log('you lost');
					return props.handleRedirect('redirectToEndgame', true);
				}
				delete playersObj[player];
			} else {
				newAlivePlayers.push(player);
			}
		}
		console.log(playersObj);
		return newAlivePlayers;
	}

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