// components
import HeaderTop from "./components/header/header_top/header_top";
import HeaderBottom from "./components/header/header_bottom/header_bottom";
import MainHeader from "./components/header/main_header/main_header";
import Footer from "./components/footer/footer";
import NavLeft from "./components/nav_bar/nav_top/nav_left/nav_left";
import NavRight from "./components/nav_bar/nav_top/nav_right/nav_right";
import UiLeft from "./components/ui_ux/ui_left/ui_left";
import UiBottom from "./components/ui_ux/ui_bottom/ui_bottom";
import Button from "./components/button/button";

// redux
import counterReducer from "./redux/slices/counter_slice";
import MyProvider from "./redux/provider";

export {
	HeaderTop,
	HeaderBottom,
	MainHeader,
	Footer,
	NavLeft,
	NavRight,
	UiLeft,
	UiBottom,
	Button,
	MyProvider,
	counterReducer,
};
