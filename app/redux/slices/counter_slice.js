import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	valu: 0,
};

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {
			state.valu += 1;
		},
	},
});

// Action creators are generated for each case reducer function
export const {increment} = counterSlice.actions;

export default counterSlice.reducer;
