import React from "react";
import { Typography, Box, CardMedia } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import bakery from "../assets/images/stalls/bakery.jpg";
import pavbaji from "../assets/images/stalls/pavbaji.jpg";
import biryani from "../assets/images/stalls/biryani.jpg";
import icecream from "../assets/images/stalls/ice_cream.avif";
import shawarma from "../assets/images/stalls/shawarma.jpg";
import tiffin from "../assets/images/stalls/tiffin.avif";
import StallCard from "../components/stalls/stallCard";
import foodCourtMap from "../assets/images/stalls/foodcourtmap.png"
import { fetchStalls } from "../redux/slices/stallsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageTop from "../components/general/PageTop";
import TechnicalEvents from "./TechnicalEvents";
import TechnicalShimmer from "../components/technicalEvents/technicalShimmer";
import { Grid } from "swiper/modules";


export default function AllStalls() {
	const dispatch = useDispatch();
	
	const { stalls, loading, error } = useSelector((state) => state.stalls);
	


	const fetchAllStalls = async () => {
		
		try {
		  
		  dispatch(fetchStalls())
		} catch (error) {
		} 
	
	  };

	useEffect(() => {
		
		  fetchAllStalls();
		
	  },[]);
	
	  if(loading)
	  {
		<Grid container spacing={3} sx={{ marginTop: "20px", marginBottom: "40px", padding: "5px" }}>
            {[...Array(4)].map((_, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <TechnicalShimmer />
              </Grid>
            ))}
          </Grid>
	  }
	return (
		<div
			style={{
				minHeight: "100vh",
				width: "98vw",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<div style={{ paddingTop: "70px" }}>
				<PageTop
					img1={bakery}
					img2={biryani}
					img3={tiffin}
					img4={pavbaji}
					img5={shawarma}
					img6={icecream}
					text="Stalls"
				/>
				
			</div>
			<Typography
				variant="h4"
				component="h1"
				sx={{
					fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
					fontWeight: "bold",
					textAlign: "center",
					marginBlock: 3,
					color: "#c91c75",
					textShadow: " 2px 2px 10px rgb(91, 90, 90)",
					fontFamily: "Audiowide ",
				}}
			>
				All Stalls
			</Typography>
			<Grid2
				container
				spacing={3}
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					marginBottom: "3rem",
				}}
			>
				{stalls.map((stall) => (
					<Grid2 size={{ xs: "12", sm: "12", md: "4", lg: "3" }} key={stall.id}>
						<StallCard stall={stall} />
					</Grid2>
				))}
			</Grid2>
			<img src={foodCourtMap}></img>
		</div>
	);
}
