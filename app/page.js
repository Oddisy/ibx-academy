"use client";
import {Image} from "next/image";
// import AllBooks from "./components/books/books";
import {MainHeader} from "./exports";
import UiUx from "./components/ui_ux/ui_ux";

export default function Home() {
	return (
		<div className=" bg-body_background_bg max-w-full px-[0.3rem]  sm:px-[2rem] md:px-[2.5rem] lg:px-[5rem] min-h-[50rem] ">
			<MainHeader />
			<UiUx />

			{/* <AllBooks /> */}
		</div>
	);
}
