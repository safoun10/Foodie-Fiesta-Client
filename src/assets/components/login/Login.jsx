import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { toast } from "react-toastify";
import { AuthContext } from "../../../authProvider/AuthProvider";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { getAuth, signInWithPopup } from "firebase/auth";

const auth = getAuth();
const Login = () => {
	const { loginUser, GoogleProvider , GithubProvider} = useContext(AuthContext);

	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/home";

	const handleLogin = (event) => {
		event.preventDefault();

		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;

		loginUser(email, password)
			.then((res) => {
				toast("Okaeri misutā !!");
				toast("Welcome Back !!");
				form.reset();
				navigate(from, { replace: true });
			})
			.catch((error) => {
				toast.error(error.message);
			});
	};

	const handleGoogleSignIn = () => {
		signInWithPopup(auth, GoogleProvider)
			.then(() => {
				toast("You have successfully signed in with Google !!");
				navigate(from, { replace: true });
			})
			.catch((err) => {
				toast.error(err.message);
			});
	};
	const handleGithubSignIn = () => {
		signInWithPopup(auth, GithubProvider)
			.then(() => {
				toast("You have successfully signed in with Github !!");
				navigate(from, { replace: true });
			})
			.catch((err) => {
				toast.error(err.message);
			});
	};

	return (
		<div className="login-form col-11 col-sm-10 col-md-8 mx-auto py-5 px-4">
			<div className="display-6 fw-bold text-center pb-2 title-text">
				Login your account
			</div>
			<hr />
			<form onSubmit={handleLogin} className="mt-5">
				<div>
					<div className="fs-5 fw-bold mb-3 title-text">
						Email address
					</div>
					<div>
						<input
							className="input-field"
							type="email"
							name="email"
							id="email"
							required
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
							required
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
			<div className="mt-5">
				<hr />
				<div className="display-5 text-dance my-2 fw-bold text-center">
					OR
				</div>
				<hr />
				<div>
					<div className="row">
						<div
							onClick={handleGoogleSignIn}
							className="btn third-party-auth col-11 col-sm-6 mx-auto d-flex justify-content-center align-items-center"
						>
							Login with <BsGoogle className="ms-2"></BsGoogle>
						</div>
						<div
							onClick={handleGithubSignIn}
							className="btn third-party-auth col-11 col-sm-6 mx-auto d-flex justify-content-center align-items-center"
						>
							Login with <BsGithub className="ms-2"></BsGithub>
						</div>
					</div>
				</div>
				<hr />
			</div>

			<div className="text-center mt-4 title-text fw-bold">
				Don't Have An Account ?
				<Link
					className="text-decoration-none text-danger"
					to={"/register"}
				>
					<span> Register</span>
				</Link>
			</div>
		</div>
	);
};

export default Login;
