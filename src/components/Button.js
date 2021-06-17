import React from 'react';
import './Button.scss';

let Button = ({ value, btnClassName, onClick }) => {
	return (
		<button className={`${btnClassName}`} onClick={onClick}>
			{value}
		</button>
	);
};

export default Button;
