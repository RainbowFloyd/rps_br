import React from 'react';

const rpsArr = ['Rock', 'Paper', 'Scissors'];

const handleChoice = (e) => {
	console.log(e.target.value)
	console.log(`opponentChoice ${opponentChoice()}`);
}

const choicesList = rpsArr.map((choice, index) => {
	return <button onClick={handleChoice} value={choice}>{choice}</button>
});

const opponentChoice = () => {
	return rpsArr[Math.floor(Math.random() * rpsArr.length)];
}

const Battle = () => {
	return (
		<div>
			<h1>Battle Screen</h1>
			{choicesList}
		</div>
	)
}

export default Battle;