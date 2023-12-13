import React from "react";
import academyCertificate from "../../../assets/academyCertificate.png";
import Image from "next/image";

const FooterMiddle = () => {
	return (
		<div className="w-full h-70 text-gray-700    grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 ">
			<div className=" flex flex-col gap-6 ">
				<div className="font-bold text-center">Membership Certificate</div>
				<div>
					<Image
						src={academyCertificate}
						className=" mt-4 w-full object-contain h-[20rem]"
						alt="image"
					/>
				</div>
			</div>
			<div>
				<div className="font-bold text-center">Categories </div>
				<div className="mt-4 flex flex-col text-center gap-2">
					<div>Contact</div>
					<div>Games</div>
					<div>Categories</div>
					<div>Author</div>
					<div>Food</div>
					<div>Computer</div>
					<div>Days</div>
					<div>Genre</div>
					<div>Fiction</div>
					<div>Score</div>
					<div>Date</div>
					<div>Design</div>
				</div>
			</div>
			<div>
				<div className="font-bold text-center">Quick Access</div>
				<div className="mt-4 flex flex-col gap-2 text-center">
					<div>Contact</div>
					<div>Games</div>
					<div>Categories</div>
					<div>Author</div>
					<div>Food</div>
					<div>Computer</div>
					<div>Days</div>
					<div>Genre</div>
					<div>Fiction</div>
					<div>Score</div>
					<div>Date</div>
					<div>Design</div>
				</div>
			</div>
			<div>
				<div className="font-bold ">New Comments</div>
				<div className=" flex flex-col w-full gap-6 text-[0.9rem] mt-4">
					<div className=" bg-newletter_bg p-2 rounded-md">
						<div className="font-semibold">Eilsmart</div>
						<div>Lorem ipsum dolor sit amet, consectetur </div>
					</div>
					<div className=" bg-newletter_bg p-2 rounded-md">
						<div className="font-semibold">Eilsmart</div>
						<div>Lorem ipsum dolor sit amet, consectetur </div>
					</div>
					<div className=" bg-newletter_bg p-2 rounded-md">
						<div className="font-semibold">Eilsmart</div>
						<div>Lorem ipsum dolor sit amet, consectetur </div>
					</div>
					<div className=" bg-newletter_bg p-2 rounded-md">
						<div className="font-semibold">Eilsmart</div>
						<div>Lorem ipsum dolor sit amet, consectetur </div>
					</div>
					<div className=" bg-newletter_bg p-2 rounded-md">
						<div className="font-semibold">Eilsmart</div>
						<div>Lorem ipsum dolor sit amet, consectetur </div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FooterMiddle;
