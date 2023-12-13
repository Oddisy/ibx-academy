"use client";
import Link from "next/link";
import React from "react";
import useBooks from "../../_api/all_books";
import {CourseCard} from "../../exports";

const YourCourse = () => {
	const {books} = useBooks();
	// Slice the books array to display items from index 1 to 8 as pertaining to the designs
	const slicedBooks = books.slice(16, 20);
	return (
		<div className=" h-[100%]  w-full pt-24 mb-8 ">
			<div className="w-full  text-black font-bold flex   justify-between mb-4">
				<span> YOUR COURSES</span>
				<Link href="">
					<span className="flex text-[0.8rem] hover:opacity-70 items-center justify-center h-8 p-1 w-auto rounded-md hover:bg-gray-100 ">
						See All
					</span>
				</Link>
			</div>
			<div className="w-full mx-auto grid grid-cols-1    lg:grid-cols-2 xl:grid-cols-2 gap-10">
				{slicedBooks.map((book, index) => (
					<div
						key={book.id}
						className="  border-course_bg rounded-md h-[28rem] sm:h-[14rem]"
					>
						<CourseCard
							cardImage={book.cover_image}
							imageClassName="w-full bg-red-500 object-cover rounded-md h-[13.3rem]"
							book={book}
							index={index}
							titleClassName=" text-[0.9rem] font-bold text-black  w-full text-left"
							textContainerClassName="w-full flex flex-col  py-2 rounded-b-md   px-2 h-[13.3rem]"
							student={book.id}
							author={book.author}
							cardImageAlt="image"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default YourCourse;
