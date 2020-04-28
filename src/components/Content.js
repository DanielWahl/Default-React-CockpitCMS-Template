import React from "react";


import ContentColumn from "./ContentColumn";

const grid = {
	0: '',
	1: '',
	2: 'half-half',
	3: 'three-thirds',
	4: 'four-fourths',
};

export default class Footer extends React.Component {

	_renderContent() {
		let {data} = this.props;

		let content = data.content;
		let gridColumns = grid[content.length];

		return (
			<div className={`page-components grid ${gridColumns}`}>
				{content && content.map((column, i) => {
						const col_settings = column.settings;
						const col_children = column.children || [];
						//console.log(column);

						return (
							<ContentColumn settings={col_settings} children={col_children} key={`contentcolumn-${i}`}/>
						);

					})
				}
			</div>
		);
	}

	render() {

		return (
			<main>
				{this._renderContent()}
			</main>
		);
	}

}