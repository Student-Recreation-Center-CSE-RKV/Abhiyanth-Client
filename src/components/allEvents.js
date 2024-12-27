import React from "react";
import { Box } from "@mui/material";
import CustomCard from "./eventCustomCard";
import "../styles/allEvents.css";

const AllEvents = () => {
	return (
		<div className="container">
			<div className="header">
				<h2>All Events</h2>
			</div>
			<div className="eventsContainer">
				<h3 className="topHeading">COMPLETED</h3>
				<Box
					sx={{
						display: "block",
						overflowX: "auto",
						whiteSpace: "nowrap",
						"&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar for cleaner UI
					}}
				>
					<Box
						sx={{
							display: "flex",
							gap: "16px", // Space between cards
						}}
					>
						{/* Render Custom Cards */}
						{[...Array(10)].map((_, index) => (
							<Box
								key={index}
								sx={{
									minWidth: "300px", // Adjust the width to match your card design
									flexShrink: 0,
								}}
							>
								<CustomCard />
							</Box>
						))}
					</Box>
				</Box>
			</div>
			<div className="text eventsContainer">
				<a href="#" style={{ textDecoration: "none", color: "white" }}>
					FULL SCHEDULE -&gt;
				</a>
			</div>
			<div className="eventsContainer">
				<h3 className="topHeading">ONGOING</h3>
				<Box
					sx={{
						display: "block",
						overflowX: "auto",
						whiteSpace: "nowrap",
						"&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar for cleaner UI
					}}
				>
					<Box
						sx={{
							display: "flex",
							gap: "16px", // Space between cards
						}}
					>
						{/* Render Custom Cards */}
						{[...Array(10)].map((_, index) => (
							<Box
								key={index}
								sx={{
									minWidth: "300px", // Adjust the width to match your card design
									flexShrink: 0,
								}}
							>
								<CustomCard />
							</Box>
						))}
					</Box>
				</Box>
			</div>
			<div className="eventsContainer">
				<h3 className="topHeading">UPCOMING</h3>
				<Box
					sx={{
						display: "block",
						overflowX: "auto",
						whiteSpace: "nowrap",
						"&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar for cleaner UI
					}}
				>
					<Box
						sx={{
							display: "flex",
							gap: "16px", // Space between cards
						}}
					>
						{/* Render Custom Cards */}
						{[...Array(10)].map((_, index) => (
							<Box
								key={index}
								sx={{
									minWidth: "300px", // Adjust the width to match your card design
									flexShrink: 0,
								}}
							>
								<CustomCard />
							</Box>
						))}
					</Box>
				</Box>
			</div>
			<div className="text2 eventsContainer" style={{ marginBlock: "2rem" }}>
				<a href="#" style={{ textDecoration: "none", color: "white" }}>
					ANIMATIONS -&gt;
				</a>
			</div>
		</div>
	);
};

export default AllEvents;
