import React from 'react';
import TopNav from '../../components/topNav/TopNav';
import Footer from '../../components/footer/Footer';
import "./Blog.css"

const Blog = () => {
    return (
		<div className="pb-1">
			<TopNav></TopNav>
			<section className='mx-auto' style={{maxWidth : "1200px"}}>
				<div></div>
			</section>
			<section className="bg-footer">
				<Footer></Footer>
			</section>
		</div>
	);
};

export default Blog;