import React, {Component} from "react";
import Navigation from "./Navigation";
import Carousel from "./Carousel";
import Vars from "../helpers/Vars";

export default class Header extends Component {

	render() {
		let {slider} = this.props.data;
		return (
			<header id="mainHeader">
				<Navigation {...this.props} />
				{(slider || slider === 'true') && Vars.hasSlider &&
					<Carousel {...this.props}/>
				}
			</header>
		);
	}

}