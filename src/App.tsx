import React, { useState, useEffect } from 'react';
import 'react-app-polyfill/ie11';
import Page from './routes/Page';
import "./style/style.css";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Fetch from './helpers/Fetch';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import Vars from './helpers/Vars';

interface Props {

}

const App = (props:Props) => {
	const [isLoading, setIsLoading] 		= useState(true);
	const [siteSettings, setSiteSettings] 	= useState([]);
	const [pages, setPages] 				= useState([]);
	const [errorPage, setErrorPage] 		= useState([]);
	const [slides, setSlides] 				= useState([]);
	//const [subPages, setSubPages] 		= useState([]);
	//const [products, setProducts] 		= useState([]);

	useEffect(() => {
		const fetch = async () => {
			let fetchedSiteSettings = await Fetch.fetchSiteSettings();
			let fetchedPages:any 	= await Fetch.fetchPages();
			let fetchedErrorPage 	= await Fetch.fetchErrorPage();
			//let fetchedSubPages 	= await Fetch.fetchSubPages();
			//let fetchedProducts 	= await Fetch.fetchProducts();

			let fetchedSlides 		= null;
			if (Vars.hasSlider) {
				fetchedSlides 		= await Fetch.fetchSlides();
			}

			setIsLoading(false);
			setSiteSettings(fetchedSiteSettings);
			setPages(fetchedPages);
			setErrorPage(fetchedErrorPage);
			setSlides(fetchedSlides);
			//setSubPages(fetchedSubPages);
			//setProducts(fetchedProducts);
		}
		fetch().catch((err) => console.log(err));
	}, []);

	const renderPages = () => {
		return pages?.map((page:any, i:number) => {

			if(page?.alias === '404') {
				return null;
			}

			return (
				<Route exact path={"/" + page?.alias} key={"route-" + i}>
					<Page {...props} data={page} allPages={pages} siteSettings={siteSettings} slides={slides} />
				</Route>
			);

		});

	}

	if(isLoading) {
		return (
			<div style={{width: '100vw', height: '100vh', margin: '45vh auto', textAlign: 'center'}}>
				<Loader
					type="BallTriangle"
					color="#00BFFF"
					height={100}
					width={100}
				/>
			</div>
		)
	}

	return (
		<Router>
			<Switch>
				{renderPages()}
				{errorPage !== null && (
					<Route>
						<Page {...props} data={errorPage} allPages={pages} siteSettings={siteSettings} />
					</Route>
				)}
			</Switch>
		</Router>
	);

}

export default App;