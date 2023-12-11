import {configureStore} from "@reduxjs/toolkit";
import {counterReducer} from "../exports";
import menuReducer from "../redux/slices/menuSlice";

export const store = configureStore({
	reducer: {
		// counter: counterReducer,
		menu: menuReducer,
	},
});
