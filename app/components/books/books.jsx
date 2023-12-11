"use client";
import React from "react";
import "./books.css";
import useBooks from "@/app/_api/all_books";

const AllBooks = () => {
	const {books, loading, error} = useBooks();

	return (
		<div>
			{loading ? (
				<div
					className={`italic absolute top-0 h-[100vh] w-[100%] flex items-center justify-center text-white bg-opacity-1 z-50 ${
						books ? "bg-black" : ""
					}`}
				>
					<div>
						<div className="loading-ring"></div>
						<p className="loading-text">Loading...</p>
					</div>
				</div>
			) : error ? (
				<p> {error.message}</p>
			) : (
				<div>
					<h1>All Books</h1>
					<ul>
						{books?.map((book) => (
							<li key={book.id}>
								<h3>{book.title}</h3>
								<p>Author: {book.author}</p>
								<p>Genre: {book.genre}</p>
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
