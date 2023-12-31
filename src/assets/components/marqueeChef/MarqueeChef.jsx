import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import "./MarqueeChef.css";
import ChefSlide from "../chefSlide/ChefSlide";

const MarqueeChef = () => {
	const [chefs, setChefs] = useState([]);

	useEffect(() => {
		fetch("https://chef-recipe-hunter-server-safoun10.vercel.app/chefs")
			.then((res) => res.json())
			.then((data) => setChefs(data));
	}, []);

	return (
		<div className="marquee-body padding-lot px-sm-2">
			<div className="d-flex justify-content-between align-items-center">
				<div className="display-4 w-50 fw-bold title-box">
					Meet some of our <br />
					<span className="text-two fw-light">World Class</span>
					<br /> Chefs
				</div>
				<div className="text-dance display-1 text-center">
					Born To Cook
				</div>
			</div>
			<Marquee speed={80}>
				{chefs.map((chef) => (
					<ChefSlide chef={chef} key={chef.id}></ChefSlide>
				))}
			</Marquee>
		</div>
	);
};

export default MarqueeChef;
