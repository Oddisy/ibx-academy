// booksSlice.js
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	query: "",
	books: [],
	loading: false,
	error: null,
};

const booksSlice = createSlice({
	name: "books",
	initialState,
	reducers: {
		setQuery: (state, action) => {
			state.query = action.payload;
		},
		setBooks: (state, action) => {
			state.books = action.payload;
		},
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
		setError: (state, action) => {
			state.error = action.payload;
		},
	},
});

export const {setQuery, setBooks, setLoading, setError} = booksSlice.actions;
export default booksSlice.reducer;
