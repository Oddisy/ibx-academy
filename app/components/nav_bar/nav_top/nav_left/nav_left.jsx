"use client";
import Image from "next/image";
import React from "react";
// images
import {toggleMenu} from "../../../../redux/slices/menuSlice";

import academyName from "../../../../assets/academyName.png";
import academyLogo from "../../../../assets/academyLogo.png";
import {useSelector, useDispatch} from "react-redux";
import Link from "next/link";
import {RxHamburgerMenu} from "react-icons/rx";

const NavLeft = () => {
	const dispatch = useDispatch();
	const isOpen = useSelector((state) => state.menu.isOpen);

	const toggleMenuHandler = () => {
		dispatch(toggleMenu()); // Dispatch the action to toggle the menu
	};
	return (
		<div className="w-full md:w-[45%] flex items-center justify-between h-auto ">
			<Link href="">
				<span className="flex items-center gap-1 w-[45%] md:w-auto">
					<Image
						className="object-cover w-4 h-4"
						src={academyLogo}
						alt="academy"
						width={20}
						height={20}
					/>
					<Image
						className="w-24 h-4"
						src={academyName}
						alt="academy"
						width={96}
						height={20}
					/>
				</span>
			</Link>
			<span className=" justify-around text-gray-500 gap-2 w-[55%] md:w-auto hidden sm:hidden md:hidden lg:flex">
				<Link href="">
					<span>Category</span>
				</Link>
				<Link href="">
					<span>Teach</span>
				</Link>
				<Link href="">
					<span>Contact us</span>
				</Link>
				<Link href="">
					<span>About us</span>
				</Link>
			</span>
			<div
				onClick={toggleMenuHandler}
				className="text-3xl text-black sm:block md:hidden  lg:hidden"
			>
				<RxHamburgerMenu />
				{isOpen && (
					<div>
						<div
							className={`menu-container flex flex-col mt-16  right-16 text-gray-900 text-[1rem] bg-white p-2 bg-opacity-100 rounded-lg w-1/4 h-1/2 absolute  ${
								isOpen ? "show" : ""
							}`}
						>
							<Link href="">
								<span>Category</span>
							</Link>
							<Link href="">
								<span>Teach</span>
							</Link>
							<Link href="">
								<span>Contact us</span>
							</Link>
							<Link href="">
								<span>About us</span>
							</Link>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default NavLeft;
