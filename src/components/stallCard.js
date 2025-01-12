import React from "react";
import Grid from "@mui/material/Grid2";

import {
	Card,
	CardContent,
	CardMedia,
	Typography,
	Button,
	Box,
} from "@mui/material";
const StallCard = ({ stall }) => (
	<Card
		sx={{
			maxWidth: 345,
			margin: "auto",
			padding: "10px",
			backgroundColor: "inherit",
			color: "white",
			borderRadius: "15px",
			border: "1px solid rgb(68, 68, 68)",
			boxShadow:"1px 1px 5px rgb(48, 17, 33)"
		}}
	>
		<CardMedia
			component="img"
			height="150"
			image={stall.topImage}
			alt={`${stall.name} top image`}
			sx={{
				marginBottom: "10px",
				borderTopLeftRadius: "15px",
				borderTopRightRadius: "15px",
			}}
		/>
		<Grid container spacing={1}>
			<Grid size={6}>
				<CardMedia
					component="img"
					height="100"
					image={stall.bottomLeftImage}
					alt={`${stall.name} bottom left image`}
				/>
			</Grid>
			<Grid size={6}>
				<CardMedia
					component="img"
					height="100"
					image={stall.bottomRightImage}
					alt={`${stall.name} bottom right image`}
				/>
			</Grid>
		</Grid>
		<CardContent>
			<Typography
				variant="h5"
				component="div"
				sx={{ color: "#c91c75", textShadow: " 1px 1px 5px rgb(91, 90, 90)" }}
			>
				{stall.name}
			</Typography>
			<Typography
				variant="body2"
				color="text.secondary"
				sx={{ marginBottom: 2, color: "white" }}
			>
				{stall.description}
			</Typography>
			<Box display="flex" justifyContent="space-between">
				<Button
					variant="contained"
					color="secondary"
					sx={{ borderRadius: "10px" }}
				>
					Menu Card
				</Button>
				<Button
					variant="outlined"
					color="secondary"
					sx={{ borderRadius: "10px" }}
				>
					View More
				</Button>
			</Box>
		</CardContent>
	</Card>
);
export default StallCard;
