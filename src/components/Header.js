import React from 'react';
import Navigation from './Navigation';
import Carousel from './Carousel';
import Vars from '../helpers/Vars';

const Header = (props) => {
	let {slider} = props.data;
	return (
		<header id="mainHeader">
			<Navigation {...props} />
			{(slider || slider === 'true') && Vars.hasSlider &&
			<Carousel {...props}/>
			}
		</header>
	);
}
export default Header;