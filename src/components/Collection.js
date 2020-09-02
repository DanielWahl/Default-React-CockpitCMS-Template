import React from 'react';
import Product from './Product';

const Collection = (props) => {
	let {settings} = props;
	let collections = settings.collection;

	return (
		<div className="component-addcollection">
			{collections &&
			collections.map((entry, i) => {
				if (entry.link === 'products') {
					return <Product data={entry} key={`product-${i}`}/>;
				} else {
					return null;
				}
			})
			}
		</div>
	);
}

export default Collection;