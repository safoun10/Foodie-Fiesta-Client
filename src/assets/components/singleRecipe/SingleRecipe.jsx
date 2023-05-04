import React from "react";
import "./SingleRecipe.css";
import Rating from "react-rating";
import { BsHeart, BsStar, BsStarFill } from "react-icons/bs";
import { toast } from "react-toastify";

const SingleRecipe = ({ recipe }) => {
	const { id, img, info, ingredients, method, name, rating } = recipe;

    const handleFavorite = () => {
        toast(name + " is your favorite food")
    }

	return (
		<div className="row w-100 single-recipe my-5 d-flex justify-content-between align-items-center">
			<div className="col-5 mx-auto">
				<div className="text-center title-text text-dance display-4">
					{name}
				</div>
                <hr />
                <div className="title-text text-center">
                    {info}
                </div>
                <hr />
                <div className="text-center title-text fs-2 text-dance fw-bold">Made with</div>
                <div className="text-center title-text fs-6">{ingredients}</div>
			</div>
			<div className="col-6 d-flex flex-column">
				<img className="w-100" src={img} />
				<div className="d-flex align-items-center justify-content-between">
					<div className="d-flex align-items-center">
						<Rating
							className="d-flex gap-1 title-text"
							emptySymbol={<BsStar></BsStar>}
							fullSymbol={<BsStarFill></BsStarFill>}
							initialRating={rating}
							readonly
						></Rating>
						<div className="fw-bold ms-2 title-text">{rating}</div>
					</div>
					<div>
						<button onClick={handleFavorite} className="favorite">Favorite <BsHeart className="text-white"></BsHeart></button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleRecipe;
