import React, {Component} from "react";

export default class PageBanner extends Component {

	render() {

		return (
			<div className="component-text">
				<div dangerouslySetInnerHTML={{__html: this.props.data.text}} />
			</div>
		);
	}

}