import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { toast } from "react-toastify";
import { AuthContext } from "../../../authProvider/AuthProvider";

const Login = () => {
	const { loginUser } = useContext(AuthContext);

	const navigate = useNavigate();
	const location = useLocation();
    const from = location.state?.from?.pathname || "/home";
	
	const handleLogin = (event) => {
		event.preventDefault();

		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;

        loginUser(email , password)
        .then(res => {
            toast("Okaeri misutā !!");
            toast("Welcome Back !!");
            form.reset();
			navigate(from , {replace : true})
        })
        .catch(error => {
            toast.error(error.message)
        })
        
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
