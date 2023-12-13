"use client";
import React, {useState, useEffect} from "react";

import behzadAcademy from "../../../../assets/behzadAcademy.png";
// icons
import {FaBell, FaSearch} from "react-icons/fa";
import Image from "next/image";
import useBookSearch from "../../../../_api/search_books";

const NavRight = () => {
	// logic for search query
	const [query, setQuery] = useState("");
	const {books, loading, error, searchBooks} = useBookSearch();
	// const handleSearch = () => {
	// 	searchBooks(query);
	// };
	useEffect(() => {
		const delaySearch = setTimeout(() => {
			if (query.trim() !== "") {
				searchBooks(query);
			}
		}, 500); // Adjust debounce delay time (in milliseconds) as needed

		return () => clearTimeout(delaySearch);
	}, [query, searchBooks]);

	return (
		<div className="w-full md:w-[45%] flex ">
			<div className=" relative w-full md:w-1/2">
				<span className="relative">
					<input
						type="text"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						placeholder="Search by name or title"
						className="pl-4 py-2 text-gray-500 bg-gray-50 rounded-lg w-full"
					/>
					<FaSearch
						// onClick={handleSearch}
						className=" cursor-pointer absolute outline-none opacity-50 -top-[1px] right-3 text-xl text-black"
					/>
				</span>
				<ul className="absolute bg-black text-white w-full h-44">
					{books.map((book) => (
						<li key={book.id}>{book.title}</li>
					))}
				</ul>
			</div>
			<div className="flex justify-around w-full md:w-1/2 items-center">
				<div className="flex gap-1 items-center">
					<Image
						className="w-8 h-8"
						src={behzadAcademy}
						width={32}
						height={32}
					/>
					<div className="flex flex-col text-gray-600">
						<span className="text-xs font-bold">Behzad Pashei</span>
						<span className="text-xs  opacity-60 tracking-tighter -mt-1">
							Ui & Ux Designer
						</span>
					</div>
				</div>
				<span className="flex items-center justify-center h-8 w-8 rounded-md hover:bg-gray-100 bg-opacity-50 text-purple-600">
					<FaBell />
				</span>
			</div>
		</div>
	);
};

export default NavRight;
