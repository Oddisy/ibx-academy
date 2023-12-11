import React from "react";
import {techStacks} from "./object";
import {IoIosArrowForward} from "react-icons/io";

const HeaderBottom = () => {
	return (
		<div className="flex gap-4 overflow-x-auto mt-8 lg:mt-0 lg:overflow-x-hidden w-full">
			{techStacks.map((stack, index) => {
				return (
					<span
						key={index}
						className={
							index === 0
								? "text-2xl p-2 rounded-md text-green-500 bg-gradient-to-r from-green-300 to-green-200"
								: index === 5
								? "text-md p-2 rounded-md text-red-500 bg-gradient-to-r from-red-300 to-red-200"
								: index === 9
								? "text-md p-2 rounded-md text-purple-500 bg-gradient-to-r from-purple-300 to-purple-200"
								: "text-md p-2 rounded-md bg-gray-100 text-black font-semibold"
						}
					>
						{/* Apply flex properties directly here */}
						<div className="flex gap-4">{stack.stack}</div>
					</span>
				);
			})}
			<IoIosArrowForward className="cursor text-2xl text-black flex items-center h-auto" />
		</div>
	);
};

export default HeaderBottom;
