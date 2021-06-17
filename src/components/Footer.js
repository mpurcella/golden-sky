import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContextProvider';
import { social } from './FooterInfo';
import './Footer.scss';

let Footer = () => {
	let { isDarkTheme, darkTheme, lightTheme, changeTheme } = useContext(ThemeContext);
	let theme = isDarkTheme ? darkTheme : lightTheme;

	return (
		<div className='footer-container' style={{ backgroundColor: theme.backgroundColor }}>
			<nav className='footer-nav'>
				<div className='footer-nav-logo-container'>
					<p className='footer-nav-copyright' style={{ color: theme.textColor }}>
						@ 2021
						<Link to='/' className='footer-nav-name' style={{ color: theme.textColor }}>
							Golden Sky Estates
						</Link>
					</p>
				</div>
				<div className='footer-social-list-container'>
					<ul className='footer-social-list'>
						{social.map((links) => {
							return (
								<li className='footer-social-list-item' key={links.id}>
									<a
										href={links.path}
										className='footer-social-list-item-link'
										style={{ color: theme.textColor }}
									>
										{links.icon}
									</a>
								</li>
							);
						})}
					</ul>
				</div>
				<div className='footer-nav-btn-container'>
					<button
						className='footer-nav-theme-btn'
						onClick={changeTheme}
						style={{
							backgroundColor: theme.backgroundColor,
							color: theme.textColor,
							borderColor: theme.borderColor
						}}
					>
						{isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
					</button>
				</div>
			</nav>
		</div>
	);
};

export default Footer;
