import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
	return (
		<div>
			<form className="login-form col-11 col-sm-10 col-md-8 mx-auto py-5 px-4">
				<div className="display-6 fw-bold text-center pb-5 title-text">
					Register your account
				</div>
				<hr />
				<form className="mt-5">
					<div>
						<div className="fs-5 fw-bold mb-3 title-text">Your Name</div>
						<div>
							<input
								className="input-field"
								placeholder="Enter Your Name"
								type="text"
								name="text"
								id="text"
							/>
						</div>
					</div>
					<div>
						<div className="fs-5 fw-bold mb-3 title-text">Photo URL</div>
						<div>
							<input
								className="input-field"
								placeholder="Enter Your Photo URL"
								type="url"
								name="url"
								id="url"
							/>
						</div>
					</div>
					<div>
						<div className="fs-5 fw-bold mb-3 title-text">Email address</div>
						<div>
							<input
								className="input-field"
								placeholder="Enter Your Email Address"
								type="email"
								name="email"
								id="email"
							/>
						</div>
					</div>
					<div>
						<div className="fs-5 fw-bold mb-3 title-text">Password</div>
						<div>
							<input
								className="input-field"
								placeholder="Enter Your Password"
								type="password"
								name="password"
								id="password"
							/>
						</div>
					</div>

					<div className="d-flex align-items-center text-secondary fw-bold">
						<div>
							<input className="me-2" type="checkbox" />
						</div>
						<div>Accept Terms And Conditions</div>
					</div>

					<div>
						<button
							className="w-100 border-0 bg-dark text-white py-2 fw-bold fs-5 mt-3"
							type="submit"
						>
							Register
						</button>
					</div>
				</form>

				<div className="text-center mt-4 text-secondary fw-bold">
					Already Have An Account ?
					<Link
						className="text-decoration-none text-danger"
						to={"/login"}
					>
						<span> Login</span>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Register;
