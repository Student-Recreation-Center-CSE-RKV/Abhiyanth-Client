import React, { useEffect, useState } from "react";
import CustomCard from "./eventCustomCard";
import HorizontalScrollBox from "./HorizontalScrollBox";
import { Grid } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import "../../styles/allEvents.css";
import { getAllEvents, addEvent } from "../../api/events";
import ShimmerCard from "./Shimmer";
import img1 from "../../assets/images/eventsHeaderImg1.jpeg";
import img2 from "../../assets/images/eventsHeaderImg2.jpeg";
import img3 from "../../assets/images/eventsHeaderImg3.jpeg";
import img4 from "../../assets/images/eventsHeaderImg4.jpeg";
import img5 from "../../assets/images/eventsHeaderImg5.jpeg";
import img6 from "../../assets/images/eventsHeaderImg6.jpeg";
import abiyanthLogo from "../../assets/images/Abhiyanthlogo2.png";

const AllEvents = () => {
	const [events, setEvents] = useState({
		completed: [],
		ongoing: [],
		upcoming: [],
	});
	const [isLoading, setIsLoading] = useState(true);

	const getData = async () => {
		setIsLoading(true);
		const res = await getAllEvents();
		setEvents(res);
		setIsLoading(false);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div
			style={{
				minHeight: "100vh",
				width: "98vw",
				display: "flex",
				flexDirection: "column",
				marginTop: "70px",
			}}
		>
			<div className="eventsHeader">
				<div className="eventAbiyanthLogo">
					<div className="duplicate123">
						<img
							src={abiyanthLogo}
							alt="abiyanth logo"
							className="abiyanthlogoimg"
						></img>
						<h3 className="alleventsculturalsheading">CULTURALS</h3>
					</div>
				</div>
				<Grid2 container spacing={1}>
					<Grid2 size={3}>
						<img src={img4} alt="gallery img 3" className="imageInHeader" />
					</Grid2>
					<Grid2 size={3}>
						<img src={img2} alt="gallery img 3" className="imageInHeader" />
					</Grid2>
					<Grid2 size={6}>
						<img src={img1} className="imageInHeader" alt="gallery img 3" />
					</Grid2>

					<Grid2 size={6}>
						<img src={img6} alt="gallery img 3" className="imageInHeader" />
					</Grid2>
					<Grid2 size={3}>
						<img src={img5} alt="gallery img 3" className="imageInHeader" />
					</Grid2>
					<Grid2 size={3}>
						<img src={img3} alt="gallery img 3" className="imageInHeader" />
					</Grid2>
				</Grid2>
			</div>

			<div className="alleventscontainer">
				{isLoading ? (
					<Grid container spacing={3} sx={{ marginTop: "20px" }}>
						{[...Array(8)].map((_, index) => (
							<Grid item xs={12} sm={6} md={3} key={index}>
								<ShimmerCard />
							</Grid>
						))}
					</Grid>
				) : (
					<>
						{events.ongoing.length > 0 && (
							<div className="eventsContainer">
								<h3 className="alleventstopHeading">ONGOING</h3>
								<HorizontalScrollBox
									items={events.ongoing}
									renderCard={(item, index) => (
										<CustomCard key={index} item={item} />
									)}
								/>
							</div>
						)}

						{events.upcoming.length > 0 && (
							<div className="eventsContainer">
								<h3 className="alleventstopHeading">UPCOMING</h3>
								<HorizontalScrollBox
									items={events.upcoming}
									renderCard={(item, index) => (
										<CustomCard key={index} item={item} />
									)}
								/>
							</div>
						)}

						{/* {(events.ongoing.length > 0 || events.upcoming.length > 0) && (
							<div className="alleventstext1 eventsContainer">
								<a href="#" style={{ textDecoration: "none", color: "white" }}>
									FULL SCHEDULE -&gt;
								</a>
							</div>
						)} */}

						{events.completed.length > 0 && (
							<div className="eventsContainer">
								<h3 className="alleventstopHeading">COMPLETED</h3>
								<HorizontalScrollBox
									items={events.completed}
									renderCard={(item, index) => (
										<CustomCard key={index} item={item} />
									)}
								/>
							</div>
						)}
					</>
				)}
			</div>
		</div>
	);
};

export default AllEvents;
