import React from "react";
import "../../styles/sponsers.css";

export default function Sponsers() {
	const topSponsors = ["Nyra", "VISWA", "Dalmia", "SBI"];
	const bottomSponsors = ["Acer", "ACE", "omnytrix", "CGR", "twenty19"];

	return (
		<div className="container">
			<div className="top-container">
				<div className="navbar-container">
					<div className="navbar">
						{topSponsors.concat(topSponsors).map((sponsor, index) => (
							<div
								className={`navbar-item ${index >= topSponsors.length ? "clone" : ""}`}
								key={index}
							>
								{sponsor}
							</div>
						))}
					</div>
				</div>
				<p className="main-heading">Sponsors</p>
				<div className="navbar-container1">
					<div className="navbar1">
						{bottomSponsors.concat(bottomSponsors).map((sponsor, index) => (
							<div
								className={`navbar-item ${index >= bottomSponsors.length ? "clone" : ""}`}
								key={index}
							>
								{sponsor}
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="bottom-container">
				<h2 className="left-heading">
					WHEN WE CELEBRATE ABHIYANTH?
					<img
						src="images/image40g.png"
						alt="abhiyanthImage"
						className="image1"
					/>
				</h2>
				<div className="content-container">
					<div className="left-para">
						Abhiyanth takes place every spring, transforming our university into a vibrant hub of innovation and creativity. From hackathons to cultural showcases, this event fosters connections among tech enthusiasts, performers, and innovators. Abhiyanth 2024 promises an exhilarating experience, offering something for everyone.
						<img
							src="images/image2.png"
							alt="abhiyanthImage"
							className="image2"
						/>
					</div>
					<div className="right-para">
						Abhiyanth is not just a celebration but a platform that encourages collaboration, learning, and growth. It provides students with opportunities to showcase their talents, network with like-minded individuals, and explore the intersection of technology and art. Join us in celebrating this unique blend of culture and innovation.
					</div>
				</div>
				<div style={{ textAlign: "right" }}>
					<h2 className="right-heading">
						WHY WE CELEBRATE <br /> ABHIYANTH?
					</h2>
				</div>
			</div>
		</div>
	);
}
