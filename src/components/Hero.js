import React from 'react';
import house1 from '../images/house19.jpeg';
import './Hero.scss';

let Hero = () => {
	return (
		<div className='hero-container' id='top'>
			<img src={house1} className='hero-img' alt='' />
		</div>
	);
};

export default Hero;
