import React from 'react';
import Navbar from './components/Navbar';
import ThemeContextProvider from './contexts/ThemeContextProvider';
import Footer from './components/Footer';
import Home from './pages/home/Home';
import './reset.scss';

let App = () => {
	return (
		<>
			<ThemeContextProvider>
				<Navbar />
				<Home />
				<Footer />
			</ThemeContextProvider>
		</>
	);
};

export default App;
