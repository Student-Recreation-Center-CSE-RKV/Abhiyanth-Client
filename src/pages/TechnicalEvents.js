import cse from "../assets/images/hackathon.jpeg";
import ece from "../assets/images/departments/ece.jpeg";
import eee from "../assets/images/departments/eee.jpg";
import civil from "../assets/images/departments/civil.jpg";
import chemical from "../assets/images/departments/chemical.jpg";
import mme from "../assets/images/departments/mme.jpg";
import mechanical from "../assets/images/departments/mechanical.jpg";
import { useNavigate } from "react-router-dom";

import PageTop from "../components/general/PageTop";
import "../styles/technicalevents.css";
import i1 from "../assets/images/techEvents/IMG-20241227-WA0009.jpg";
import i2 from "../assets/images/techEvents/IMG-20241227-WA0011.jpg";
import i3 from "../assets/images/techEvents/IMG-20250101-WA0020.jpg";
import i4 from "../assets/images/techEvents/IMG-20250101-WA0025 (1).jpg";
import i5 from "../assets/images/techEvents/webinar.jpeg";
import i6 from "../assets/images/hackathon.jpeg";
import { Button, Grid2 as Grid } from "@mui/material";

const departments = [
	{
		name: "Main Events",
		image: cse,
		description: "Top Events Conducted by RGUKT",
	},
	{
		name: "CSE",
		image: cse,
		description: "Explore cutting-edge tech and software development.",
	},
	{
		name: "ECE",
		image: ece,
		description: "Dive into circuits and modern electronic devices.",
	},
	{
		name: "EEE",
		image: eee,
		description: "Focus on power systems and electrical technology.",
	},
	{
		name: "Mechanical",
		image: mechanical,
		description: "Discover machines, engines, and industrial automation.",
	},
	{
		name: "Civil",
		image: civil,
		description: "Learn about construction, design, and infrastructure.",
	},
	{
		name: "Chemical",
		image: chemical,
		description: "Study chemical processes and industrial chemistry.",
	},
	{
		name: "MME",
		image: mme,
		description: "Understand materials science and metallurgical processes.",
	},
];

export default function TechnicalEvents() {
	const navigate = useNavigate();
	return (
		<>
			{/* <RollingGallery images={[cse,eee,ece,chemical,mme,civil]}/> */}
			<div style={{ paddingTop: "70px" }}>
				<PageTop
					img1={i3}
					img2={i2}
					img3={i5}
					img4={i1}
					img5={i4}
					img6={i6}
					text="TECH Events"
				/>
			</div>
			<Grid
				container
				spacing={2}
				alignItems="center"
				justifyContent={{sx:"center",sm:"center",md:"space-between"}}
				wrap="wrap"
				sx={{ padding: "15px" }}
			>
				<Grid item>
					<h1 className="title" style={{ margin: 0 }}>
						Technical Events
					</h1>
				</Grid>
				<Grid item>
					<Button
						sx={{
							fontFamily: "Audiowide",
							color: "white !important",
							"&:hover": {
								backgroundColor: "#008a73", // Hover color
							},
							textTransform: "none",
							fontSize: { sm: 18, md: 20 },
							cursor: "pointer !important",
						}}
						onClick={() => {
							navigate("/projectShowCase");
						}}
					>
						Our Students Tech Projects →
					</Button>
				</Grid>
			</Grid>


			<div className="tech-main">
				<div className="tech-cards-container" >
					{departments.map((dept, index) => (
						<div key={index} className="tech-card">
							<img
								src={dept.image}
								alt={dept.name}
								className="tech-card-image"
							/>
							<h2 className="tech-card-title">{dept.name}</h2>
							<p className="tech-card-description">{dept.description}</p>
							<button
								className="tech-view-events-button"
								onClick={() => {
									if(dept.name==="Main Events")
									{
										navigate("/mainTechnicalEvents");
									}
									else
									{
										navigate(`/technicalEvents/${dept.name}`);
									}
									
								}}
							>
								See All Events
							</button>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
