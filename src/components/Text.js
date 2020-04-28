import React, {Component} from "react";

export default class Text extends Component {

	render() {

		return (
			<div className="component-text">
				<p dangerouslySetInnerHTML={{__html: this.props.settings.text}} />
			</div>
		);
	}

}