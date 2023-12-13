"use client";
import React from "react";
import useSingleBook from "../../_api/single_book";
import {Button} from "../../exports";
import {IoIosArrowForward} from "react-icons/io";
import advanceIcon from "../../assets/studentIcon.png";
import studentIcon from "../../assets/studentIcon.png";
import lessonIcon from "../../assets/lessonIcon.png";
import yourCourse1 from "../../assets/yourCourses1.png";
import yourCourse2 from "../../assets/yourCourses2.png";
import yourCourse3 from "../../assets/yourCourses3.png";
import yourCourse4 from "../../assets/yourCourses4.png";
import Image from "next/image";

const DetailPage = ({params}) => {
	const bookId = params.id;

	const book = useSingleBook(bookId);

	return (
		<div className="bg-black bg-opacity-90 h-screen flex items-center justify-center">
			<div className=" w-[90%] md:w-[70%] lg:w-[60%] h-[85%] md:h-[65%] lg:h-[44%] bg-white bg-opacity-70 rounded-2xl">
				<div className=" flex  flex-col md:flex-row lg:flex-row  p-[1rem] ">
					<div className="w-full h-full">
						<Image
							className="w-full  object-cover rounded-md h-full"
							src={
								bookId % 3 === 0
									? yourCourse1
									: bookId % 2 === 0
									? yourCourse2
									: bookId % 4 === 0
									? yourCourse3 % 4 === 1
									: yourCourse4
							}
							alt="IMAGE"
							width={400}
							height={300}
						/>
					</div>
					<div className="w-full flex flex-col  py-2 rounded-b-md   px-2 h-[13.3rem]">
						<div className="w-ful text-black font-bold">{book.books.title}</div>
						<div className=" text-[2rem] font-bold text-black   w-full text-left">
							{book.title}
						</div>
						<div className=" font-bold opacity-50 mt-[2rem]  text-[0.9rem] text-black flex justify-between w-full">
							{" "}
							<span className="flex items-center">
								<Image
									alt="image"
									className="w-4 h-4 object-contain mr-1"
									src={lessonIcon}
								/>
								lesson:
								{/* logic display lesson number */}
								{bookId % 3 === 1 ? "198" : bookId % 2 === 1 ? "98" : "50"}
							</span>
							<span className="flex items-center">
								<Image
									alt="image"
									className="w-4 h-4 object-contain mr-1"
									src={studentIcon}
								/>
								student:{book.books.title}
							</span>
							<span className="flex items-center">
								<Image
									alt="image"
									className="w-4 h-4 object-contain mr-1"
									src={advanceIcon}
								/>
								{/* LOGIC TO DISPLAY STUDENT LEVEL */}
								{bookId % 3 === 1
									? "Advance"
									: bookId % 2 === 1
									? "Average"
									: "Beginner"}
							</span>
						</div>
						<div className="flex flex-col mt-[2rem]    w-full ">
							<div className=" ">{/* input a progress bar later  */}</div>
							<div className=" text-black bg-opacity-50 font-bold text-[0.9rem] ">
								<span className=" float-left">
									Ponits:
									{bookId % 3 === 1
										? "100/100"
										: bookId % 2 === 1
										? "50/100"
										: "25/100"}
								</span>
								<span className=" float-right">
									Days:
									{bookId % 3 === 1 ? "60" : bookId % 2 === 1 ? "30" : "10"}
								</span>
							</div>
							<div className=" flex items-center justify-between mt-[1.8rem]  w-full">
								<div className="flex gap-1 items-center">
									<Image
										alt="image"
										className="w-20 h-16 object-cover"
										src={
											bookId % 3 === 0
												? yourCourse1
												: bookId % 2 === 0
												? yourCourse2
												: bookId % 4 === 0
												? yourCourse3 % 4 === 1
												: yourCourse4
										}
									/>
									<div className="flex flex-col text-gray-600">
										<span className="text-xs font-bold">
											{book.books.author}
										</span>
										<span className="text-sm lg:text-lg  opacity-90 tracking-tighter -mt-1">
											{bookId % 3 === 1
												? "Programmer"
												: bookId % 2 === 1
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
			</div>
		</div>
	);
};

export default DetailPage;
