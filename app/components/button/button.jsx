import React from "react";

const Button = ({buttonText, className, arrow}) => {
	return (
		<button className={className}>
			{buttonText}
			<span>{arrow}</span>
		</button>
	);
};

export default Button;
