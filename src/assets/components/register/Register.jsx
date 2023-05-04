import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../authProvider/AuthProvider";
import { toast } from "react-toastify";
import { BsGithub, BsGoogle } from "react-icons/bs";
import "./Register.css"

const Register = () => {
	const { createUser } = useContext(AuthContext);
	const [err, setErr] = useState("");

	const navigate = useNavigate();

	const errorPop = (message) => {
		toast.error(message);
	};

	const handleRegister = (event) => {
		event.preventDefault();

		const form = event.target;
		const email = form.email.value;
		const url = form.url.value;
		const text = form.text.value;
		const password = form.password.value;

		if (password.length < 6) {
			setErr("Password must be 6 characters or more ");
			toast.error(err);
			return;
		} else {
			createUser(email, password)
				.then((res) => {
					toast("Arigato gozaimasu !!");
					toast("Account created successfully");
					form.reset();
					navigate("/home");
				})
				.catch((error) => {
					setErr(error.message);
					const errorMessage = err;
					errorPop(err);
				});
		}
	};

	return (
		<div>
			<div className="login-form col-11 col-sm-10 col-md-8 mx-auto py-5 px-4">
				<div className="display-6 fw-bold text-center pb-5 title-text">
					Register your account
				</div>
				<hr />
				<form onSubmit={handleRegister} className="mt-5">
					<div>
						<div className="fs-5 fw-bold mb-3 title-text">
							Your Name
						</div>
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
						<div className="fs-5 fw-bold mb-3 title-text">
							Photo URL
						</div>
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
						<div className="fs-5 fw-bold mb-3 title-text">
							Email address
						</div>
						<div>
							<input
								className="input-field"
								placeholder="Enter Your Email Address"
								type="email"
								name="email"
								id="email"
								required
							/>
						</div>
					</div>
					<div>
						<div className="fs-5 fw-bold mb-3 title-text">
							Password
						</div>
						<div>
							<input
								className="input-field"
								placeholder="Enter Your Password"
								type="password"
								name="password"
								id="password"
								required
							/>
						</div>
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
				<div className="mt-5">
					<hr />
					<div className="display-5 text-dance my-2 fw-bold text-center">
						OR
					</div>
					<hr />
					<div>
						<div className="row">
							<div className="btn third-party-auth col-11 col-sm-6 mx-auto d-flex justify-content-center align-items-center">
								Register with <BsGoogle className="ms-2"></BsGoogle>
							</div>
							<div className="btn third-party-auth col-11 col-sm-6 mx-auto d-flex justify-content-center align-items-center">
								Register with <BsGithub className="ms-2"></BsGithub>
							</div>
						</div>
					</div>
					<hr />
				</div>

				<div className="text-center mt-4 text-secondary fw-bold">
					Already Have An Account ?
					<Link
						className="text-decoration-none text-danger"
						to={"/login"}
					>
						<span> Login</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Register;
