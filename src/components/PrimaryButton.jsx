import React from "react";
import arrowIcon from "../assets/arrow-icon.svg";
import arrowIconBlack from "../assets/arrow-icon-black.svg";
import clsx from "clsx";

const PrimaryButton = (props) => {
	const { dark } = props;
	const btnStyle = clsx("cstm-btn rounded-2 py-2 px-4 fs-6 fw-medium d-flex align-items-center gap-2", {
		"btn-type-3": !dark,
	});
	return (
		<button className={btnStyle}>
			Get in touch
			<span>
				<img
					src={dark ? arrowIcon : arrowIconBlack}
					alt="arrow pointing to right"
				/>
			</span>
		</button>
	);
};

export default PrimaryButton;
