import React from 'react';
import { Link } from 'react-router-dom';

const MainMenu = () => {
	return (
		<div>
			<button><Link to='/gamemode'>Choose Gamemode</Link></button>
			<button><Link to='/options'>Options</Link></button>
		</div>
	)
}

export default MainMenu;