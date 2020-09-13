import React, { useState, useCallback } from "react";

import {Link} from "react-router-dom";
import Scrollchor from 'react-scrollchor';

const Navigation = (props) => {

	const [lastScrollTop, setLastScrollTop] = useState(0);

	useCallback(() => {
		const handleScroll = () => {

			let nav = document.getElementById("mainNav"); //.classList.add("background");
			let headerHeight = document.getElementById("mainHeader").offsetHeight - 100;
			let windowWidth = window.innerWidth;
			let st = window.pageYOffset;
			let isScrollUp = st < lastScrollTop;
			setLastScrollTop(st);

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
		window.addEventListener('scroll', handleScroll());
		return () => {
			window.removeEventListener('scroll', handleScroll());
		};
	}, [lastScrollTop]);

	const renderLogo = () => {
		if(props.isHome) {
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

	const renderNavigation = () => {
		return props.allPages?.map((page, i) => {
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


	return (
		<nav className="" id="mainNav">
			<div className="content grid fraction-auto">
				<aside className="logoContainer">
					{renderLogo()}
				</aside>

				<aside className="navContainer">
					<input type="checkbox" className="mobileCheckbox"/>
					<span className="mobileToggle"> </span>
					<span className="mobileToggle"> </span>
					<span className="mobileToggle"> </span>
					<ul>
						{renderNavigation()}
					</ul>
				</aside>
			</div>
		</nav>
	);


}
export default Navigation;