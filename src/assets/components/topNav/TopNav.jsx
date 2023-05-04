import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./TopNav.css";
import { BsPersonCircle } from "react-icons/bs";
import { AuthContext } from "../../../authProvider/AuthProvider";
import { Tooltip } from "react-tooltip";

const TopNav = () => {
	const { user, logout } = useContext(AuthContext);

	const signOut = () => {
		logout();
	};

	return (
		<div className="sticky">
			<div className="bg-white row pb-2 mb-5 mx-0 w-100 justify-content-center align-items-center pt-3 pb-4 g-2">
				<div className="col-md-3 col-10 d-flex justify-content-center align-items-center display-6 fw-bold title-text text-dance">
					<Link
						className="text-decoration-none title-text text-dance"
						to="/home"
					>
						Foodie Fiesta
					</Link>
				</div>
				<div className="col-md-6 col-8 d-flex justify-content-center align-items-center gap-5">
					<NavLink
						activeclasslink="active"
						className="text-decoration-none title-text fw-bold fs-5"
						to="/home"
					>
						Home
					</NavLink>

					<NavLink
						activeclasslink="active"
						className="text-decoration-none title-text fw-bold fs-5"
						to="/blog"
					>
						Blog
					</NavLink>

					<NavLink
						activeclasslink="active"
						className="text-decoration-none title-text fw-bold fs-5"
						to="https://github.com/safoun10"
						target="_blank"
					>
						Contact
					</NavLink>
				</div>
				{user ? (
					<div className="col-md-3 col-10 d-flex justify-content-center align-items-center p-0">
						<div>
							<BsPersonCircle
								data-tooltip-id="my-tooltip"
								data-tooltip-content={user.email}
								className="fs-2 title-text"
							/>
							<Tooltip id="my-tooltip" />
						</div>
						<div>
							<button
								onClick={signOut}
								className="btn-blog text-white px-4 py-2 border-0 rounded-2 ms-2"
							>
								Log Out
							</button>
						</div>
					</div>
				) : (
					<div className="col-md-3 col-10 d-flex justify-content-center align-items-center p-0">
						<NavLink to={"/login"}>
							<button className="btn-blog text-white px-4 py-2 border-0 rounded-2 ms-2">
								Login
							</button>
						</NavLink>
					</div>
				)}
			</div>
		</div>
	);
};

export default TopNav;
