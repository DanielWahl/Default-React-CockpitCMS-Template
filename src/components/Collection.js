import React, {Component} from "react";
import Product from './Product';

export default class Collection extends Component {

	render() {
		let {settings} = this.props;
		let collections = settings.collection;

		return (
			<div className="component-addcollection">
				{collections &&
					collections.map((entry, i) => {
						if(entry.link === 'products') {
							return <Product data={entry} key={`product-${i}`} />
						}
					})
				}
			</div>
		);
	}

}