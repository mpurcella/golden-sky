import React from 'react';
import './Banner.scss';

let Banner = ({ bannerImgClass, text, id }) => {
	return (
		<div className={`banner-img ${bannerImgClass}`} id={id}>
			<div className='banner-text-container'>
				<h2 className='banner-text'>{text}</h2>
			</div>
		</div>
	);
};

export default Banner;
