import React, { useState, useRef, useEffect } from "react";
import PrimaryButton from "./PrimaryButton";
import SocialLinks from "./SocialLinks";

const Navbar = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const mobileMenuRef = useRef(null);

	const toggleMenu = () => {
		setShowMobileMenu((prev) => !prev);
	};

	// Close when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				mobileMenuRef.current &&
				!mobileMenuRef.current.contains(event.target)
			) {
				setShowMobileMenu(false);
			}
		};

		if (showMobileMenu) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [showMobileMenu]);

	return (
		<header className="sticky-top primary-bg py-3">
			<nav className="navbar navbar-expand-md">
				<div className="container position-relative">
					<a className="navbar-brand fw-semibold d-none d-md-block" href="#">
						<img src="/images/logo.png" className="site-logo" alt="site logo" />
					</a>

					<button
						className="navbar-toggler p-0 border-0 shadow-none"
						type="button"
						onClick={toggleMenu}
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					{/* Mobile popup menu */}
					{showMobileMenu && (
						<div
							ref={mobileMenuRef}
							className="position-absolute top-0 start-0 ms-3 rounded-3 w-auto bg-white shadow py-3 d-md-none"
							style={{ zIndex: 1050 }}
						>
							<ul className="mobile-menu navbar-nav px-5 py-2">
								<li className="nav-item">
									<a
										className="nav-link active fs-4 fw-medium"
										href="#"
										onClick={toggleMenu}
									>
										Home
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link fs-4 fw-medium"
										href="#"
										onClick={toggleMenu}
									>
										About
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link fs-4 fw-medium"
										href="#"
										onClick={toggleMenu}
									>
										Projects
									</a>
								</li>
								<li className="d-flex justify-content-between align-items-center gap-4 mt-3">
									<SocialLinks />
								</li>
							</ul>
						</div>
					)}

					{/* Desktop menu */}
					<div className="collapse navbar-collapse justify-content-md-end d-none d-md-flex">
						<ul className="navbar-nav gap-3 text-center w-100 justify-content-md-end align-items-center">
							<li className="nav-item">
								<a className="nav-link fw-medium" href="#">
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

					<div className="ms-4">
						<PrimaryButton dark={true} />
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
