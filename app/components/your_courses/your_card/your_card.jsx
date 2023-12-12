"use client";
import React from "react";
import Image from "next/image";
import {Button} from "../../../exports";
import {IoIosArrowForward} from "react-icons/io";
import advanceIcon from "../../../assets/advanceIcon.png";
import studentIcon from "../../../assets/studentIcon.png";
import lessonIcon from "../../../assets/lessonIcon.png";
import benx from "../../../assets/behzadAcademy.png";

const CourseCard = ({
	index,
	imageClassName,
	cardImage,
	textContainerClassName,
	bookText,
	cardImageAlt,
	book,
	titleClassName,
	author,
	student,
}) => {
	return (
		<div className=" flex  flex-col md:flex-row lg:flex-row  p-[0.3rem] ">
			<div className="w-full h-full">
				<Image
					className={imageClassName}
					src={cardImage}
					alt={cardImageAlt}
					width={400}
					height={300}
				/>
			</div>
			<div className={textContainerClassName}>
				<p>{bookText}</p>
				<div className={titleClassName}>{book.title}</div>
				<div className=" font-bold opacity-50 mt-[2rem]  text-[0.9rem] text-black flex justify-between w-full">
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
				<div className="flex flex-col mt-[2rem]    w-full ">
					<div className=" ">{/* input a progress bar later  */}</div>
					<div className=" text-black bg-opacity-50 font-bold text-[0.9rem] ">
						<span className=" float-left">
							Ponits:
							{index % 3 === 1
								? "100/100"
								: index % 2 === 1
								? "50/100"
								: "25/100"}
						</span>
						<span className=" float-right">
							Days:{index % 3 === 1 ? "60" : index % 2 === 1 ? "30" : "10"}
						</span>
					</div>
					<div className=" flex items-center justify-between mt-[1.8rem]  w-full">
						<div className="flex gap-1 items-center">
							<Image className="w-8 h-8" src={benx} width={32} height={32} />
							<div className="flex flex-col text-gray-600">
								<span className="text-xs font-bold">{author}</span>
								<span className="text-xs  opacity-60 tracking-tighter -mt-1">
									{index % 3 === 1
										? "Programmer"
										: index % 2 === 1
										? "Accounting"
										: "Photographer"}
								</span>
							</div>
						</div>

						<div>
							<Button
								className="rounded-lg text-[0.9rem]  flex items-center h-10 p-2 bg-black text-white"
								arrow={<IoIosArrowForward className="ml-2" />}
								buttonText="Let's Go"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
