import React from "react";
import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	Button,
	Grid2,
} from "@mui/material";
import {extractDateTime} from "../../utils/timeStampToDate"
import { useNavigate } from "react-router-dom";


export default function CustomCard({ item }) {
	const navigate=useNavigate()
	const isLive = item.status === "live";
	const isUpcoming = item.status !== "completed";
	const dateTime=extractDateTime(item.date)
	return (
		<Card
			sx={{
				maxWidth: 345,
				margin: "auto",
				backgroundColor: "black",
				color: "white",
				paddingTop: "1rem",
				paddingInline: "1rem",
				border: "1px solid #505050 ",
				borderRadius: "20px",
				position: "relative",
			}}
		>
			{isLive && (
				<div
					style={{
						position: "absolute",
						top: "10px",
						right: "10px",
						background: "red",
						color: "white",
						fontSize: "12px",
						fontWeight: "bold",
						padding: "5px 10px",
						borderRadius: "12px",
						textTransform: "uppercase",
						boxShadow: " 0 2px 4px rgba(0, 0, 0, 0.2)",
					}}
				>
					LIVE
				</div>
			)}
			{/* Full-width image */}
			<CardMedia
				component="img"
				height="150"
				image={item.images.mainImage}
				alt="Top full-width image"
				sx={{
					border: "1px solid #00B093",
					borderRadius: "10px",
					marginBottom: "10px",
				}}
			/>

			{/* Two images side by side */}
			<Grid2 container spacing={1}  >
				<Grid2 item size={6}>
					<CardMedia
						component="img"
						height="100"
						width="100%"
						image={item.images.descImageLeft}
						alt="Left image"
						sx={{
							border: "1px solid #00B093",
							borderRadius: "10px",
						}}
					/>
				</Grid2>
				<Grid2 item  size={6}>
					<CardMedia
						component="img"
						height="100"
						image={item.images.descImageRight}
						alt="Right image"
						sx={{
							border: "1px solid #00B093",
							borderRadius: "10px",
						}}
					/>
				</Grid2>
			</Grid2>

			{/* Heading and content */}
			<CardContent sx={{ paddingLeft: "0", marginLeft: "0" }}>
				<Typography
					variant="h6"
					gutterBottom
					sx={{
						fontFamily: "Audiowide",
						fontSize: "28px",
						lineHeight: "35.7px",
						color: " #00B093",
						width: "100%",
						whiteSpace: "nowrap",  // Prevent wrapping
						overflow: "hidden",    // Hide overflowing text
						textOverflow: "ellipsis"
					}}
				>
					{item.name}
				</Typography>
				<Typography
					variant="body2"
					color="text.secondary"
					sx={{
						fontFamily: "Audiowide",
						fontSize: "17px",
						lineHeight: "30.6px",
						color: "white",
						width: "100%",
    					whiteSpace: "normal",
    					overflowWrap: "break-word",
						display: "-webkit-box",          // Enables multiline truncation
						WebkitLineClamp: 3,             // Limits to 3 lines
						WebkitBoxOrient: "vertical",    // Required for `lineClamp` to work
						overflow: "hidden",             // Hides overflowing text
						textOverflow: "ellipsis",
					}}
				>
					{item.description}
				</Typography>
				
				{isUpcoming && (
					<>
						<Typography
							variant="h6"
							component="div"
							gutterBottom
							sx={{
								fontFamily: "Audiowide",
								fontSize: "25px",
								lineHeight: "30.7px",
								color: " #C91C75",
								marginTop: "1rem",

							}}
						>
						{dateTime.date}
						</Typography>
						<Typography
							variant="h6"
							component="div"
							gutterBottom
							sx={{
								fontFamily: "Audiowide",
								fontSize: "20px",
								color: " #C91C75",
							}}
						>
						{dateTime.time}
						</Typography>
						<Typography
							variant="body2"
							color="text.secondary"
							sx={{
								fontFamily: "Audiowide",
								fontSize: "17px",
								lineHeight: "30.6px",
								color: "white",
								width: "90%",
						whiteSpace: "nowrap",  // Prevent wrapping
						overflow: "hidden",    // Hide overflowing text
						textOverflow: "ellipsis"
							}}
						>
							{item.venue}
						</Typography>
					</>
				)}
				<Button
					size="small"
					sx={{
						marginTop: 2,
						fontFamily: "Audiowide",
						fontSize: "18px",
						lineHeight: "20.6px",
						color: " #00B093",

					}}
					onClick={()=>navigate(`/events/${item.id}`)}
				>
					Read More
				</Button>
				{/* conditional rendering */}
			</CardContent>
		</Card>
	);
}
