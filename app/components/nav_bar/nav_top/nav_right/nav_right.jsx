"use client";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
	setQuery,
	setBooks,
	setLoading,
	setError,
} from "../../../../redux/slices/book_slice";
import useDebounce from "../../../../_api/debouce_query";
import behzadAcademy from "../../../../assets/behzadAcademy.png";
import {FaBell, FaSearch} from "react-icons/fa";
import Image from "next/image";
import useBookSearch from "../../../../_api/search_books";
import Link from "next/link";

const NavRight = () => {
	const dispatch = useDispatch();
	const queryState = useSelector((state) => state.books.query);
	const bookState = useSelector((state) => state.books.books);
	const loadingState = useSelector((state) => state.books.loading);
	const errorState = useSelector((state) => state.books.error);

	const {books, loading, error, searchBooks} = useBookSearch();
	// set value from the input and set a delay time to call the api
	const debouncedQuery = useDebounce(queryState, 500);

	useEffect(() => {
		// if a value is send to the debounce and it is not empty then call the api with seacrh hook
		if (debouncedQuery.trim() !== "") {
			dispatch(setLoading(loading));
			dispatch(setBooks(books));
			dispatch(setError(error));
			// receives value from the debounce and search the server with the delay time
			searchBooks(debouncedQuery);
		}
	}, [debouncedQuery, dispatch, searchBooks]);
	// this is a function to update query state in redux store
	const handleInputChange = (e) => {
		dispatch(setQuery(e.target.value));
	};

	return (
		<div className="w-full md:w-[45%] flex">
			<div className="relative w-full md:w-1/2">
				<span className="relative">
					<input
						type="text"
						// logic to set current state which is passed to the setQueryState
						value={queryState}
						onChange={handleInputChange}
						placeholder="Search anything"
						className="pl-4 py-2 text-gray-500 bg-gray-50 rounded-lg w-full"
					/>
					<FaSearch className="cursor-pointer absolute outline-none opacity-50 -top-[1px] right-3 text:md md:text-lg lg:text-xl text-black" />
				</span>
				<ul
					className={
						queryState.trim() === ""
							? "hidden"
							: " block absolute bg-black text-gray-400 w-full h-64 text-[0.9rem] font-roboto p-2 rounded-md overflow-y-auto"
					}
				>
					{queryState.trim() !== "" &&
						bookState.map((book) => (
							<Link href={`/detail_page/${book.id}`} key={book.id}>
								<li
									className="cursor-pointer hover:bg-gray-700 w-full p-2"
									key={book.id}
								>
									{book.title}
								</li>
							</Link>
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
