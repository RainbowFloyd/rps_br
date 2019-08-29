import React from 'react'
import { Link } from 'react-router-dom'


const ChooseGame = (props) => {

	const createOpponents = (numOfOpponents) => {
		let newOpponents = {}
		for (let i = 0; i < numOfOpponents; i++) {
			let opponentName = `oppenent${i}`
			newOpponents[opponentName] = {
				alive: true,
				lastChoice: ''
			}
		}
		props.handleOpponentChange(newOpponents);
		props.handleCurrentOpponentChange(newOpponents);
	}

	return(
		<div>
			<h1>Choose Game Mode</h1>
			<button onClick={() => createOpponents(1)}><Link to='/battle'>1v1</Link></button>
		</div>
	) 

}

export default ChooseGame;