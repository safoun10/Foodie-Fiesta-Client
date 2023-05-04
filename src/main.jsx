import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import Home from "./assets/layout/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrPage from "./assets/components/errPage/ErrPage";
import Blog from "./assets/layout/Blog/Blog";
import Auth from "./assets/layout/Auth/Auth";
import Login from "./assets/components/login/Login";
import Register from "./assets/components/register/Register";
import AuthProvider from "./authProvider/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "react-tooltip/dist/react-tooltip.css";
import PrivateRoute from "./privateRoute/PrivateRoute";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Auth></Auth>,
		children: [
			{
				path: "/",
				element: <Navigate to={"/home"}></Navigate>,
			},
			{
				path: "login",
				element: <Login></Login>,
			},
			{
				path: "register",
				element: <Register></Register>,
			},
		],
	},
	{
		path: "home",
		element: <Home></Home>,
	},
	{
		path: "blog",
		element: (
			<PrivateRoute>
				<Blog></Blog>
			</PrivateRoute>
		),
	},

	{
		path: "*",
		element: <ErrPage></ErrPage>,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
			<ToastContainer></ToastContainer>
		</AuthProvider>
	</React.StrictMode>
);
