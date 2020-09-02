import React from 'react';

const Heading = ({settings}) => {
	return (
		<div className="component-text">
			<h2 dangerouslySetInnerHTML={{__html: settings.text}}/>
		</div>
	);
}
export default Heading;