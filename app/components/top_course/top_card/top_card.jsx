"use client";
import React from "react";
import Image from "next/image";
import {Button} from "../../../exports";
import cardIcon from "../../../assets/cardIcon.png";
import {IoIosArrowForward} from "react-icons/io";
import advanceIcon from "../../../assets/advanceIcon.png";
import studentIcon from "../../../assets/studentIcon.png";
import lessonIcon from "../../../assets/lessonIcon.png";
import topCourses from "../../../assets/topCourses.png";
import topCourses2 from "../../../assets/topCourses2.png";
import topCourses3 from "../../../assets/topCourses3.png";
import topCourses4 from "../../../assets/topCourses4.png";

const TopCard = ({
	index,
	imageClassName,
	cardImage,
	textContainerClassName,
	bookText,
	cardImageAlt,
	bookTitle,
	titleClassName,
	student,
}) => {
	return (
		<div
			// logic to change the direction the two container in the card making it reusable

			className={
				index > 0 <= 6
					? " flex flex-col p-[0.3rem] "
					: index > 6 <= 10
					? " flex flex-row "
					: " flex flex-col "
			}
		>
			<div>
				<Image
					className={imageClassName}
					src={
						index === 1
							? topCourses
							: index === 2
							? topCourses2
							: index === 3
							? topCourses3
							: topCourses4
					}
					alt={cardImageAlt}
					width={300}
					height={300}
				/>
			</div>
			<div className={textContainerClassName}>
				<p>{bookText}</p>
				<div className={titleClassName}>{bookTitle}</div>
				<div className=" font-bold opacity-50 mt-4 text-[0.9rem] text-black flex justify-between w-full">
					{" "}
					<span className="flex items-center">
						<Image className="w-4 h-4 object-contain mr-1" src={lessonIcon} />
						lesson:
						{/* logic display lesson number */}
						{index % 3 === 1 ? "198" : index % 2 === 1 ? "98" : "50"}
					</span>
					<span className="flex items-center">
						<Image className="w-4 h-4 object-contain mr-1" src={studentIcon} />
						student:{student}
					</span>
					<span className="flex items-center">
						<Image className="w-4 h-4 object-contain mr-1" src={advanceIcon} />
						{/* LOGIC TO DISPLAY STUDENT LEVEL */}
						{index % 3 === 1
							? "Advance"
							: index % 2 === 1
							? "Average"
							: "Beginner"}
					</span>
				</div>
				<div className="flex items-center justify-between  w-full mt-24 lg:mt-8 ">
					<div>
						<Button
							className="rounded-lg text-[0.9rem]  flex items-center h-10 p-2 bg-black text-white"
							arrow={<IoIosArrowForward className="ml-2" />}
							buttonText="Start Course Now"
						/>
					</div>
					<div>
						<Image
							className=" w-24 h-[3.2rem]  -mr-12 object-contain"
							src={cardIcon}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopCard;
