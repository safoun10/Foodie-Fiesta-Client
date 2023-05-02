import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./assets/layout/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Marquee from "react-fast-marquee";
import ErrPage from "./assets/components/errPage/ErrPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home></Home>
	},
	{
		path : "*",
		element : <ErrPage></ErrPage>
	}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);