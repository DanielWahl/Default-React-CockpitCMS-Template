import React, {Component} from "react";

import {Link} from "react-router-dom";
import Scrollchor from 'react-scrollchor';

export default class Footer extends Component {

	render() {
		let {siteSettings} = this.props;
		return (
			<footer>

				<div className="content">

					<Scrollchor to="#mainHeader" className="navLink">
						<div className="goToTopButton">
							<span>&#10094;</span>
						</div>
					</Scrollchor>

					<div dangerouslySetInnerHTML={{__html: siteSettings.copyright}} />
				</div>
			</footer>
		);
	}

}