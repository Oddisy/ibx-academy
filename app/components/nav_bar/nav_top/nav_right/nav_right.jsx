"use client";
import React from "react";

import behzadAcademy from "../../../../assets/behzadAcademy.png";
// icons
import {FaBell, FaSearch} from "react-icons/fa";
import Image from "next/image";

const NavRight = () => {
	return (
		<div className="w-full md:w-[45%] flex ">
			<div className="w-full md:w-1/2">
				<span className="relative">
					<input
						type="text"
						placeholder="search anything"
						className="pl-4 py-2 bg-gray-50 rounded-lg w-full"
					/>
					<FaSearch className="absolute outline-none opacity-50 -top-[1px] right-3 text-xl text-black" />
				</span>
			</div>
			<div className="flex justify-around w-full md:w-1/2 items-center">
				<div className="flex gap-1 items-center">
					<Image
						className="w-8 h-8"
						src={behzadAcademy}
						width={32}
						height={32}
					/>
					<div className="flex flex-col text-gray-600">
						<span className="text-xs font-bold">Behzad Pashei</span>
						<span className="text-xs  opacity-60 tracking-tighter -mt-1">
							Ui & Ux Designer
						</span>
					</div>
				</div>
				<span className="flex items-center justify-center h-8 w-8 rounded-md hover:bg-gray-100 bg-opacity-50 text-purple-600">
					<FaBell />
				</span>
			</div>
		</div>
	);
};

export default NavRight;
