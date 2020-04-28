import React, {Component} from 'react';
import Page from './routes/Page';
import "./style/style.css";
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Fetch from './helpers/Fetch';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

export default class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isLoading: 		true,
			sitesettings: 	null,
			pages: 			null,
			subpages: 		null,
		}
	}

	async componentDidMount() {
		let sitesettings = await Fetch.fetchSiteSettings();
		let pages 		 = await Fetch.fetchPages();
		let subpages 	 = await Fetch.fetchSubPages();

		this.setState({
			isLoading: false,
			sitesettings: sitesettings,
			pages: pages,
			subpages: subpages,
		});
	}

	_renderPages() {
		let allPages = this.state.pages;
		let siteSettings = this.state.sitesettings;
		return this.state.pages.map((page, i) => {
			return (
				<Route exact path={"/" + page.alias} key={"route-"+i}>
					<Page {...this.props} data={page} allPages={allPages} siteSettings={siteSettings}/>
				</Route>
			);
		});
	}

    render() {
		let {isLoading, sitesettings, pages, subpages} = this.state;

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
				</Switch>
            </Router>
    	);
    }
}