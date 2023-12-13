import {useState, useEffect} from "react";

const useBookSearch = () => {
	const apiUrl = "https://freetestapi.com/api/v1/books";
	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const searchBooks = (query) => {
		setLoading(true);
		setError(null);

		const searchUrl = `${apiUrl}?search=${query}`;

		fetch(searchUrl)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok.");
				}
				return response.json();
			})
			.then((data) => {
				setBooks(data);
				setLoading(false);
			})
			.catch((error) => {
				setError(error);
				setLoading(false);
			});
	};

	return {books, loading, error, searchBooks};
};

export default useBookSearch;
