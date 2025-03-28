import React from "react";
import PrimaryButton from "./PrimaryButton";

const Navbar = () => {
	let logoText = "cyril</SoS>";

	return (
		<header className="sticky-top primary-bg">
			<nav className="navbar navbar-expand-md">
				<div className="container">
					<a className="navbar-brand fw-semibold d-none d-md-block" href="#">
						{logoText}
					</a>

					<button
						className="navbar-toggler p-0 border-0 shadow-none"
						type="button"
						data-bs-toggle="offcanvas"
						data-bs-target="#offcanvasNavbar"
						aria-controls="offcanvasNavbar"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div
						className="offcanvas offcanvas-start w-100"
						tabIndex="-1"
						id="offcanvasNavbar"
						aria-labelledby="offcanvasNavbarLabel"
					>
						<div className="offcanvas-header">
							<h5 className="offcanvas-title" id="offcanvasNavbarLabel">
								<a href="#" className="fw-semibold nav-link">
									{logoText}
								</a>
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="offcanvas"
								aria-label="Close"
							></button>
						</div>

						<div className="offcanvas-body d-flex justify-content-center">
							<ul className="navbar-nav gap-3 text-center w-100 justify-content-md-end align-items-center">
								<li className="nav-item">
									<a className="nav-link active fw-medium" href="#">
										about
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link fw-medium" href="#">
										projects
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="ms-4">
						<PrimaryButton dark={true} />
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
