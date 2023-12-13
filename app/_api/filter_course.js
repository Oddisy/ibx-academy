import {useState, useEffect} from "react";

const useFltereredBooks = (sortField = "name", sortOrder = "asc") => {
	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`https://freetestapi.com/api/v1/books?sort=${sortField}&order=${sortOrder}`
				);
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data = await response.json();
				setBooks(data);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching data:", error);
				setLoading(false);
			}
		};

		fetchData();
	}, [sortField, sortOrder]);

	return {books, loading};
};

export default useFltereredBooks;
