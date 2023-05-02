import React, { useEffect, useState } from 'react';
import "./ChefInfo.css"

const ChefInfo = () => {

    const [info , setInfo] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/info")
        .then(res => res.json())
        .then(data => setInfo(data))
    } , [])

    console.log(info);

    return (
		<div className="chef-info">
			<div className="text-dance display-1 title-text text-center">
				Our Head Chefs Are Ready to Serve You{" "}
			</div>
			<hr />
			<div className='title-text text-dance fs-4 fw-bold text-center'>
				Indulge in the exquisite creations of our esteemed head chefs,
				who possess a wealth of culinary expertise and are poised to
				satiate your discerning palate. Their masterful techniques and
				use of premium ingredients will undoubtedly transport your taste
				buds on a delectable gastronomic journey.
			</div>
		</div>
	);
};

export default ChefInfo;