import React, {Component} from 'react';
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

export default class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isLoading: 		true,
			sitesettings: 	null,
			pages: 			null,
			subpages: 		null,
			errorpage:		null,
			products: 		null,
			slides:			null,
		}
	}

	async componentDidMount() {
		let sitesettings = await Fetch.fetchSiteSettings();
		let pages 		 = await Fetch.fetchPages();
		let subpages 	 = await Fetch.fetchSubPages();
		let errorpage 	 = await Fetch.fetchErrorPage();
		let products	 = await Fetch.fetchProducts();

		let slides 		 = null;
		if(Vars.hasSlider) {
			slides = await Fetch.fetchSlides();
		}

		this.setState({
			isLoading: false,
			sitesettings: sitesettings,
			pages: pages,
			subpages: subpages,
			errorpage: errorpage,
			products: products,
			slides: slides,
		});
	}

	_renderPages() {
		let allPages = this.state.pages;
		let siteSettings = this.state.sitesettings;
		let slides = this.state.slides;
		return this.state.pages.map((page, i) => {

			if(page.alias === '404') {
				return (null);
			}

			return (
				<Route exact path={"/" + page.alias} key={"route-" + i}>
					<Page {...this.props} data={page} allPages={allPages} siteSettings={siteSettings} slides={slides} />
				</Route>
			);

		});

	}

    render() {
		let {isLoading, errorpage, pages, sitesettings} = this.state;

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
					{this._renderPages()}
					{errorpage !== null && (
						<Route>
							<Page {...this.props} data={errorpage} allPages={pages} siteSettings={sitesettings} />
						</Route>
					)}
				</Switch>
            </Router>
    	);
    }
}