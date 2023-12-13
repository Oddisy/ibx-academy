"use client";
import {useEffect, useState} from "react";

const useSingleBook = (bookId) => {
	const [books, setBooks] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`https://freetestapi.com/api/v1/books/${bookId}`,
					{
						next: {
							revalidate: 30,
						},
					}
				);
				if (!response.ok) {
					throw new Error("Failed to fetch data");
				}
				const data = await response.json();
				setBooks(data);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [bookId]);

	return {books, loading, error};
};

export default useSingleBook;
