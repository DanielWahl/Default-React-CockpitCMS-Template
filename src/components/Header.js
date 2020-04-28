import React, {Component} from "react";
import Navigation from "./Navigation.js";

export default class Header extends Component {

	render() {

		return (
			<header id="mainHeader">
				<Navigation {...this.props} />
			</header>
		);
	}

}