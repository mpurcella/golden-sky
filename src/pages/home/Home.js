import React from 'react';
import Banner from '../../components/Banner';
import Hero from '../../components/Hero';
import About from '../about/About';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';
import { contactBanner, projectBanner } from '../../components/BannerInfo';

let Home = () => {
	return (
		<>
			<Hero />
			<About />
			<Banner bannerImgClass='featured-projects-banner' {...projectBanner} />
			<Projects />
			<Banner bannerImgClass='contact-banner' {...contactBanner} />
			<Contact />
		</>
	);
};

export default Home;
