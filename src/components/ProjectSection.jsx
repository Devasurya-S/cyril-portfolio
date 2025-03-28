import React from "react";
import arrowIcon from "../assets/arrow-icon-black.svg";
import clsx from "clsx";

const ProjectSection = () => {
	const selectedProjects = [
		{
			title: "Product Design for Smartester",
			description:
				"Built and scaled a no-code test automation platform from scratch.",
			textWhite: false,
			url: "/images/project-1.png",
		},
		{
			title: "Design System for Smartester",
			description:
				"How I created a scalable, responsive design system that reduced development costs by thousands.",
			textWhite: true,
			url: "/images/project-2.png",
		},
		{
			title: "Tata Power EZ Charge",
			description:
				"Web and Mobile App for Locating EV Charging Stations for Consumers and Professionals.",
			textWhite: true,
			url: "/images/project-3.png",
		},
		{
			title: "Donate Life: Blood Donor App - Case Study",
			description: "Designing a Seamless Booking & Admin Experience in 5 Days",
			textWhite: true,
			url: "/images/project-4.png",
		},
	];

	const projectCardRender = () => {
		const projectCard = selectedProjects.map((project, index) => {
			const projectCardClass = clsx("rounded-3 project-card p-4", {
				"text-white": project.textWhite,
			});
			return (
				<div key={index} className="col-lg-6 z-3">
					<a href="#" className="nav-link">
						<div
							className={projectCardClass}
							style={{ backgroundImage: `url(${project.url})` }}
						>
							<div className="position-absolute top-0 start-0 m-4">
								<h3 className="mb-3 fs-4 fw-semibold">{project.title}</h3>
								<p className="fw-light fs-6">{project.description}</p>
							</div>
						</div>
					</a>
				</div>
			);
		});
		return projectCard;
	};

	return (
		<section>
			<div className="container">
				<div className="py-4">
					<div className="d-flex justify-content-between align-items-center mb-4">
						<h2 className="mb-0">Selected projects</h2>
						<a href="#" className="arrowAnimation">
							<img src={arrowIcon} className="img-fluid" alt="arrow icon" />
						</a>
					</div>
					<div className="row g-4">{projectCardRender()}</div>
				</div>
			</div>
		</section>
	);
};

export default ProjectSection;
