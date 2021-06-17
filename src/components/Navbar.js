import React, { useState, useContext } from 'react';
import { navbar } from './NavbarInfo';
import { Link as LinkRoute } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { ThemeContext } from '../contexts/ThemeContextProvider';
import './Navbar.scss';
import HamburgerIcon from './HamburgerIcon';

let Navbar = () => {
	let [click, setClick] = useState(false);

	let handleClick = () => {
		setClick(!click);
	};

	let closeMenu = () => {
		setClick(false);
	};

	let { isDarkTheme, darkTheme, lightTheme } = useContext(ThemeContext);
	let theme = isDarkTheme ? darkTheme : lightTheme;

	return (
		<nav className='navbar-container'>
			<div className='navbar' style={{ backgroundColor: theme.backgroundColor }}>
				<div className='navbar-logo-container'>
					<LinkRoute
						to='/'
						className='navbar-logo'
						style={{ color: theme.textColor }}
						onClick={closeMenu}
					>
						GSE
					</LinkRoute>
				</div>
				<ul
					className={click ? 'navbar-list active' : 'navbar-list'}
					style={{ backgroundColor: theme.backgroundColor, color: theme.textColor }}
				>
					{navbar.map((links) => {
						return (
							<li className='navbar-list-item' key={links.id}>
								<LinkScroll
									activeClass='active'
									to={links.to}
									spy={true}
									smooth={true}
									offset={-60}
									duration={500}
									className='navbar-list-item-link'
									style={{ color: theme.textColor }}
									onClick={closeMenu}
								>
									{links.linkName}
								</LinkScroll>
							</li>
						);
					})}
				</ul>
				<div className='navbar-name-container'>
					<LinkRoute
						to='/'
						className='navbar-name'
						style={{ color: theme.textColor }}
						onClick={closeMenu}
					>
						<span className='navbar-name-span'>Golden Sky Estates</span> LLP
					</LinkRoute>
				</div>
				<HamburgerIcon click={click} handleClick={handleClick} />
			</div>
		</nav>
	);
};

export default Navbar;
