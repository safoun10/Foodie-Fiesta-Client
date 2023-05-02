import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import "./Banner.css"

const Banner = () => {
    return (
		<div>
			<div className="mx-auto" style={{ maxWidth: "1200px" }}>
				<div className="d-flex justify-content-center align-items-center flex-column py-5">
					<div className="w-75 fw-bold mx-auto text-center display-2 pt-5 pb-4 title-text text-dance">
						" Taste the Authentic Flavors of India with Our Chef's
						Handcrafted Recipes"
					</div>
					<div>
						<button className="btn btn-blog d-flex-align-items-center">
							<span className="me-1">Our Chefs </span>
							<BsArrowRight></BsArrowRight>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;