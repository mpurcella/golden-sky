import React from 'react';
import { Link as LinkRoute } from 'react-router-dom';
import { cardInfo } from './ProjectsCardInfo';
import './ProjectsCard.scss';

let ProjectsCard = () => {
	return (
		<div className='card-container'>
			{cardInfo.map((info) => {
				return (
					<LinkRoute className='card' key={info.key} to={`/projects/${info.linkTo}`}>
						<img src={info.img} alt='' className='card-img' />
						<div className='card-overlay'>
							<h3 className='card-text-name'>{info.name}</h3>
							<p className='card-text-location'>{info.location}</p>
						</div>
					</LinkRoute>
				);
			})}
		</div>
	);
};

export default ProjectsCard;
