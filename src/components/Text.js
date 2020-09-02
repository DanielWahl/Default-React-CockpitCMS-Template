import React from 'react';

const Text = (props) => {

	return (
		<div className="component-text">
			<p dangerouslySetInnerHTML={{__html: props.settings.text}}/>
		</div>
	);
}

export default Text;