import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from '../../components/topNav/TopNav';
import Footer from '../../components/footer/Footer';
import "./Auth.css";

const Auth = () => {
    return (
		<div>
			<TopNav></TopNav>
			<Outlet></Outlet>
			<section className="bg-footer">
				<Footer></Footer>
			</section>
		</div>
	);
};

export default Auth;