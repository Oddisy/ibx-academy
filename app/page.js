"use client";
import {Image} from "next/image";
// import AllBooks from "./components/books/books";
import {MainHeader} from "./exports";

export default function Home() {
	return (
		<div className=" bg-body_background_bg max-w-full  sm:px-[2rem] md:px-[2.5rem] lg:px-[5rem] min-h-screen">
			<MainHeader />
			{/* <AllBooks /> */}
		</div>
	);
}
