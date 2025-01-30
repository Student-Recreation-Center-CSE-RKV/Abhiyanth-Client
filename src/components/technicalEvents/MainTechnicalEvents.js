import React from "react";
import { Container, Typography } from "@mui/material";
import cse from "../../assets/images/departments/cse.jpg";
import ece from "../../assets/images/departments/ece.jpeg";
import eee from "../../assets/images/departments/eee.jpg";
import civil from "../../assets/images/departments/civil.jpg";
import chemical from "../../assets/images/departments/chemical.jpg";
import mme from "../../assets/images/departments/mme.jpg";
import mechanical from "../../assets/images/departments/mechanical.jpg";
import "../../styles/technicalevents.css";
const events = [
	{
		title: "Hackathon",
		image: cse,
		description: "Showcase your coding skills in a 24-hour challenge!",
	},
	{
		title: "AI Challenge",
		image: ece,
		description: "Solve real-world problems using artificial intelligence.",
	},
	{
		title: "Cyber Security",
		image: eee,
		description: "Test your skills in ethical hacking and defense.",
	},
	{
		title: "Robotics",
		image: civil,
		description: "Design and build autonomous robots to complete tasks.",
	},
	{
		title: "App Development",
		image: mechanical,
		description: "Develop innovative mobile and web applications.",
	},
	{
		title: "Blockchain",
		image: chemical,
		description: "Explore the potential of decentralized applications.",
	},
	{
		title: "IoT Challenge",
		image: mme,
		description: "Create smart solutions using IoT devices.",
	},
];

const TechnicalEventsPage = () => {
	return (
		<Container
			maxWidth="lg"
			style={{ padding: "80px 10px", textAlign: "center" }}
		>
			<Typography
				variant="h3"
				gutterBottom
				sx={{
					fontWeight: "700",
					color: "white",
					fontSize: {
						xs: "2rem",
						sm: "2.5rem",
						md: "3rem",
						lg: "3.5rem",
						xl: "4rem",
					},
					fontFamily: "Audiowide",
				}}
			>
				Main Technical Events
			</Typography>
			<Typography
				variant="h6"
				paragraph
				sx={{ color: "#e1eced", fontFamily: "Averia Sans Libre" }}
			>
				Welcome to the Main Technical Events of our college! These events are
				designed to showcase the best of technology and innovation across
				various disciplines. Each department presents a unique technical event,
				offering a platform for students to demonstrate their skills,
				creativity, and expertise.
			</Typography>
			<div className="tech-main" style={{ marginTop: "2rem" }}>
				<div className="tech-cards-container" style={{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",gap:"20px"}}>
					{events.map((event, index) => (
						<div key={index} className="tech-card">
							<img
								src={event.image}
								alt={event.title}
								className="tech-card-image"
							/>
							<h2 className="tech-card-title">{event.title}</h2>
							<p className="tech-card-description">{event.description}</p>
							<button
								className="tech-view-events-button"
								// onClick={() => {
								// 	navigate(`/technicalEvents/${dept.name}`);
								// }}
							>
								See More
							</button>
						</div>
					))}
				</div>
			</div>
		</Container>
	);
};

export default TechnicalEventsPage;
