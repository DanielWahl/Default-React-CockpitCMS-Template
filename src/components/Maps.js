import React from "react";



export default class Maps extends React.Component {

	render() {
		let {settings} = this.props;
		//console.log(this.props.settings)
		console.log(this.props);

		return (
			<div className="maps" dangerouslySetInnerHTML={{__html: settings.link}} />
		);
	}

}