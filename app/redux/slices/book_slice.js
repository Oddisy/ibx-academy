import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	dark: false,
};

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		changeTheme: (state, action) => {
			state.dark = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const {increment} = counterSlice.actions;

export default counterSlice.reducer;
