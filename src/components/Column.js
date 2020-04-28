import React, {Component} from "react";
import Navigation from "./Navigation.js";

export default class Column extends Component {

	render() {

		return (
			<div className="component-text">
				<div dangerouslySetInnerHTML={{__html: this.props.data.text}} />
			</div>
		);
	}

}