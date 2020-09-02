import React from 'react';

const Divider = (props) => {

	return (
		<div className="component-text">
			<div dangerouslySetInnerHTML={{__html: props.data.text}}/>
		</div>
	);
}
export default Divider;
