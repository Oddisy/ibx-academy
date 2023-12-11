"use client";
import React from "react";
import academyUi from "../../assets/academyUi.png";
import {UiLeft} from "../../exports";
import Image from "next/image";
import {UiBottom} from "../../exports";

import Button from "../../exports";
import {FaSearch} from "react-icons/fa";

const UiUx = () => {
	return (
		<div className="w-full  flex flex-col ">
			<div className="w-full flex flex-col lg:flex-row mt-16 text-black">
				{/* left ui  */}
				<UiLeft />
				<div className="w-full lg:w-1/2">
					<Image src={academyUi} layout="responsive" width={500} height={300} />
				</div>
			</div>
			{/* bottom ui */}
			<UiBottom />
		</div>
	);
};

export default UiUx;
