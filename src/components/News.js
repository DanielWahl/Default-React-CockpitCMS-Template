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

	_renderAll() {
		return this.props.news.map((article, index) => {
			let description;
			if (article.description.length > 500) {
				description = article.description.substring(0, 500);
				description += "...";
			} else {
				description = article.description;
			}

			let date = new Date(article._modified * 1000)
			let dateString = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();

			return (
				<div className="news" key={`news-${index}`}>
					<Link to={article.slug}>
						<div className="news_container">
							<img src={Vars.domain + article.headerimage.path} alt={article.title}/>
							<div className="news_details">
								<span className="date">{dateString}</span>
								<h3>{article.title}</h3>
								<p className="black" dangerouslySetInnerHTML={{__html: description}}/>
								<button className="full round primary">Read more</button>
							</div>
						</div>
					</Link>
				</div>
			)
		})
	}

	_renderThree() {



		return (
			<div className="grid half-half">
				{ this.props.news.map((article, index) => {
					if (index < 2) {
						let description;
						if(article.description.length > 200) {
							description = article.description.substring(0, 200);
							description += "...";
						} else {
							description = article.description;
						}

						let date =  new Date(article._modified * 1000)
						let dateString = date.getDate() + "." + (date.getMonth()+1) + "." +date.getFullYear();

						return (
							<div className="news" key={`news-${index}`}>
								<Link to={article.slug}>
									<div className="news_container_three">
										<img src={Vars.domain + article.headerimage.path} alt={article.title} />
										<div className="news_details">
											<span className="date">{dateString}</span>
											<h3>{article.title}</h3>
											<p className="black" dangerouslySetInnerHTML={{__html: description}} />
											<button className="full round primary">Read more</button>
										</div>
									</div>
								</Link>
							</div>
						)
					}
				})
				}
			</div>
		)
	}

	render() {
		let {settings} = this.props;
		//console.log(settings);

		//console.log(this.props.news);

		if(this.state.isLoading) {
			return (
				<main>
					<div className="content">
						Is Loading...
					</div>
				</main>
			);
		}

		switch (settings.select) {
			case "showAll":
				return this._renderAll();
			case "showThree":
				return this._renderThree();
			default:
				return this._renderAll();
			//case "select":
			//	return this._renderById();
		}



	}

}