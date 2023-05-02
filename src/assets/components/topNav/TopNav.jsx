import React from "react";
import { Link } from "react-router-dom";
import "./TopNav.css";

const TopNav = () => {
	return (
		<div className="sticky">
			<div className="bg-white row pb-2 mb-5 mx-0 w-100 justify-content-center align-items-center pt-3 pb-4 g-2">
				<div className="col-md-3 col-10 d-flex justify-content-center align-items-center display-6 fw-bold text-dance">
					Foodie Fiesta
				</div>
				<div className="col-md-6 col-8 d-flex justify-content-center align-items-center gap-5">
					<Link
						className="text-decoration-none text-secondary fw-bold fs-5"
						to="/"
					>
						Home
					</Link>

					<Link
						className="text-decoration-none text-secondary fw-bold fs-5"
						to="/"
					>
						About
					</Link>

					<Link
						className="text-decoration-none text-secondary fw-bold fs-5"
						to="/"
					>
						Blog
					</Link>
				</div>
				<div className="col-md-3 col-10 d-flex justify-content-center align-items-center p-0">
					<div>Profile</div>
					<Link to={"/login"}>
						<button className="bg-dark text-white px-4 py-2 border-0 rounded-2 ms-2">
							Login
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default TopNav;
