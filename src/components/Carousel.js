import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/styles.js';
import Vars from '../helpers/Vars';

/****
 * Slider needs to be activated in Vars.js, so an Api-call will be fetched.
 */

export default class Carousel extends React.Component {

	render() {
		let slides = this.props.slides;
		console.log(slides);
		return (
			<div className="flexslider">
				<AwesomeSlider>
					{
						slides.map((slide, index) => {
							console.log(slide);
							return (
								<div key={`slide-${index}`}>
									<h1>Daniel Wahl</h1>
									<img src={Vars.domain + slide.image.path} />
								</div>
							)
						})
					}

				</AwesomeSlider>
			</div>
		);
	}

}