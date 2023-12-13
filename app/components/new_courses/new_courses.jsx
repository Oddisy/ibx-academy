"use client";
import Link from "next/link";
import React from "react";
Link;
import {Card} from "../../exports";
import useBooks from "../../_api/all_books";
import {Courses} from "./object";

const NewCourses = () => {
	const {books} = useBooks();
	// Slice the books array to display items from index 1 to 8 as pertaining to the designs
	const slicedBooks = books.slice(0, 8);
	return (
		<div className=" h-[100%]  w-full pt-24 mb-8 ">
			<div className="w-full flex  flex-col md:flex-row lg:flex-row justify-between mb-4">
				<div className="w-full text-center md:text-left lg:text-left lg:w-1/2 text-black font-bold text-[0.8rem] ">
					NEWS COURSES(BOOKS)
				</div>
				<div className="w-full lg:w-1/2 flex justify-between text-[0.8rem] text-black ">
					{Courses.map((item, index) => (
						<Link href="">
							<span
								className={
									index === Courses.length - 1
										? "flex items-center justify-center h-8 p-1 w-8 rounded-md hover:bg-gray-100 "
										: "flex items-center justify-center h-8 p-1 w-auto rounded-md hover:bg-gray-100"
								}
							>
								{item.course}
							</span>
						</Link>
					))}
				</div>
			</div>
			<div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
				{slicedBooks.map((book, index) => (
					<Link
						href={`/detail_page/${book.id}`}
						className=" bg-card_background_bg border-card_border rounded-md h-28rem py-4 md:h-[25rem] lg:h-[23rem]"
					>
						<Card
							cardImage={book.cover_image}
							imageClassName="w-full object-cover rounded-md  h-44"
							book={book}
							index={index}
							titleClassName=" text-[0.9rem] font-bold text-black mt-4 w-full text-center"
							textContainerClassName="w-full h-full"
							student={book.id}
						/>
					</Link>
				))}
			</div>
		</div>
	);
};

export default NewCourses;
