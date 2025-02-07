import React from "react";
import { Typography, Box } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import bakery from "../assets/images/stalls/bakery.jpg";
import pavbaji from "../assets/images/stalls/pavbaji.jpg";
import biryani from "../assets/images/stalls/biryani.jpg";
import icecream from "../assets/images/stalls/ice_cream.avif";
import shawarma from "../assets/images/stalls/shawarma.jpg";
import tiffin from "../assets/images/stalls/tiffin.avif";
import StallCard from "../components/stalls/stallCard";
import foodCourtMap from "../assets/images/stalls/foodcourtmap.png"
import { fetchStalls ,updateReview} from "../redux/slices/stallsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageTop from "../components/general/PageTop";
import TechnicalShimmer from "../components/technicalEvents/technicalShimmer";
import Grid from "@mui/material/Grid";
import ErrorBoundary from "./ErrorBoundary";
import { getUser } from "../utils/getUser";
import { useState } from "react";


export default function AllStalls() {
	const dispatch = useDispatch();
	const [user,setUser]=useState(null);
	const { stalls, loading, error } = useSelector((state) => state.stalls);

	const fetchAllStalls = async () => {
		try {
			dispatch(fetchStalls());
		} catch (error) { }
	};

	

	useEffect(() => {
		getUser().then(setUser).catch(console.error);
		fetchAllStalls()
			
		// eslint-disable-next-line
		}, []);

	if (error) {
		return <div>
			Error
		</div>
	}



	return (
		<ErrorBoundary>
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

				{
					loading ? (<ErrorBoundary>
						<Grid
							container
							spacing={3}
							sx={{ marginTop: "20px", marginBottom: "40px", padding: "5px" }}
						>
							{[...Array(4)].map((_, index) => (
								<Grid item xs={12} sm={6} md={3} key={index}>
									<TechnicalShimmer />
								</Grid>
							))}
						</Grid>
					</ErrorBoundary>) : (
						<div>

							<div style={{
								width: '100%',
								color: "#23f7d4",
								fontWeight: "bold",
								fontSize: "18px",
								textShadow: "2px 2px 10px rgba(255, 255, 255, 0.3)",
								fontFamily: "Orbitron",
								backgroundColor: 'transparent',
								textAlign: 'center',
								padding: '10px',
								boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
								margin: "20px 0" // Adjust margin to place it correctly in your layout
							}}>
								<marquee>The images of stalls and data here are dummy; the original data will be updated soon after receiving it from stall owners.</marquee>
							</div>

							<Grid2
								container
								spacing={3}
								sx={{
									display: "flex",
									alignItems: "stretch",
									justifyContent: "center",
									marginBottom: "3rem",
								}}
							>
								{stalls.map((stall) => (
									<Grid2 size={{ xs: "12", sm: "12", md: "4", lg: "3" }} key={stall.id} sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
										<StallCard user={user} stall={stall} />
									</Grid2>
								))}
							</Grid2>

							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "space-around",
									flexDirection: { xs: "column", md: "column" },
									padding: "20px",
									background: "#1e1e2e",
									borderRadius: "20px",
									boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
								}}
							>
								<Typography
									variant="h3"
									component="h2"
									sx={{
										color: "#23f7d4",
										fontWeight: "bold",
										textShadow: "2px 2px 10px rgba(255, 255, 255, 0.3)",
										fontFamily: "Orbitron",
										marginBottom: "1rem",
										fontSize: { xs: "2rem", md: "2.5rem", lg: "3rem" }
									}}
								>
									Food Court Map
								</Typography>
								<img
									src={foodCourtMap}
									alt="Food Court Map"
									style={{
										padding: "10px",
										boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
										borderRadius: "15px",
										maxWidth: "100%",
										filter: "drop-shadow(0px 10px 10px rgba(0,0,0,0.2))",
										background: "#2e2e3a",
									}}
								/>
							</Box>

						</div>
					)
				}

			</div>
		</ErrorBoundary>
	);
}
