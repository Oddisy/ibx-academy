"use client";
import React from "react";
import {FooterBottom, FooterMiddle, FooterTop} from "../../exports";

const Footer = () => {
	return (
		<div className="w-94rem h-50rem bg-course_bg  rounded-t-2.5rem">
			<FooterTop />
			<FooterMiddle />
			<FooterBottom />
		</div>
	);
};

export default Footer;
//flex-shrink-0
