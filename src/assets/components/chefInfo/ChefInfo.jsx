import React, { useEffect, useState } from "react";
import "./ChefInfo.css";
import Chef from "../chef/Chef";

const ChefInfo = () => {
	const [info, setInfo] = useState([]);

	useEffect(() => {
		fetch("https://chef-recipe-hunter-server-safoun10.vercel.app/info")
			.then((res) => res.json())
			.then((data) => setInfo(data));
	}, []);

	return (
		<div className="chef-info title-text">
			<div className="text-dance display-1 text-center">
				Our Head Chefs are Ready to Serve you
			</div>
			<hr />
			<div className="text-two fs-4 fw-light text-center mx-1">
				Indulge in the exquisite creations of our esteemed chefs,
				who possess a wealth of culinary expertise and are poised to
				satiate your discerning palate. Their masterful techniques and
				use of premium ingredients will undoubtedly transport your taste
				buds on a delectable gastronomic journey.
			</div>
			<div className="row my-5 gap-2 mx-auto">
				{info.map((chef) => (
					<Chef key={chef.id} chef={chef}></Chef>
				))}
			</div>
		</div>
	);
};

export default ChefInfo;
