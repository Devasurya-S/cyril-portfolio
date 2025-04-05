import React, { useState, useEffect } from "react";

const HeroSection = () => {
	const professions = ["UX/UI Designer", "Product Designer"];
	const [currentProfessionIndex, setCurrentProfessionIndex] = useState(0);
	const [key, setKey] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentProfessionIndex(
				(prevIndex) => (prevIndex + 1) % professions.length
			);
			setKey((prevKey) => prevKey + 1); // Update key to restart animation
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
							<h2 key={key} className="display-3 fw-medium profession-text">
								{professions[currentProfessionIndex]}
							</h2>
						</div>
						<div className="col-10 col-md-6 col-lg-5">
							<div>
								<img
									src="/images/hero-bg.png"
									className="img-fluid"
									alt="picture of cyril cheriyan"
								/>
							</div>
							{/* <div>
								<div className="d-flex justify-content-start align-items-center gap-5">
									<div className="square">
										<img
											src="/images/square.svg"
											className="img-fluid"
											alt="picture of a square"
										/>
									</div>
									<div className="circle">
										<img
											src="/images/circle.svg"
											className="img-fluid"
											alt="picture of a square"
										/>
									</div>
								</div>
								<div className="semicircle mt-3 position-relative">
									<img
										src="/images/semicircle.svg"
										className="img-fluid"
										alt="picture of a square"
									/>
									<div className="position-absolute bottom-0 start-50 translate-middle-x border">
										<img
											src="/images/profile-pic.png"
											className="w-100"
											alt="picture of cyril cherian"
										/>
									</div>
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
