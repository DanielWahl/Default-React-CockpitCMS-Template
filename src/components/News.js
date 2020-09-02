import React, { useState, useEffect} from "react";
import Vars from '../helpers/Vars';
import {Link} from 'react-router-dom'

const News = (props) => {


	const [isLoading, setIsLoading] = useState(true);


	useEffect(() => {
		setIsLoading(false); //, fetchedData: fetchedData});
	}, []);

	const renderAll = () => {
		return props.news.map((article, index) => {
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

	const renderThree = () => {

		return (
			<div className="grid half-half">
				{ props.news.map((article, index) => {
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
					return null;
				})
				}
			</div>
		)
	}


	let {settings} = props;


	if(isLoading) {
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
			return renderAll();
		case "showThree":
			return renderThree();
		default:
			return renderAll();
		//case "select":
		//	return renderById();
	}


}

export default News;