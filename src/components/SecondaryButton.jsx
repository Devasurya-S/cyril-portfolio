import React from "react";
import arrowIcon from "../assets/mail-icon.svg"

const SecondaryButton = () => {
    return <button className="rounded-2 btn-type-2 py-2 px-4 fs-6 fw-medium d-flex align-items-center gap-2"><span><img src={arrowIcon} alt="arrow pointing to right" /></span>Write an Email</button>;
};

export default SecondaryButton;
