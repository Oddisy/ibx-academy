import {configureStore} from "@reduxjs/toolkit";
import {counterReducer} from "../exports";
import menuReducer from "./slices/menu_slice";
import bookReducer from "./slices/book_slice";

export const store = configureStore({
	reducer: {
		// counter: counterReducer,
		menu: menuReducer,
		books: bookReducer,
	},
});
