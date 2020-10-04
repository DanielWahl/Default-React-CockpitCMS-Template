import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import Vars from '../helpers/Vars';

/****
 * Slider needs to be activated in Vars.js, so an Api-call will be fetched.
 */

const Carousel= (props:any) => {
	let slides = props.slides;

	return (
		<div className="flexslider">
			<AwesomeSlider>
				{
					slides.map((slide:any, index:number) => {
						console.log(slide);
						return (
							<div key={`slide-${index}`}>
								<h1>Daniel Wahl</h1>
								<img src={Vars.domain + slide.image.path} alt={slide.image.title}/>
							</div>
						);
					})
				}

			</AwesomeSlider>
		</div>
	);
}

export default Carousel;