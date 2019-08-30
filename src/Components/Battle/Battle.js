import React from 'react';

const rpsArr = ['Rock', 'Paper', 'Scissors'];
const rpsObj = {
	Rock: 'Scissors',
	Paper: 'Rock',
	Scissors: 'Paper'
}

const Battle = (props) => {

	//Make function that will set a Timer for all players to make a choice
	//If no choice is made, make a random choice for them
	//AI opponents will choose between 2-5 seconds
	//when each choice is made, add playerName and choice to an object and wait for other inputs
	//use async & await with promises

	//use props to access needed inputs
	const runBattle = () => {
		//wait for state to update, then run this function
	}

	const handlePlayerChoice = (e) => {
		const playerChoice = e.target.value;
		runBattle(playerChoice);
	}

	const opponentChoice = (opponentsObj) => {
		let updatedChoices = {}
		for (let opponent in opponentsObj) {
			let opponentChoice = rpsArr[Math.floor(Math.random() * rpsArr.length)];
			opponentsObj[opponent].lastChoice = opponentChoice
			updatedChoices[opponent] = opponentsObj[opponent]
		}
		props.handleCurrentOpponentChange(updatedChoices);
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
		} else {
			console.log(`You lose!`);
			return 'lose';
		}
		return Error;
	}

	// const runBattle = (playerChoice) => {
	// 	props.player.lastChoice = playerChoice;
	// 	opponentChoice(props.currentOpponents);
	// 	for (let opponent in props.currentOpponents) {
	// 		console.log(`${opponent} choose ${props.currentOpponents[opponent].lastChoice}`);
	// 		console.log(`You choose ${props.player.lastChoice}`);
	// 		determineWinner(props.player, props.currentOpponents[opponent]);
	// 	}
	// }

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