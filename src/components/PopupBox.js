import React from "react";
import ContentColumn from "./ContentColumn";



export default class PopupBox extends React.Component {

	render() {
		let {children, settings} = this.props;
		//console.log(this.props.settings)

		return (
			<article className={`page-components popupBox`}>
				{(settings.open || settings.open==='true') ? (
					<details open>
						<summary>{settings.title}</summary>
						<ContentColumn {...this.props} settings={settings} children={children} />
					</details>
				) : (
					<details>
						<summary>{settings.title}</summary>
						<ContentColumn {...this.props} settings={settings} children={children} />
					</details>
				)}
			</article>
		);
	}

}