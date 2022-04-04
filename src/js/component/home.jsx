import React from "react";
import Cards from "./cards.jsx";
import Footer from "./footer.jsx";

const Home = () => {
	return (
		<div>
			<Cards />
			<Footer />

			{/* 			
			<Footer /> */}
		</div>
	);
};

export default Home;

// here we tell React to put our main app component <Home /> inside the DOM element with id #myApp
