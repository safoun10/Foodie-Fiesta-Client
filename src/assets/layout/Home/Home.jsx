import React from "react";
import "./Home.css";
import Banner from "../../components/banner/Banner";
import TopNav from "../../components/topNav/TopNav";
import MarqueeChef from "../../components/marqueeChef/MarqueeChef";
import ChefInfo from "../../components/chefInfo/ChefInfo";
import Footer from "../../components/footer/Footer";

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
			<section className="bg-footer">
				<Footer></Footer>
			</section>
		</div>
	);
};

export default Home;
