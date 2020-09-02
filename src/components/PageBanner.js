import React from 'react';

const PageBanner = ({data}) => {

	return (
		<div className="component-text">
			<div dangerouslySetInnerHTML={{__html: data.text}}/>
		</div>
	);
}
export default PageBanner;