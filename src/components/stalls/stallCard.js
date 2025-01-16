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
const StallCard = ({ stall }) => {
	const truncateText = (text, wordLimit) => {
		const words = text.split(" ");
		return words.length > wordLimit
			? `${words.slice(0, wordLimit).join(" ")}...`
			: text;
	};
	const pdfPath = require(`../../assets/pdfs/${stall.menuPdfFile}`);
	const handleViewMenu = () => {
		window.open(pdfPath, "_blank");
	};
	return (
		<Card
			sx={{
				maxWidth: 345,
				margin: "auto",
				padding: "10px",
				backgroundColor: "inherit",
				color: "white",
				borderTopLeftRadius:"50px",
				borderBottomRightRadius:"50px",
				border: "1px solid rgb(68, 68, 68)",
				boxShadow: "1px 1px 5px rgb(48, 17, 33)",
				"&:hover": {
					boxShadow: "3px 3px 15px #c91c75", // Add a stronger shadow
					borderColor: "#444444", // Change border color on hover
				},
			}}
		>
			<CardMedia
				component="img"
				height="150"
				image={stall.topImage}
				alt={`${stall.name} top image`}
				sx={{
					marginTop: "15px",
					marginBottom:"8px",
					borderTopLeftRadius: "30px",
					borderBottomRightRadius: "30px",
					border: "1px solid #00b093",
				}}
			/>
			{/* if ui is not good then we can ommit these two images */}
			<Grid container spacing={1}>
				<Grid size={6}>
					<CardMedia
						component="img"
						height="100"
						image={stall.bottomLeftImage}
						alt={`${stall.name} bottom left image`}
						sx={{ border: "1px solid #00b093" }}
					/>
				</Grid>
				<Grid size={6}>
					<CardMedia
						component="img"
						height="100"
						image={stall.bottomRightImage}
						alt={`${stall.name} bottom right image`}
						sx={{ border: "1px solid #00b093" }}
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
					sx={{
						marginBottom: 2,
						color: "white",
						whiteSpace: "normal", // Allow text to wrap
						overflowWrap: "break-word", // Ensure long words break
						wordBreak: "break-word", // Break long unbreakable words
					}}
				>
					{truncateText(stall.description, 20)}
				</Typography>
				<Box display="flex" justifyContent="space-between">
					<Button
						variant="contained"
						color="secondary"
						sx={{ borderRadius: "10px" }}
						onClick={handleViewMenu}
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
};
export default StallCard;
