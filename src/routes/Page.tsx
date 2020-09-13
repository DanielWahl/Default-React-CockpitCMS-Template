import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Content from '../components/Content';

interface Props {
	data?: any;
	allPages?: any;
	siteSettings?: any;
	slides?: any;
}

const Page = (props:Props) =>{
	//let {data} = this.props;
	return (
		<div className="global">
			<Header {...props} />
			<Content {...props} />
			<Footer {...props} />
		</div>
	);
}
export default Page;