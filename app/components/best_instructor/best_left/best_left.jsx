import React from "react";
import {Button} from "../../../exports";
import {IoIosArrowForward} from "react-icons/io";
import advertisingArrow from "../../../assets/advertisingArrow.png";
import instructorNumber from "../../../assets/instructorNumber.png";
import Image from "next/image";

const BestLeft = () => {
	return (
		<div className="w-full  flex items-center   xl:w-[30%]">
			<div className="w-full lg:w-[90%] h-[40vh] lg:h-[30vh]   flex flex-col    font-bold pt-24 sm:text-lg md:text-xl lg:pt-16 lg:pb-4 lg:pl-4  lg:text-2xl xl:text-3xl">
				Best Instructors
				<div className="text-[0.9rem] flex flex-col font-bold mt-4  opacity-60">
					At The Academy, We Strive To Bring Together The Best Professors For
					The Courses.
				</div>
				<div className="flex relative items-center w-full mt-8  lg:mt-8 ">
					<Button
						className="rounded-lg text-[0.5rem] sm:text-[0.7rem] py-[0.5rem] px-4  flex items-center h-10  bg-black text-white"
						arrow={<IoIosArrowForward className="ml-1" />}
						buttonText=" Instructors"
					/>
					<Image
						className="ml-2 w-[5rem] md:w-16 lg:w-20 xl:w-24 h-24 object-contain"
						src={advertisingArrow}
						alt="image"
					/>
					<Image
						className="ml-2 w-[5rem] md:w-16 lg:w-20 xl:w-24  h-24 object-contain "
						src={instructorNumber}
						alt="image"
					/>
				</div>
			</div>
		</div>
	);
};

export default BestLeft;
