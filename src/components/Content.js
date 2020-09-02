import React from "react";


import ContentColumn from "./ContentColumn";

const grid = {
	0: '',
	1: '',
	2: 'half-half',
	3: 'three-thirds',
	4: 'four-fourths',
};

const Content = ({data}) => {

	let content = data.content;
	let gridColumns = grid[content.length];

	return (
		<main>
			<div className={`page-components content grid ${gridColumns}`}>
				{content && content.map((column, i) => {
						const col_settings = column.settings;
						const col_children = column.children || [];

						return (
							<ContentColumn settings={col_settings} children={col_children} key={`contentcolumn-${i}`}/>
						);

					})
				}
			</div>
		</main>
	);


}
export default Content;