import React, {Component} from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class Page extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		let {data} = this.props;
		console.log(data);

		return (
			<div className="global">
				<Header {...this.props} />
				<main>

				</main>
				<Footer {...this.props} />
			</div>
		);
	}

}