import React from 'react';
import './About.scss';

let About = () => {
	return (
		<div className='about-container' id='about'>
			<div className='about-container-wrapper'>
				<h2 className='about-header'>People First | Design Forward</h2>
				<p className='about-paragraph'>
					Golden Sky Estates was founded on the vision of creating elegant, comfortable,
					and timeless buildings that are rooted in the unique environments in which they
					exist, and shaped by the character of the people who will inhabit them.
				</p>
				<p className='about-paragraph'>
					We believe that we can elevate quality of life – at work, at home, and in our
					communities – through thoughtful planning and design. We’ve witnessed first-hand
					how our projects have affected lives and had an impact on individuals, families,
					communities, and the environment.
				</p>
			</div>
		</div>
	);
};

export default About;
