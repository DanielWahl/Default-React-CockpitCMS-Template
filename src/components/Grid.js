import React from 'react';
import ContentColumn from './ContentColumn';

const grid = {
	0: '',
	1: '',
	2: 'half-half',
	3: 'three-thirds',
	4: 'four-fourths',
};

const Grid = ({columns}) => {

	let content = columns;
	let gridColumns = grid[content.length];

	return (
		<div className={`page-components grid ${gridColumns}`}>
			{content && content.map((column, i) => {
				const col_settings = column.settings;
				const col_children = column.children || [];

				return (
					<ContentColumn settings={col_settings} children={col_children} key={`contentcolumn-${i}`}/>
				);

			})
			}
		</div>
	);
}
export default Grid;