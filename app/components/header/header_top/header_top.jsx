"use client";
import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {increment} from "../../../redux/slices/counter_slice";

const HeaderTop = () => {
	const count = useSelector((state) => state.counter.valu);
	console.log(count);
	const dispatch = useDispatch();
	return (
		<div className="bg-red-300">
			HeaderTop
			<button
				className="bg-red-500 rounded-md"
				onClick={() => dispatch(increment())}
			>
				Increment
			</button>
			<span className="text-black">{count}</span>
		</div>
	);
};

export default HeaderTop;
