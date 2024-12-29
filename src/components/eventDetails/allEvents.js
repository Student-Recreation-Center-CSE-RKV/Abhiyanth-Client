import React, { useEffect, useState } from "react";
import CustomCard from "./eventCustomCard";
import HorizontalScrollBox from "./HorizontalScrollBox";
import { Grid } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import "../../styles/allEvents.css";
import { getAllEvents, addEvent } from "../../api/events";
import ShimmerCard from "./Shimmer";
import musicImg1 from "../../assets/images/music.png";
import musicImg2 from "../../assets/images/music@2x.png";
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
						<img
							src={musicImg2}
							alt="gallery img 3"
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
								borderRadius: "8px",
								border: "1px solid #00B093",
							}}
						/>
					</Grid2>
					<Grid2 size={3}>
						<img
							src={musicImg2}
							alt="gallery img 3"
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
								borderRadius: "8px",
								border: "1px solid #00B093",
							}}
						/>
					</Grid2>
					<Grid2 size={6}>
						<img
							src={musicImg1}
							alt="gallery img 3"
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
								borderRadius: "8px",
								border: "1px solid #00B093",
							}}
						/>
					</Grid2>

					<Grid2 size={6}>
						<img
							src={musicImg1}
							alt="gallery img 3"
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
								borderRadius: "8px",
								border: "1px solid #00B093",
							}}
						/>
					</Grid2>
					<Grid2 size={3}>
						<img
							src={musicImg2}
							alt="gallery img 3"
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
								borderRadius: "8px",
								border: "1px solid #00B093",
							}}
						/>
					</Grid2>
					<Grid2 size={3}>
						<img
							src={musicImg2}
							alt="gallery img 3"
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
								borderRadius: "8px",
								border: "1px solid #00B093",
							}}
						/>
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

						{(events.ongoing.length > 0 || events.upcoming.length > 0) && (
							<div className="alleventstext1 eventsContainer">
								<a href="#" style={{ textDecoration: "none", color: "white" }}>
									FULL SCHEDULE -&gt;
								</a>
							</div>
						)}

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

						{events.completed.length > 0 && (
							<div
								className="alleventstext2 eventsContainer"
								style={{ marginBlock: "2rem" }}
							>
								<a href="#" style={{ textDecoration: "none", color: "white" }}>
									ANIMATIONS -&gt;
								</a>
							</div>
						)}
					</>
				)}
			</div>
		</div>
	);
};

export default AllEvents;
