import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Content from '../components/Content';

const Page = (props) =>{
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