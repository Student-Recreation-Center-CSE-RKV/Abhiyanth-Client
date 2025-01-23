import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import {
	Card,
	CardContent,
	CardMedia,
	Typography,
	Button,
	Box,
	Dialog,
	DialogTitle,
	DialogContent,
	IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const StallCard = ({ stall }) => {
	const [open, setOpen] = useState(false);

	const truncateText = (text, wordLimit) => {
		const words = text.split(" ");
		return words.length > wordLimit
			? `${words.slice(0, wordLimit).join(" ")}...`
			: text;
	};
	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Card
				sx={{
					maxWidth: 345,
					margin: "auto",
					padding: "10px",
					backgroundColor: "inherit",
					color: "white",
					borderTopLeftRadius: "50px",
					borderBottomRightRadius: "50px",
					border: "1px solid rgb(68, 68, 68)",
					boxShadow: "1px 1px 5px rgb(48, 17, 33)",
					"&:hover": {
						boxShadow: "3px 3px 15px #c91c75",
						borderColor: "#444444",
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
						marginBottom: "8px",
						borderTopLeftRadius: "30px",
						borderBottomRightRadius: "30px",
						border: "1px solid #00b093",
					}}
				/>
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
						sx={{ color: "#c91c75", textShadow: "1px 1px 5px rgb(91, 90, 90)" }}
					>
						{stall.name}
					</Typography>
					<Typography
						variant="body2"
						color="text.secondary"
						sx={{
							marginBottom: 2,
							color: "white",
							whiteSpace: "normal",
							overflowWrap: "break-word",
							wordBreak: "break-word",
						}}
					>
						{truncateText(stall.description, 20)}
					</Typography>
					<Box display="flex" justifyContent="space-between">
						<Button
							variant="contained"
							color="secondary"
							sx={{ borderRadius: "10px" }}
							onClick={handleOpen}
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

			<Dialog
				open={open}
				onClose={handleClose}
				maxWidth="md"
				fullWidth
				PaperProps={{
					sx: {
						background: "rgba(0, 0, 0, 0.8)", // Dark transparent background
						backdropFilter: "blur(10px)", // Glassmorphism effect
						border: "1px solid rgba(255, 255, 255, 0.2)",
						borderRadius: "20px",
						boxShadow: "0 4px 30px rgba(0, 255, 170, 0.3)", // Neon glow effect
						color: "white",
						padding: "0",
					},
				}}
			>
				<DialogTitle
					sx={{
						fontSize: "1.8rem",
						fontWeight: "bold",
						color: "#00ffc8", // Neon color
						textAlign: "center",
						borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
					}}
				>
					{stall.name} - Menu
					<IconButton
						aria-label="close"
						onClick={handleClose}
						sx={{
							position: "absolute",
							right: 16,
							top: 16,
							color: "white",
							"&:hover": {
								color: "#00ffc8",
							},
						}}
					>
						<CloseIcon />
					</IconButton>
				</DialogTitle>
				<DialogContent
					dividers
					sx={{
						"&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar for WebKit browsers
						msOverflowStyle: "none", // Hide scrollbar for IE/Edge
						scrollbarWidth: "none", // Hide scrollbar for Firefox
					}}
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							height: "100%",
							background: "rgba(255, 255, 255, 0.05)",
							borderRadius: "10px",
							padding: "10px",
						}}
					>
						<iframe
							src={`${stall.menuPdfFile}#toolbar=0&navpanes=0&scrollbar=0`}
							title="Menu PDF"
							width="100%"
							height="500px"
							style={{
								border: "2px solid rgba(255, 255, 255, 0.2)",
								borderRadius: "10px",
								boxShadow: "0 0 15px rgba(0, 255, 170, 0.3)",
								overflow: "hidden",
								scrolling: "no", // Disable visible scrollbar
							}}
						></iframe>
					</Box>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default StallCard;
