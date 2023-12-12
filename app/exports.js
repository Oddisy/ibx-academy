// components
import HeaderTop from "./components/header/header_top/header_top";
import HeaderBottom from "./components/header/header_bottom/header_bottom";
import MainHeader from "./components/header/main_header/main_header";
import NavLeft from "./components/nav_bar/nav_top/nav_left/nav_left";
import NavRight from "./components/nav_bar/nav_top/nav_right/nav_right";
import Button from "./components/button/button";

// Ui section
import UiLeft from "./components/ui_ux/ui_left/ui_left";
import UiBottom from "./components/ui_ux/ui_bottom/ui_bottom";
import UiUx from "./components/ui_ux/ui_ux";

// newcourses section
import NewCourses from "./components/new_courses/new_courses";
import Card from "./components/new_courses/card/card";

// Best Instructor
import BestCard from "./components/best_instructor/best_card/best_card";
import BestInstructor from "./components/best_instructor/best_instructor";
import BestLeft from "./components/best_instructor/best_left/best_left";
import BestRight from "./components/best_instructor/best_right/best_right";

// your course
import YourCourse from "./components/your_courses/your_course";
import CourseCard from "./components/your_courses/your_card/your_card";

// News letter
import NewsLetter from "./components/news_letter/news_letter";

// Top course
import TopCourses from "./components/top_course/top_course";
import TopCard from "./components/top_course/top_card/top_card";

// Footer
import Footer from "./components/footer/footer";
import FooterBottom from "./components/footer/footer_bottom/footer_bottom";
import FooterTop from "./components/footer/footer_top/footer_top";
import FooterMiddle from "./components/footer/footer_middle/footer_middle";

// redux
import counterReducer from "./redux/slices/counter_slice";
import MyProvider from "./redux/provider";

export {
	HeaderTop,
	HeaderBottom,
	MainHeader,
	NavLeft,
	NavRight,
	UiLeft,
	UiUx,
	UiBottom,
	Button,
	Card,
	MyProvider,
	counterReducer,
	NewCourses,
	BestCard,
	BestLeft,
	BestInstructor,
	BestRight,
	YourCourse,
	CourseCard,
	NewsLetter,
	TopCard,
	TopCourses,
	Footer,
	FooterBottom,
	FooterTop,
	FooterMiddle,
};
