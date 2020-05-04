import React, {Component} from "react";

export default class Product extends Component {

	render() {
		let {data} = this.props;

		return (
			<div className="product">
				<p>{data.display}</p>
			</div>
		);
	}

}