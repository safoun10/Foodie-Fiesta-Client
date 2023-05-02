import React from "react";
import "./Home.css";
import Banner from "../../components/banner/Banner";
import TopNav from "../../components/topNav/TopNav";
import MarqueeChef from "../../components/marqueeChef/MarqueeChef";
import ChefInfo from "../../components/chefInfo/ChefInfo";

const Home = () => {
	return (
		<div>
			<section className="bg-home">
				<TopNav></TopNav>
				<Banner></Banner>
			</section>
			<section className="chef-marquee">
				<MarqueeChef></MarqueeChef>
			</section>
			<section>
				<ChefInfo></ChefInfo>
			</section>
		</div>
	);
};

export default Home;
