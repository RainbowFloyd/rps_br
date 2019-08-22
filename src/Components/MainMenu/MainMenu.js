import React from 'react';
import { Link, Route } from 'react-router-dom';

import ChooseGame from '../ChooseGame/ChooseGame';
import Options from '../Options/Options';

const MainMenu = () => {
	return (
		<div>
			<button><Link to='/gamemode'>Choose Gamemode</Link></button>
			<button><Link to='/options'>Options</Link></button>
			<Route path='/gamemode' component={ChooseGame} />
			<Route path='/options' component={Options} />
		</div>
	)
}

export default MainMenu;