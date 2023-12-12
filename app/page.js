"use client";
import {
	MainHeader,
	NewCourses,
	YourCourse,
	BestInstructor,
	UiUx,
	NewsLetter,
	TopCourses,
} from "./exports";
import useBooks from "./_api/all_books";
import "./page.css";

export default function Home() {
	const {loading, error} = useBooks();

	return (
		<div>
			{loading ? (
				<div className="bg-black max-w-full px-[0.3rem] flex items-center justify-center  sm:px-[2rem] md:px-[2.5rem] lg:px-[5rem] min-h-screen ">
					<div>
						<div className="loading-ring"></div>
						<p className="loading-text">Loading...</p>
					</div>
				</div>
			) : error ? (
				<p> {error.message}</p>
			) : (
				<div className=" bg-body_background_bg   max-w-full px-[0.3rem]  sm:px-[2rem] md:px-[2.5rem] lg:px-[5rem] h-full  ">
					<MainHeader />
					<UiUx />
					<NewCourses />
					<BestInstructor />
					<YourCourse />
					<NewsLetter />
					<TopCourses />
				</div>
			)}
		</div>
	);
}
