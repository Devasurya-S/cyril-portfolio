import React from "react";

const socials = [
	{
		name: "Behance",
		url: "images/behance-icon.svg",
	},
	{
		name: "LinkedIn",
		url: "images/linkedin-icon.svg",
	},
	{
		name: "Instagram",
		url: "images/insta-icon.svg",
	},
];

const SocialLinks = () => {
	return (
		<>
			{socials.map((social, index) => (
				<a key={index} className="nav-link">
					<span className="d-flex align-items-center gap-2 fw-medium">
						<img
							src={social.url}
							className="footer-social-icon"
							alt={`icon of ${social.name}`}
						/>
						<span className="d-none d-sm-inline">{social.name}</span>
					</span>
				</a>
			))}
		</>
	);
};

export default SocialLinks;
