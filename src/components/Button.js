import React from 'react';

const Button = ({data}) => {

	return (
		<div className="component-text">
			<div dangerouslySetInnerHTML={{__html: data.text}}/>
		</div>
	);
}

export default  Button;