import React, {Component} from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Content from '../components/Content';

export default class Page extends Component {

	render() {
		let {data} = this.props;

		return (
			<div className="global">
				<Header {...this.props} />
				<Content {...this.props} />
				<Footer {...this.props} />
			</div>
		);
	}

}