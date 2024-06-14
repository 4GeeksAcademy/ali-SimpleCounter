import React from "react";
import ReactDOM from 'react-dom';
import SimpleCounter from "./SimpleCounter";




//create your first component
const Home = () => {
	return (
		<div className="text-center m-5">
			<SimpleCounter />
		</div>
	);
};


let counter = 0;
setInterval(function () {
	const six = Math.floor(counter / 100000) % 10;
	const five = Math.floor(counter / 10000) % 10;
	const four = Math.floor(counter / 1000) % 10;
	const three = Math.floor(counter / 100) % 10;
	const two = Math.floor(counter / 10) % 10;
	const one = Math.floor(counter / 1) % 10;



	counter++;
	ReactDOM.render(
		<SimpleCounter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
			digitFive={five}
			digitSix={six}
		/>,
		document.querySelector("#app")
	);
}, 1000);

export default Home;