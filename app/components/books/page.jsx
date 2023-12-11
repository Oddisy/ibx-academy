"use client";
import React from "react";
import "./books.css";
// import useBooks from "@/app/api/all_books";
import {useGetBooksQuery} from "../../api/api";

const AllBooks = () => {
	// const {books, loading, error} = useBooks();
	const {data, isError, isLoading} = useGetBooksQuery();
	console.log(data);

	return (
		<div>
			{isLoading ? (
				<div
					className={`italic absolute top-0 h-[100vh] w-[100%] flex items-center justify-center text-white bg-opacity-1 z-50 ${
						data ? "bg-black" : ""
					}`}
				>
					<div>
						<div className="loading-ring"></div>
						<p className="loading-text">Loading...</p>
					</div>
				</div>
			) : isError ? (
				<p> {isError.message}</p>
			) : (
				<div>
					<h1>All Books</h1>
					<ul>
						{data?.map((book) => (
							<li key={data.id}>
								<h3>{data.title}</h3>
								<p>Author: {data.author}</p>
								<p>Genre: {data.genre}</p>
								{/* Add more details to display */}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default AllBooks;
