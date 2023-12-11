"use client";
import Image from "next/image";
import React from "react";
import "./header_top.css";

import {NavLeft} from "../../../exports";
import {NavRight} from "../../../exports";

const HeaderTop = () => {
	return (
		<div className="flex flex-col md:flex-row items-center justify-between w-full h-[6rem]  gap-4 md:gap-12.375">
			<NavLeft />
			<NavRight />
		</div>
	);
};

export default HeaderTop;
