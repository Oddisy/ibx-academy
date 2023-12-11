"use client";
import Image from "next/image";
import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {increment} from "../../../redux/slices/counter_slice";
import Link from "next/link";
import academyName from "../../../assets/academyName.png";
import academyLogo from "../../../assets/academyLogo.png";
import behzadAcademy from "../../../assets/behzadAcademy.png";
// import NotificationsIcon from "@mui/icons-material/Notifications";

const HeaderTop = () => {
	const count = useSelector((state) => state.counter.valu);
	const dispatch = useDispatch();
	return (
		<div class="flex items-center justify-between w-94.5 h-[4rem] bg-emerald-700  gap-12.375">
			<div className="w-[45%] flex items-center justify-between h-auto bg-yellow-500">
				<Link href="">
					<span className=" bg-emerald-800 gap-1  flex iem w-[45%}">
						<Image
							className=" object-cover w-4 h-4"
							src={academyLogo}
							alt="academy"
						/>
						<Image className=" w-24 h-4" src={academyName} alt="academy" />
					</span>
				</Link>
				<span className=" flex justify-around w-[55%]">
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
			</div>
			<div className=" w-[45%] flex bg-emerald-400 ">
				<div className="w-1/2">
					<span>
						<input
							type="text"
							placeholder="search anything"
							className="pl-4 py-2 rounded-md"
						/>
					</span>
				</div>
				<div className=" flex justify-around w-1/2">
					<div className="flex gap-1 items-center">
						<Image className="w-8 h-8" src={behzadAcademy} />
						<div className="flex flex-col">
							<span className="text-[0.5] font-bold">Behzad Pashei</span>
							<span className="text-[0.3] font-thin opacity-60 tracking-tighter -mt-2">
								Ui & Ux Designer
							</span>
						</div>
					</div>
					<span>{/* <NotificationsIcon />{" "} */}</span>
				</div>
			</div>
		</div>
	);
};

export default HeaderTop;
