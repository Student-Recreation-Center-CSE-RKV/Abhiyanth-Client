import React, { useEffect } from "react";
import CustomCard from "./eventCustomCard";
import HorizontalScrollBox from "./HorizontalScrollBox";
import { Grid } from "@mui/material";
import "../../styles/allEvents.css";
import ShimmerCard from "./Shimmer";
import img1 from "../../assets/images/eventsHeaderImg1.jpeg";
import img2 from "../../assets/images/eventsHeaderImg2.jpeg";
import img3 from "../../assets/images/gallery_main2.webp";
import img4 from "../../assets/images/gallery_main1.webp";
import img5 from "../../assets/images/eventsHeaderImg5.jpeg";
import img6 from "../../assets/images/eventsHeaderImg6.jpeg";

import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../../redux/slices/eventsSlice";
import PageTop from "../general/PageTop";


const AllEvents = () => {
	
	const dispatch = useDispatch();
  const { completed, ongoing, upcoming, loading, error } = useSelector((state) => state.events);

  useEffect(() => {
    dispatch(fetchEvents());  
  }, [dispatch]);

  
  if (error) return <div>Error: {error}</div>;  



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
			<PageTop img1={img1} img2={img2} img3={img3} img4={img4} img5={img5} img6={img6} text="CULTURALS"/>

			
			<div className="alleventscontainer">
				{loading ? (
					<Grid container spacing={3} sx={{ marginTop: "20px" }}>
						{[...Array(8)].map((_, index) => (
							<Grid item xs={12} sm={6} md={3} key={index}>
								<ShimmerCard />
							</Grid>
						))}
					</Grid>
				) : (
					<>
						{ongoing.length > 0 && (
							<div className="eventsContainer">
								<h3 className="alleventstopHeading">ONGOING</h3>
								<HorizontalScrollBox
									items={ongoing}
									renderCard={(item, index) => (
										<CustomCard key={index} item={item} />
									)}
								/>
							</div>
						)}

						{upcoming.length > 0 && (
							<div className="eventsContainer">
								<h3 className="alleventstopHeading">UPCOMING</h3>
								<HorizontalScrollBox
									items={upcoming}
									renderCard={(item, index) => (
										<CustomCard key={index} item={item} />
									)}
								/>
							</div>
						)}

						{completed.length > 0 && (
							<div className="eventsContainer">
								<h3 className="alleventstopHeading">COMPLETED</h3>
								<HorizontalScrollBox
									items={completed}
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
