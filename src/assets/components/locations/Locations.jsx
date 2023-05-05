import React from "react";
import { BsHeartFill } from "react-icons/bs";
import "./Location.css";
import { toast } from "react-toastify";

const Locations = () => {
	const handleLike = (place , emoji) => {
		toast("Thanks for liking our " + place + " restaurant " + emoji)
	};

	return (
		<div>
			<div className="w-75 mx-auto display-3 text-dance title-text text-center">
				Discover Our Upscale Restaurants
			</div>
			<hr />
			<div className="row mx-auto my-5">
				<div className="col-11 col-lg-4 mx-auto d-flex flex-column justify-content-center align-items-center card-outlet">
					<div>
						<img
							className="img-fluid rounded-2 my-3"
							src="https://media.istockphoto.com/id/1162362647/photo/restaurant-owner-cooking-for-customers.jpg?s=612x612&w=0&k=20&c=uVRCE3z7eGptmKBYABKqpcgpEkixaahxXr8146ixakQ="
							alt="img"
						/>
					</div>
					<div className="text-dance display-6 text-center">
						Our Tokyo Branch
					</div>
					<div
						onClick={() => handleLike("tokyo" , "❤️")}
						className="btn bg-dark text-white w-75 mx-auto d-flex justify-content-center align-items-center my-4"
					>
						<BsHeartFill className="fs-5"></BsHeartFill>
						<span className="ms-2 fs-5">Like</span>
					</div>
				</div>
				<div className="col-11 col-lg-4 mx-auto d-flex flex-column justify-content-center align-items-center card-outlet">
					<div>
						<img
							className="img-fluid rounded-2 my-3"
							src="https://media.istockphoto.com/id/470350508/photo/late-night-dining.jpg?s=612x612&w=0&k=20&c=9ojII3y170Qi_jHQ-8IXwa_k4NwgDmfxXzobTHubJNg="
							alt="img"
						/>
					</div>
					<div className="text-dance display-6 text-center">
						Our Osaka Branch
					</div>
					<div
						onClick={() => handleLike("Osaka" , "😀")}
						className="btn bg-dark text-white w-75 mx-auto d-flex justify-content-center align-items-center my-4"
					>
						<BsHeartFill className="fs-5"></BsHeartFill>
						<span className="ms-2 fs-5">Like</span>
					</div>
				</div>
				<div className="col-11 col-lg-4 mx-auto d-flex flex-column justify-content-center align-items-center card-outlet">
					<div>
						<img
							className="img-fluid rounded-2 my-3"
							src="https://media.istockphoto.com/id/1406426653/photo/yokohama-streets-chinatown.jpg?s=612x612&w=0&k=20&c=N9uU_F8_rwS2JzSzij_C3JoYBlesZcSB-MmhxsRsIpk="
							alt="img"
						/>
					</div>
					<div className="text-dance display-6 text-center">
						Our Yokohama Branch
					</div>
					<div
						onClick={() => handleLike("Yokohama" , "😍")}
						className="btn bg-dark text-white w-75 mx-auto d-flex justify-content-center align-items-center my-4"
					>
						<BsHeartFill className="fs-5"></BsHeartFill>
						<span className="ms-2 fs-5">Like</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Locations;
