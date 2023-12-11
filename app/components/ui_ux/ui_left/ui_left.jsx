import React from "react";
import {Button} from "../../../exports";
import {IoIosArrowForward} from "react-icons/io";
import seventyNine from "../../../assets/seventyNine.png";
import Image from "next/image";

const UiLeft = () => {
	return (
		<div className="w-full lg:w-1/2">
			<div className="w-full lg:w-4/5 h-[55vh]  flex flex-col font-bold pt-24 sm:text-lg md:text-xl lg:pt-16 lg:pb-4 lg:pl-4 lg:pr-16 lg:text-2xl">
				<span>🙌Hello Friends</span>
				<span>I Am Sofia And We Want To Start</span>
				<span>
					A{" "}
					<span className="text-gradient-to-r from-purple-500 via-pink-200 to-pink-100">
						Web Design{" "}
					</span>{" "}
					Course Together.
				</span>
				<span>Do you like too ?😍</span>
				<div className="flex items-center w-full mt-24 lg:mt-8 lg:ml-4">
					<Button
						className="rounded-lg text-[0.5rem] sm:text-[0.7rem] md:text-[1rem] lg:text-[1.2rem] flex items-center h-10 p-2 bg-black text-white"
						arrow={<IoIosArrowForward className="ml-2" />}
						buttonText="Start Course Now"
					/>
					<Image className="ml-2 w-32 h-24 object-contain" src={seventyNine} />
				</div>
			</div>
		</div>
	);
};

export default UiLeft;
