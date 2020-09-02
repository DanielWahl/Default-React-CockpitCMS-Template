import React from 'react';
import Scrollchor from 'react-scrollchor';

const Footer = ({siteSettings}) => {

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