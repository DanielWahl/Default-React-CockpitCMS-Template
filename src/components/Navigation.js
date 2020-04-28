import React, {Component} from "react";

import {Link} from "react-router-dom";
//import {NavLink as Link} from "react-router-dom";
import Scrollchor from 'react-scrollchor';

export default class Navigation extends Component {

	renderLogo() {
		if(this.props.isHome) {
			return (
				<Scrollchor to="#mainHeader" className="navLink">
					<div className="logo"> </div>
				</Scrollchor>
			)
		} else {
			return (
				<Link to="/">
					<div className="logo"> </div>
				</Link>
			)
		}
	}

	renderNavigation() {
		return this.props.allPages.map((page, i) => {
			if(page.alias !== '404') {
				return (
					<li key={"nav-li-" + i}>
						<Link to={"/" + page.alias} className="navLink">
							{page.name}
						</Link>
					</li>
				)
			}

		});
	}

	render() {
		let {data, allPages} = this.props;

		return (
			<nav className="" id="mainNav">
				<div className="content grid fraction-auto">
					<aside className="logoContainer">
						{this.renderLogo()}
					</aside>

					<aside className="navContainer">
						<input type="checkbox" className="mobileCheckbox"/>
						<span className="mobileToggle"> </span>
						<span className="mobileToggle"> </span>
						<span className="mobileToggle"> </span>
						<ul>
							{this.renderNavigation()}
						</ul>
					</aside>
				</div>
			</nav>
		);
	}

}