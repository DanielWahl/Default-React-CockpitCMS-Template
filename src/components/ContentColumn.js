import React from "react";

import Text from "./Text";
import Image from "./Image";
import Grid from "./Grid";
import Divider from "./Divider";
import Heading from "./Heading";
import PageBanner from "./PageBanner";
import Button from "./Button";
import FlexBox from "./FlexBox";
import Collection from "./Collection";

const defaultComponents = {
	heading: Heading,
	text: Text,
	image: Image,
	divider: Divider,
	grid: Grid,
	pagebanner: PageBanner,
	button: Button,
	flexbox: FlexBox,
	addcollection: Collection,
}

export default class ContentColumn extends React.Component {

	render() {
		let {children} = this.props;

		//console.log(content);
		return (
			<div className="frame">
				{children
					&& children.map((component, j) => {
						const comp_name 	= component.component;
						const comp_settings = component.settings;
						const comp_children = component.children || [];
						const comp_columns 	= component.columns || [];

						console.log(component)

						if(defaultComponents[comp_name] === undefined) {
							return null;
						}

						const NewComponent = defaultComponents[comp_name];

						return (
							<NewComponent
								name={comp_name}
								settings={comp_settings}
								children={comp_children}
								columns={comp_columns}
								key={`component-${j}`}
							/>
						)
					})

				}
			</div>
		);
	}


}