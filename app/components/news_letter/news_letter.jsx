import Image from "next/image";
import React from "react";
import {Button} from "../../exports";
import {FaSearch} from "react-icons/fa";
import arrowAcademy from "../../assets/arrowAcademy.png";

const NewsLetter = () => {
	return (
		<div className="text-black w-full flex flex-col  sm:flex-row items-center h-32 rounded-xl lg:w-[105%] bg-newletter_bg -ml-[0.29rem] sm:-ml-8   md:-ml-10 lg:-ml-20 ">
			<div className="flex flex-col pl-[5rem] mb-3 sm:mb-0  lg:w-[50%] font-bold text-lg lg:text-[1.5rem]">
				<div>
					Find Out ABOUT Latest Courses With The
					<span className="text-purple-500 mx-2">Academy</span> News Letter
				</div>
			</div>
			<div className="relative h-8  flex flex-col  lg:w-[30%]">
				<input
					type="text"
					placeholder="Email Address.."
					className="pl-32  bg-white p-2 rounded-lg w-full text-sm sm:text-base"
				/>
				<Button
					className="absolute top-[0.1rem] md:top-1 lg:top-1 right-[0.2rem] md:right-2 lg:right-2 rounded-lg text-[0.7rem] md:text-[1rem] flex items-center h-8 p-2 bg-black text-white"
					buttonText="Submit"
				/>
			</div>
		</div>
	);
};

export default NewsLetter;
