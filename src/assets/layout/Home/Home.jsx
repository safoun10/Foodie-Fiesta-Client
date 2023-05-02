import React from "react";
import { Outlet } from "react-router-dom";
import "./Home.css";
import Banner from "../../components/banner/Banner";
import TopNav from "../../components/topNav/TopNav";

const Home = () => {
	return (
		<div>
			<section className="bg-home">
				<TopNav></TopNav>
				<Banner></Banner>
			</section>
			<Outlet></Outlet>
		</div>
	);
};

export default Home;
