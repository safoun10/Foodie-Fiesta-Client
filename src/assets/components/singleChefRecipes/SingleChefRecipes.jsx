import React from 'react';
import SingleRecipe from '../singleRecipe/SingleRecipe';

const SingleChefRecipes = ({recipes}) => {
    return (
		<div className="mx-auto my-5" style={{ maxWidth: "1200px" }}>
			<div>
				{recipes.map((recipe) => (
					<SingleRecipe
						key={recipe.id}
						recipe={recipe}
					></SingleRecipe>
				))}
			</div>
		</div>
	);
};

export default SingleChefRecipes;