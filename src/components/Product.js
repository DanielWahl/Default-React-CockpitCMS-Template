import React from 'react';

const Product = ({data}) => {

	return (
		<div className="product">
			<p>{data.display}</p>
		</div>
	);
}
export default Product;