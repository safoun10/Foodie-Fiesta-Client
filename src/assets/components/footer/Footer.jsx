import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { toast } from "react-toastify";

const Footer = () => {
	return (
		<div className="w-100 footer">
			<div className="text-dance display-4 text-center">
				Subscribe to Our Mailing List
			</div>
			<hr />
			<div className="w-100 mx-auto row py-2">
				<div
					onClick={() => toast("Arigato gozaimasu !!!")}
					className="btn mx-auto col-11 col-sm-5 title-text fs-4 fw-bold rounded-0 py-2 bg-white btn-secondary"
				>
					Subscribe
				</div>
			</div>
			<div className="w-100 row text-white py-5">
				<div className="col-6 col-sm-3">
					<div className="fs-3 mb-4 d-flex flex-column align-items-center">
						Navigate
					</div>
					<div className="d-flex flex-column align-items-center py-2">
						<div className="mb-2">
							<Link
								className="text-decoration-none text-white"
								to={"/"}
							>
								Home
							</Link>
						</div>
						<div className="mb-2">
							<Link
								className="text-decoration-none text-white"
								to={"/blog"}
							>
								Blog
							</Link>
						</div>
						<div className="mb-2">
							<Link
								className="text-decoration-none text-white"
								to={"/login"}
							>
								Login
							</Link>
						</div>
					</div>
				</div>
				<div className="col-6 col-sm-3">
					<div className="fs-3 mb-4 d-flex flex-column align-items-center">
						Catering
					</div>
					<div className="d-flex flex-column align-items-center ms-2 py-2">
						<div className="mb-2">Corporate Events</div>
						<div className="mb-2">Weddings and Galas</div>
						<div className="mb-2">Cooking classes</div>
					</div>
				</div>
				<div className="col-6 col-sm-3">
					<div className="fs-3 mb-4 d-flex flex-column align-items-center">
						Contacts
					</div>
					<div className="d-flex flex-column align-items-center ms-2 py-2 ">
						<div className="mb-2">
							<div className="text-center">
								1122 Silicon Valley , California
							</div>
						</div>
						<div className="mb-2">info@fiesta.com</div>
						<div className="mb-2">001 001 100 111</div>
					</div>
				</div>
				<div className="col-6 col-sm-3">
					<div className="fs-3 mb-4 d-flex flex-column align-items-center">
						Social
					</div>
					<div className="d-flex flex-column align-items-center ms-2 py-2">
						<div className="mb-2">Facebook</div>
						<div className="mb-2">Youtube</div>
						<div className="mb-2">InstaGram</div>
					</div>
				</div>
			</div>
			<hr />
			<div className="text-center pt-3">
				All Rights Reserved | &copy;Foodie Fiesta
			</div>
		</div>
	);
};

export default Footer;
