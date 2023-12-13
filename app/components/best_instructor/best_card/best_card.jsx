"use client";
import React from "react";
import Image from "next/image";
import bestInstructor1 from "../../../assets/bestInstructor1.png";
import bestInstructor2 from "../../../assets/bestInstructor2.png";
import bestInstructor3 from "../../../assets/bestInstructor3.png";
import bestInstructor4 from "../../../assets/bestInstructor4.png";
import bestInstructor5 from "../../../assets/bestInstructor5.png";
import bestInstructor6 from "../../../assets/bestInstructor6.png";
const BestCard = ({
	index,
	imageClassName,
	textContainerClassName,
	bookText,
	cardImageAlt,
	authur,
}) => {
	return (
		<div
			// logic to change the direction the two container in the card making it reusable
			className={
				index > 0 <= 6
					? " flex flex-col p-[0.3rem] "
					: index > 6 <= 10
					? " flex flex-row "
					: " flex flex-col "
			}
		>
			<div>
				<div>
					<Image
						className={imageClassName}
						src={
							index === 1
								? bestInstructor1
								: index === 2
								? bestInstructor2
								: index === 3
								? bestInstructor3
								: index === 4
								? bestInstructor4
								: index === 5
								? bestInstructor5
								: bestInstructor6
						}
						alt={cardImageAlt}
						width={300}
						height={300}
					/>
				</div>
				<div className={textContainerClassName}>
					<p>{bookText}</p>
					<div className="w-full  font-semibold pt-10">
						<span className="text-left">{authur}</span>
						<span className="float-right">
							{" "}
							{index % 3 === 1
								? "Programmer"
								: index % 2 === 1
								? "Accounting"
								: "Photographer"}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BestCard;
