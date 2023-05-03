import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
	return (
		<div>
			<form className="login-form col-11 col-sm-10 col-md-8 mx-auto py-5 px-4">
				<div className="display-6 fw-bold text-center pb-2 title-text">
					Login your account
				</div>
				<hr />
				<form className="mt-5">
					<div>
						<div className="fs-5 fw-bold mb-3 title-text">Email address</div>
						<div>
							<input
								className="input-field"
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
								type="password"
								name="password"
								id="password"
							/>
						</div>
					</div>

					<div>
						<button
							className="w-100 border-0 bg-dark text-white py-2 fw-bold fs-5 mt-3"
							type="submit"
						>
							Login
						</button>
					</div>
				</form>

				<div className="text-center mt-4 title-text fw-bold">
					Don't Have An Account ?
					<Link
						className="text-decoration-none text-danger"
						to={"/register"}
					>
						<span> Register</span>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Login;
