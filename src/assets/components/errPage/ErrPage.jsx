import React from "react";
import "./ErrPage.css";
import { Link } from "react-router-dom";

const ErrPage = () => {
	return (
		<div className="d-flex justify-content-center align-items-center err-box">
			<div>
				<img
					className="img-fluid"
					src="https://media.istockphoto.com/id/1359544016/vector/404-error-program-error-web-page-cannot-be-opened.jpg?s=612x612&w=0&k=20&c=kSLw1lRBG__vjwURrno8iE2jWDgqrvrP8fi1WPkYu3g="
				/>
			</div>
			<div className="d-flex flex-column">
				<div className="display-1 title-text">Page Not Found</div>
			</div>
		</div>
	);
};

export default ErrPage;
