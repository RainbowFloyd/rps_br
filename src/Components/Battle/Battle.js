import React from 'react';

const rpsArr = ['Rock', 'Paper', 'Scissors'];



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

	const determineWinner = (playerObj, opponentsObj) => {
		console.log(`inside determineWinner`)
		console.log(playerObj);
		console.log(opponentsObj);
	}

	const runBattle = (playerChoice) => {
		props.player.lastChoice = playerChoice;
		opponentChoice(props.currentOpponents);
		determineWinner(props.player, props.currentOpponents);
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