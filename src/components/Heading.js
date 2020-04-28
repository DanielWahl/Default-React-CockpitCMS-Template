import React, {Component} from "react";

export default class Heading extends Component {

	render() {
		console.log(this.props.settings);
		return (
			<div className="component-text">
				<h2 dangerouslySetInnerHTML={{__html: this.props.settings.text}} />
			</div>
		);
	}

}