"use client";
import Image from "next/image";
import React from "react";
import "./header_top.css";
import {useSelector, useDispatch} from "react-redux";
import {toggleMenu} from "../../../redux/slices/menuSlice";
import Link from "next/link";
// images
import academyName from "../../../assets/academyName.png";
import academyLogo from "../../../assets/academyLogo.png";
import behzadAcademy from "../../../assets/behzadAcademy.png";
// icons
import {FaBell, FaSearch} from "react-icons/fa";
import {RxHamburgerMenu} from "react-icons/rx";

const HeaderTop = () => {
	const dispatch = useDispatch();
	const isOpen = useSelector((state) => state.menu.isOpen);
	const toggleMenuHandler = () => {
		dispatch(toggleMenu()); // Dispatch the action to toggle the menu
	};
	return (
		<div className="flex flex-col md:flex-row items-center justify-between w-full h-auto md:h-[4rem] bg-emerald-700 gap-4 md:gap-12.375">
			<div className="w-full md:w-[45%] flex items-center justify-between h-auto  sm:h-">
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
				<span className=" justify-around gap-2 w-[55%] md:w-auto hidden sm:hidden md:hidden lg:flex">
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
			<div className="w-full md:w-[45%] flex bg-emerald-400">
				<div className="w-full md:w-1/2">
					<span className="relative">
						<input
							type="text"
							placeholder="search anything"
							className="pl-4 py-2 rounded-lg w-full"
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
						<div className="flex flex-col">
							<span className="text-xs font-bold">Behzad Pashei</span>
							<span className="text-[0.3] font-thin opacity-70 tracking-tighter -mt-2">
								Ui & Ux Designer
							</span>
						</div>
					</div>
					<span className="h-auto flex items-center text-purple-600">
						<FaBell />
					</span>
				</div>
			</div>
		</div>
	);
};

export default HeaderTop;
