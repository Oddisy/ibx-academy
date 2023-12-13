import {useState, useEffect} from "react";

const searchBooks = (query) => {
	setLoading(true);
	setError(null);

	const searchUrl = `${apiUrl}?search=${query}`;

	fetch(searchUrl, {
		method: "GET",
		headers: {
			"Cache-Control": "no-store",
			Pragma: "no-cache",
		},
	})
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
