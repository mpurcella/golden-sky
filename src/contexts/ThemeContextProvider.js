import React, { Component, createContext } from 'react';

let ThemeContext = createContext();

class ThemeContextProvider extends Component {
	state = {
		isDarkTheme: true,

		lightTheme: {
			backgroundColor: '#fff',
			textColor: '#0a0a0a',
			borderColor: '#0a0a0a'
		},

		darkTheme: {
			backgroundColor: '#0a0a0a',
			textColor: '#fff',
			borderColor: '#fff'
		}
	};

	changeTheme = () => {
		this.setState({ isDarkTheme: !this.state.isDarkTheme });
	};

	render() {
		return (
			<ThemeContext.Provider value={{ ...this.state, changeTheme: this.changeTheme }}>
				{this.props.children}
			</ThemeContext.Provider>
		);
	}
}

export default ThemeContextProvider;
export { ThemeContext };
