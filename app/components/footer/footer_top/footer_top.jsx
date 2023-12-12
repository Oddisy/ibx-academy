import Image from "next/image";
import React from "react";
import {Button} from "../../../exports";
import {FaSearch} from "react-icons/fa";
import arrowAcademy from "../../../assets/arrowAcademy.png";
import academyLogo from "../../../assets/academyLogo.png";
import academyName from "../../../assets/academyName.png";
import Link from "next/link";

const FooterTop = () => {
	return (
		<div className="text-black flex mb-4 justify-between  w-full ">
			<div className="text-sm md:text-md w-[70%] bg-newletter_bg p-4 rounded-r-2xl ">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque laborum
				ipsam delectus et quod ab similique, voluptatem eos labore praesentium
				odio, neque alias quibusdam obcaecati deserunt sit doloremque dolor,
				repellendus soluta? Blanditiis sit ad dignissimos, sunt dolore explicabo
				ullam nesciunt? Lorem ipsum dolor sit amet, consectetur adipisicing
				elit. Dicta nisi iste earum aspernatur nemo. Perferendis, quaerat sint
				cum, optio accusantium voluptatibus, eaque cumque dolor corrupti
				eligendi ea cupiditate vero porro.
			</div>
			<Link href="">
				<span className="flex flex-col items-center gap-1 w-[45%]  md:w-auto">
					<Image
						className="object-contain w-24 h-16"
						src={academyLogo}
						alt="academy"
						width={20}
						height={20}
					/>
					<Image
						className="w-24 h-8"
						src={academyName}
						alt="academy"
						width={96}
						height={20}
					/>
				</span>
			</Link>
		</div>
	);
};

export default FooterTop;
