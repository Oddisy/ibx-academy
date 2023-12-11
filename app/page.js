"use client";
import {Image} from "next/image";
// import AllBooks from "./components/books/books";
import {MainHeader} from "./exports";

export default function Home() {
	return (
		<div className="bg-blue-300 max-w-full px-[6rem] min-h-screen">
			<MainHeader />
			{/* <AllBooks /> */}
		</div>
	);
}
