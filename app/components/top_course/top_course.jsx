"use client";
import Link from "next/link";
import React from "react";
Link;
import {TopCard} from "../../exports";
import useBooks from "../../_api/all_books";
import {IoIosArrowForward} from "react-icons/io";
import {IoIosArrowBack} from "react-icons/io";

const TopCourses = () => {
	const {books} = useBooks();
	// Slice the books array to display items from index 1 to 8 as pertaining to the designs
	const slicedBooks = books.slice(0, 4);
	return (
		<div className=" h-[100%]  w-full pt-24 mb-8 ">
			<div className="w-full  text-black font-bold flex   justify-between mb-4">
				<span> TOP COURSES</span>
				<Link href="">
					<span className="flex text-[0.8rem] hover:opacity-70 items-center justify-center   ">
						<span className="text-2xl h-8 p-1 w-auto rounded-md hover:bg-gray-100">
							<IoIosArrowBack />
						</span>
						<span className="text-2xl h-8 p-1 w-auto rounded-md hover:bg-gray-100">
							<IoIosArrowForward />
						</span>
					</span>
				</Link>
			</div>
			<div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
				{slicedBooks.map((book, index) => (
					<div className=" bg-card_background_bg border-card_border rounded-md h-28rem py-4 md:h-[25rem] lg:h-[23rem]">
						<TopCard
							cardImage={book.cover_image}
							imageClassName="w-full object-cover rounded-md  h-44"
							book={book}
							index={index}
							titleClassName=" text-[0.9rem] font-bold text-black mt-4 w-full text-center"
							textContainerClassName="w-full h-full"
							student={book.id}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default TopCourses;
