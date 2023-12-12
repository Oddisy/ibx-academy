"use client";
import Link from "next/link";
import React from "react";
Link;
import {BestCard} from "../../../exports";
import useBooks from "../../../_api/all_books";

const BestRight = () => {
	const {books} = useBooks();
	// Slice the books array to display items from index 1 to 8 as pertaining to the designs
	const slicedBooks = books.slice(9, 15);
	return (
		<div className=" w-[100%] h-full xl:w-[70%] pt-24  ">
			<div className="w-full  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
				{slicedBooks.map((book, index) => (
					<div className=" bg-card_background_bg border-card_border rounded-md  h-[23rem]">
						<BestCard
							cardImage={book.cover_image}
							imageClassName="w-full object-cover rounded-md  h-44"
							book={book}
							index={index}
							titleClassName=" text-[0.9rem] font-bold text-black mt-4 w-full text-center"
							textContainerClassName="w-full h-full"
							authur={book.author}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default BestRight;
