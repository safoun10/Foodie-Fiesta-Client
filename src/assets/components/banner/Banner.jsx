import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import "./Banner.css"

const Banner = () => {
    return (
		<div>
			<div
				className="mx-auto row justify-content-center align-items-center"
				style={{ maxWidth: "1200px" }}
			>
				<div className="col-11 col-md-8 d-flex justify-content-center align-items-center flex-column py-5">
					<div className="w-75 fw-bold mx-auto text-center display-3 pt-5 pb-4 title-text text-center text-dance">
						" Taste the Authentic Flavors of Japanese Food with Our
						Chef's Handcrafted Recipes"
					</div>
					<div>
						<button className="btn btn-blog d-flex-align-items-center mt-2">
							<span className="me-1">Our Chefs </span>
							<BsArrowRight></BsArrowRight>
						</button>
					</div>
				</div>
				<div className="col-11 col-md-4">
					<img className='img-fluid' src="https://media.istockphoto.com/id/1460293626/photo/sushi-set-of-different-philadelphia-rolls-with-salmon-tuna-eel-in-black-box-in-male-hands.jpg?s=612x612&w=0&k=20&c=-Xo-wujBXdE5VsaDIO4UpW60GgbIRK2BtckscCJc-qA=" />
				</div>
			</div>
		</div>
	);
};

export default Banner;