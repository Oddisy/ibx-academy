import Image from "next/image";
import React from "react";
import {Button} from "../../../exports";
import {FaSearch} from "react-icons/fa";
import arrowAcademy from "../../../assets/arrowAcademy.png";
import academyLogo from "../../../assets/academyLogo.png";
import academyName from "../../../assets/academyName.png";
import Link from "next/link";

const FooterBottom = () => {
	return (
		<div className="text-black flex justify-between text-[0.7rem]  w-full ">
			<div className="w-[70%] bg-newletter_bg p-4 rounded-r-2xl ">
				Privacy Policy|Terms%Condition
			</div>
			<span className=" text-gray-400   ">
				<p>copy right</p>
			</span>
		</div>
	);
};

export default FooterBottom;
