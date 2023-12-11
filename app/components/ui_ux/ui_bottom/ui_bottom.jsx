import Image from "next/image";
import React from "react";
import {Button} from "../../../exports";
import {FaSearch} from "react-icons/fa";
import arrowAcademy from "../../../assets/arrowAcademy.png";

const UiBottom = () => {
	return (
		<div className="text-black w-full lg:w-[70%] mx-auto">
			<div className="flex flex-col mx-auto lg:w-[50%] font-bold text-xl lg:text-2xl">
				<div>
					Search Among <span className="text-purple-500">58340</span> Courses
					And
				</div>
				<div className="mt-2">Find Your Favourite Course</div>
			</div>
			<div className="flex flex-col lg:flex-row gap-2">
				<div className="relative flex lg:w-[80%]">
					<Button
						className="absolute top-1 left-2 rounded-lg text-[0.7rem] md:text-[1rem] flex items-center h-8 p-2 bg-black text-white"
						buttonText="Categories"
					/>
					<input
						type="text"
						placeholder="search anything"
						className="pl-12 sm:pl-32 py-2 bg-gray-100 rounded-lg w-full text-sm sm:text-base"
					/>
					<FaSearch className="absolute top-[50%] transform -translate-y-1/2 right-3 text-lg text-black" />
				</div>
				<div className="flex items-center lg:w-[50%] mt-2 lg:mt-0 relative">
					<span className="text-[0.7rem] sm:text-[0.8rem] lg:text-base">
						Or View The Following Courses...
					</span>
					<div className=" ml-2 lg:ml-4 absolute -right-4 -mt-8">
						<Image className="w-12 h-12 lg:w-16 lg:h-16" src={arrowAcademy} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default UiBottom;
