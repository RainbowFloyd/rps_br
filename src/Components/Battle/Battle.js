import React from 'react';

const rpsArr = ['Rock', 'Paper', 'Scissors'];
const rpsObj = {
	Rock: 'Scissors',
	Paper: 'Rock',
	Scissors: 'Paper'
}

const Battle = (props) => {

	let playersChoice = {};

	const runBattle = () => {
		let choices = opponentChoice(props.players, props.playerList);
		let updated = determineWinners(choices);
		let newInfoObj = removeDefeatedPlayers(updated);
		if(props.playerList.length === 1) {
			console.log('you win!')
		} else {
			let newPlayerPairs = props.pairPlayers(newInfoObj.playersList, newInfoObj.players);
			props.handlePlayersChange(newPlayerPairs, newInfoObj.playerList);
			console.log('make new choice!');
		}
	}

	const opponentChoice = (playersObj, playerList) => {
		const playersCopy = JSON.parse(JSON.stringify(playersObj));
		for (let i = 0; i < playerList.length; i++) {
			let playerName = playerList[i]
			if (playerName !== 'player') {
				const playerChoice = rpsArr[Math.floor(Math.random() * rpsArr.length)];
				playersCopy[playerName] = playerChoice;
			}
		}
		return playersCopy;
	}


	const handlePlayerChoice = (e) => {
			const playerChoice = e.target.value;
			playersChoice['player'] = playerChoice;
			runBattle();
	}

	const determineWinners = (playersObj) => {
		const players = JSON.parse(JSON.stringify(playersObj));
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
		return players;
	}

	const removeDefeatedPlayers = (players) => {
		const playersCopy = JSON.parse(JSON.stringify(players));
		const newAlivePlayers = [];
		console.log(playersCopy);
		for (let player in playersCopy) {
			if (!playersCopy[player].isAlive) {
				if (player === 'player') {
					console.log('you lost');
					return props.handleRedirect('redirectToEndgame', true);
				}
				delete playersCopy[player];
			} else {
				newAlivePlayers.push(player);
			}
		}
		return {
			players: playersCopy,
			playersList: newAlivePlayers
		}
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