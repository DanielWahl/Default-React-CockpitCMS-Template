import React from 'react';


const Maps = ({settings}) => {

	return (
		<div className="maps" dangerouslySetInnerHTML={{__html: settings.link}}/>
	);
}
export default Maps;