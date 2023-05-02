import React from "react";
import "./ChefSlide.css";
import { BsStar, BsStarFill } from "react-icons/bs";
import Rating from "react-rating";

const ChefSlide = ({ chef }) => {
	return (
		<div className="mx-5 my-5 chef-box">
			<div>
				<img className="img-fluid img-chef" src={chef.img} alt="" />
			</div>
			<div className="d-flex justify-content-between align-items-center pt-2 px-5">
				<div className="text-dance fs-4">{chef.name}</div>
				<div className="d-flex justify-content-center align-items-center gap-3">
					<div className="fw-bold">{chef.stars}</div>
					<Rating
						className="d-flex gap-1"
						emptySymbol={<BsStar></BsStar>}
						fullSymbol={<BsStarFill></BsStarFill>}
						initialRating={chef.stars}
						readonly
					></Rating>
				</div>
			</div>
		</div>
	);
};

export default ChefSlide;
