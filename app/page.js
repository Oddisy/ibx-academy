import Image from "next/image";
import AllBooks from "./components/books/books";

export default function Home() {
	return (
		<div className="bg-blue-300 max-w-full min-h-screen">
			<AllBooks />
		</div>
	);
}
