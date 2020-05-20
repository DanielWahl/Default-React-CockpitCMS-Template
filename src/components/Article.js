import React, {Component} from "react";
import Vars from '../helpers/Vars';
import {Link} from 'react-router-dom'

export default class News extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			fetchedData: null,
		}
	}

	async componentDidMount() {
		//let fetchedData = await Fetch.getProductCategory(this.props.data.display);
		this.setState({isLoading: false}); //, fetchedData: fetchedData});
	}


	render() {

		if(this.state.isLoading) {
			return (
				<main>
					<div className="content">
						Is Loading...
					</div>
				</main>
			);
		}

		let article = this.props.data; //news.filter(news => news.slug === this.props.slug)[0];

		let date = new Date(article._modified * 1000)
		let dateString = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();

		return (
			<main>
				<div className="content">
					<div className="article">
						<Link to="/news"><button className="full round primary">&lt; Back</button></Link>

						<div className="article_container">
							<img src={Vars.domain + article.headerimage.path} alt={article.title} />
							<div className="article_details">
								<span className="date">{dateString}</span>
								<h3>{article.title}</h3>
								<p className="description" dangerouslySetInnerHTML={{__html: article.description}} />
								<p dangerouslySetInnerHTML={{__html: article.text}} />
							</div>


						</div>
					</div>
				</div>
			</main>
		);



	}

}