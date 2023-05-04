import React from "react";

const SingleRecipe = ({ recipe }) => {
	const { id, img, info, ingredients, method, name, rating } = recipe;
	console.log(id, img, info, ingredients, method, name, rating);

	return (
		<div>
			<div></div>
		</div>
	);
};

export default SingleRecipe;
