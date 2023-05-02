import React from "react";
import { Link } from "react-router-dom";
import "./TopNav.css";
import { BsPersonCircle } from "react-icons/bs";

const TopNav = () => {
	return (
		<div className="sticky">
			<div className="bg-white row pb-2 mb-5 mx-0 w-100 justify-content-center align-items-center pt-3 pb-4 g-2">
				<div className="col-md-3 col-10 d-flex justify-content-center align-items-center display-6 fw-bold title-text text-dance">
					Foodie Fiesta
				</div>
				<div className="col-md-6 col-8 d-flex justify-content-center align-items-center gap-5">
					<Link
						className="text-decoration-none title-text fw-bold fs-5"
						to="/"
					>
						Home
					</Link>

					<Link
						className="text-decoration-none title-text fw-bold fs-5"
						to="/"
					>
						About
					</Link>

					<Link
						className="text-decoration-none title-text fw-bold fs-5"
						to="/"
					>
						Blog
					</Link>
				</div>
				<div className="col-md-3 col-10 d-flex justify-content-center align-items-center p-0">
					<div>
						<BsPersonCircle className="fs-2 title-text"></BsPersonCircle>
					</div>
					<Link to={"/login"}>
						<button className="btn-blog text-white px-4 py-2 border-0 rounded-2 ms-2">
							Login
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default TopNav;
