import React from 'react';

const rpsArr = ['Rock', 'Paper', 'Scissors'];
const rpsObj = {
	Rock: 'Scissors',
	Paper: 'Rock',
	Scissors: 'Paper'
}

const Battle = (props) => {

	const handlePlayerChoice = (e) => {
		const playerChoice = e.target.value;
		runBattle(playerChoice);
	}

	const opponentChoice = (opponentsObj) => {
		for (let opponent in opponentsObj) {
			let opponentChoice = rpsArr[Math.floor(Math.random() * rpsArr.length)];
			opponentsObj[opponent].lastChoice = opponentChoice
		}
	}

	const determineWinner = (playerObj, opponentObj) => {
		const playerChoice = playerObj.lastChoice;
		const opponentChoice = opponentObj.lastChoice;
		if (playerChoice === opponentChoice) {
			console.log('Tie');
			return 'tie';
		} else if (rpsObj[playerChoice] === opponentChoice) {
			console.log('You win!');
			return 'win';
		}
		return 'lose';
	}

	const runBattle = (playerChoice) => {
		props.player.lastChoice = playerChoice;
		opponentChoice(props.currentOpponents);
		for (let opponent in props.currentOpponents) {
			console.log(`${opponent} choose ${props.currentOpponents[opponent].lastChoice}`);
			console.log(`You choose ${props.player.lastChoice}`);
			determineWinner(props.player, props.currentOpponents[opponent]);
		}
	}

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