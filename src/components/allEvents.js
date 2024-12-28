import React from "react";
import CustomCard from "./eventCustomCard";
import HorizontalScrollBox from "./HorizontalScrollBox";
import "../styles/allEvents.css";

const AllEvents = () => {
	const completedEvents = [...Array(10)]; 
	const ongoingEvents = [...Array(10)]; 
	const upcomingEvents = [...Array(10)]; 

	return (
		<div className="alleventscontainer">
			<div className="header">
				<h2>All Events</h2>
			</div>

			{/* Ongoing Events */}
			<div className="eventsContainer">
				<h3 className="alleventstopHeading">ONGOING</h3>
				<HorizontalScrollBox
					items={ongoingEvents}
					renderCard={(item, index) => <CustomCard key={index} />}
				/>
			</div>

			{/* Upcoming Events */}
			<div className="eventsContainer">
				<h3 className="alleventstopHeading">UPCOMING</h3>
				<HorizontalScrollBox
					items={upcomingEvents}
					renderCard={(item, index) => <CustomCard key={index} />}
				/>
			</div>

			<div className="alleventstext1 eventsContainer">
				<a href="#" style={{ textDecoration: "none", color: "white" }}>
					FULL SCHEDULE -&gt;
				</a>
			</div>

			{/* Completed Events */}
			<div className="eventsContainer">
				<h3 className="alleventstopHeading">COMPLETED</h3>
				<HorizontalScrollBox
					items={completedEvents}
					renderCard={(item, index) => <CustomCard key={index} />}
				/>
			</div>

			<div className="alleventstext2 eventsContainer" style={{ marginBlock: "2rem" }}>
				<a href="#" style={{ textDecoration: "none", color: "white" }}>
					ANIMATIONS -&gt;
				</a>
			</div>
		</div>
	);
};

export default AllEvents;
