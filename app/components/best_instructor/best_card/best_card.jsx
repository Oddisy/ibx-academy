"use client";
import React from "react";
import Image from "next/image";

const BestCard = ({
	index,
	imageClassName,
	cardImage,
	textContainerClassName,
	bookText,
	cardImageAlt,
	book,
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
						src={cardImage}
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
