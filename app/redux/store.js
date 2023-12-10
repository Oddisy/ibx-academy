import {configureStore} from "@reduxjs/toolkit";
// import counterReducer from "../exports";
import counterReducer from "../redux/slices/counter_slice";

export const store = configureStore({
	reducer: {counter: counterReducer},
});
