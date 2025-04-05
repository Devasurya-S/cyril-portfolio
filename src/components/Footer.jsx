import React from "react";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import SocialLinks from "./SocialLinks";

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className="py-4">
					<div className="row justify-content-between g-4 g-lg-5">
						<div className="col-lg-5">
							<h2 className="display-2 fw-medium mb-4">Let’s Work Together.</h2>
							<p className="fw-regular mb-5">
								Feel free to reach out for collaborations or just a friendly
								hello! I’d love to hear from you!
							</p>
							<div className="d-flex flex-wrap gap-3 justify-content-between">
								<SecondaryButton />
								<PrimaryButton dark={false}/>
							</div>
						</div>
						<div className="col-lg-6 col-xxl-5">
							<div className="bg-white rounded-4 p-5">
								<nav className="d-flex flex-column gap-3 mb-5">
									<a className="nav-link fs-4 fw-medium active" href="#">
										Home
									</a>
									<a className="nav-link fs-4 fw-medium" href="#">
										About
									</a>
									<a className="nav-link fs-4 fw-medium" href="#">
										Projects
									</a>
								</nav>
								<div className="d-flex gap-2 flex-wrap justify-content-between">
									<SocialLinks />
								</div>
							</div>
						</div>
					</div>
                    <p className="text-center mt-4 mt-lg-5">© {"</SoS>"}. 2025. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
