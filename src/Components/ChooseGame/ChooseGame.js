import React from 'react'
import { Link } from 'react-router-dom'

const ChooseGame = () => {
	return(
		<fragment>
			<h1>Choose Game Mode</h1>
			<button><Link to='/battle'>1v1</Link></button>
		</fragment>
	) 

}

export default ChooseGame;