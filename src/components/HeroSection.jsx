import React, { useState, useEffect } from "react";

const HeroSection = () => {
	const professions = ["UX/UI Designer", "Product Designer"];
	const [currentProfessionIndex, setCurrentProfessionIndex] = useState(0);
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			setVisible(false); // start fade out

			setTimeout(() => {
				setCurrentProfessionIndex(
					(prevIndex) => (prevIndex + 1) % professions.length
				);
				setVisible(true); // start fade in
			}, 500); // match transition duration
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	return (
		<section>
			<div className="container">
				<div className="py-4">
					<div className="row align-items-center justify-content-center justify-content-xl-between g-4">
						<div className="col-lg-7 col-xxl-6">
							<h2 className="display-3 fw-medium">Hello</h2>
							<h2 className="display-3 fw-medium">I’m Cyril Cherian,</h2>
							<h2
								className={`display-3 fw-medium profession-text ${
									visible ? "show" : ""
								}`}
							>
								{professions[currentProfessionIndex]}
							</h2>
							<div className="water-mark mt-5 pt-xl-4">
								<img
									src="/images/sos-watermark.png"
									className="w-100"
									alt="watermark"
								/>
							</div>
						</div>
						<div className="col-10 col-md-6 col-lg-5">
							<div>
								<img
									src="/images/hero-bg.png"
									className="img-fluid"
									alt="picture of cyril cheriyan"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
