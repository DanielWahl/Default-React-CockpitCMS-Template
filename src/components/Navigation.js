import React, {Component} from "react";

import {Link} from "react-router-dom";
//import {NavLink as Link} from "react-router-dom";
import Scrollchor from 'react-scrollchor';

export default class Navigation extends Component {

	constructor(props) {
		super(props);

		this.lastScrollTop = 0;
		this.n = 0;
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll() {

		let nav = document.getElementById("mainNav"); //.classList.add("background");
		let headerHeight = document.getElementById("mainHeader").offsetHeight - 100;
		let windowWidth = window.innerWidth;
		let st = window.pageYOffset;
		let isScrollUp = st < this.lastScrollTop;
		this.lastScrollTop = st;

		if(windowWidth > 780) {
			if (isScrollUp) {
				if (st < 70) {
					nav.classList.remove("background");
				}
			} else {
				if (st > headerHeight) {
					nav.classList.add("background");
				}
			}
		} else {
			if(isScrollUp) {
				if(st > 70) {
					nav.classList.add("background");
				} else {
					nav.classList.remove("background");
				}
			} else {
				nav.classList.remove("background");
			}
		}

	}

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
			} else {
				return null;
			}

		});
	}

	render() {
		//let {data, allPages} = this.props;

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