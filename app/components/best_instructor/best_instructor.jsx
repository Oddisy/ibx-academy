import React from "react";
import {BestLeft} from "../../exports";
import {BestRight} from "../../exports";

const BestInstructor = () => {
	return (
		<div className="w-full h-full flex flex-col  xl:flex-row mt-32 md:mt-8 lg:mt-8 text-black">
			{/* left ui FOR BEST INSTRUCTOO SECTION */}
			<BestLeft />
			<BestRight />
		</div>
	);
};

export default BestInstructor;
