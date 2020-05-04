import React, {Component} from "react";
import Vars from '../helpers/Vars';

export default class Image extends Component {

	render() {
		let {settings} = this.props;
		let imageUrl = Vars.domain + settings.image.path;

		return (
			<div className="component-image">
				<img src={imageUrl} alt={settings.image.path}/>
			</div>
		);
	}

}