import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import TopNav from "../topNav/TopNav";
import Footer from "../footer/Footer";
import SingleChefRecipes from "../singleChefRecipes/SingleChefRecipes";

const ChefData = () => {
	const [recipes, setRecipes] = useState([]);
	const [chef, setChef] = useState([]);

	const ID = useParams();
	const info = useLoaderData();

	useEffect(() => {
		const selectChef = info.find((chef) => (chef.id = ID));
        setChef(selectChef);
		const iterableRecipes = selectChef.view_recipes;
		setRecipes(iterableRecipes);
	}, []);

    console.log(recipes , chef);

	return (
		<div>
			<TopNav></TopNav>
			<section>
                <SingleChefRecipes key={chef.id} recipes={recipes}></SingleChefRecipes>
            </section>
			<section className="bg-footer">
				<Footer></Footer>
			</section>
		</div>
	);
};

export default ChefData;
