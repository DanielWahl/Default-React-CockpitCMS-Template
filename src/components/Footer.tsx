import React from 'react';
// @ts-ignore
import Scrollchor from 'react-scrollchor';

interface Props {
	data?: any;
	allPages?: any;
	siteSettings?: any;
	slides?: any;
}

const Footer = ({siteSettings}:Props) => {

	return (
		<footer>
			<div className="content">

				<Scrollchor to="#mainHeader" className="navLink">
					<div className="goToTopButton">
						<span>&#10094;</span>
					</div>
				</Scrollchor>

				<div dangerouslySetInnerHTML={{__html: siteSettings.copyright}}/>
			</div>
		</footer>
	);
}
export default Footer;