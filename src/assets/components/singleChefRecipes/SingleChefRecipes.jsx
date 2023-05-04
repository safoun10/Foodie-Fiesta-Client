import React from 'react';
import SingleRecipe from '../singleRecipe/SingleRecipe';

const SingleChefRecipes = ({recipes}) => {
    return (
        <div>
            {recipes.map(recipe => <SingleRecipe key={recipe.id} recipe={recipe}></SingleRecipe>)}
        </div>
    );
};

export default SingleChefRecipes;