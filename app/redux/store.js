import {configureStore} from "@reduxjs/toolkit";
import {menuReducer, counterReducer} from "../exports";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		menu: menuReducer,
	},
});
