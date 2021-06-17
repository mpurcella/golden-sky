import React, { useContext } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { ThemeContext } from '../contexts/ThemeContextProvider';
import './HamburgerIcon.scss';

const HamburgerIcon = ({ click, handleClick }) => {
	let { isDarkTheme, darkTheme, lightTheme } = useContext(ThemeContext);
	let theme = isDarkTheme ? darkTheme : lightTheme;

	return (
		<div className='hamburger-icon' onClick={handleClick} style={{ color: theme.textColor }}>
			{click ? <FaTimes /> : <FaBars />}
		</div>
	);
};

export default HamburgerIcon;
