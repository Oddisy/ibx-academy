// components
import HeaderTop from "./components/header/header_top/header_top";
import HeaderBottom from "./components/header/header_bottom/header_bottom";
import MainHeader from "./components/header/main_header/main_header";
import Footer from "./components/footer/footer";

// redux
import counterReducer from "./redux/slices/counter_slice";
import MyProvider from "./redux/provider";

export {
	HeaderTop,
	HeaderBottom,
	MainHeader,
	Footer,
	MyProvider,
	counterReducer,
};
