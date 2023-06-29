import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import TopNav from "../topNav/TopNav";
import Footer from "../footer/Footer";
import SingleChefRecipes from "../singleChefRecipes/SingleChefRecipes";
import "./ChefData.css"
import { BsHeartFill } from "react-icons/bs";

const ChefData = () => {
	const [recipes, setRecipes] = useState([]);
	const [chef, setChef] = useState([]);

	const ID = useParams();
	const info = useLoaderData();

	useEffect(() => {
		const selectChef = info.find((chef) => (chef.id == ID.ID));
        setChef(selectChef);
		const iterableRecipes = selectChef.view_recipes;
		setRecipes(iterableRecipes);
	}, []);


	return (
		<div>
			<TopNav></TopNav>
            <div className="display-1 text-two title-text my-5 text-center">Recipes</div>
			<section
				className="mx-auto mb-5 chef"
				style={{ maxWidth: "1200px" }}
			>
				<div className="row align-items-center">
					<div className="col-7">
						<img
							className="w-100 img-round"
							src={chef.Image}
							alt="chef img"
						/>
						<div className="title-text fs-6 mt-2">
							<span className="fs-5 text-two mx-2">
								<BsHeartFill className="title-text me-2"></BsHeartFill>
								{chef.likes} people loved this Chef's Foods
							</span>
						</div>
					</div>
					<div className="col-5 mx-auto">
						<div className="display-3 title-text text-two text-center">
							{chef.name}
						</div>
						<hr />
						<div className="title-text text-two fs-4 text-center">
							{chef.name} is an expert chef with {chef.experience}
							+ years of experience
						</div>
                        <hr />
						<div className="title-text text-two fw-bold fs-6 text-center">
							{chef.bio}
						</div>
					</div>
				</div>
			</section>
			<section className="w-75 mx-auto display-3 text-center text-dance title-text">
				Some of The Best Recipes from Our Chef
			</section>
			<section>
				<SingleChefRecipes
					key={chef.id}
					recipes={recipes}
				></SingleChefRecipes>
			</section>
			<section className="bg-footer">
				<Footer></Footer>
			</section>
		</div>
	);
};

export default ChefData;