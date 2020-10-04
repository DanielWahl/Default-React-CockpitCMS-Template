import React from 'react';
import Navigation from './Navigation';
import Carousel from './Carousel';
import Vars from '../helpers/Vars';

interface Props {
	data?: any;
	allPages?: any;
	siteSettings?: any;
	slides?: any;
}

const Header = (props: Props) => {
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