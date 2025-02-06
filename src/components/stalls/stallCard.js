import React, { useState ,useEffect} from "react";
import Grid from "@mui/material/Grid2";
import {
	Card,
	CardContent,
	CardMedia,
	Typography,
	Button,
	Box,
} from "@mui/material";
import DailogBox from "../general/Dialog";
import ReviewDialog from "../general/ReviewDialog";
import { useNavigate } from "react-router-dom";
import { addReviewToStall } from "../../api/addReview";
import { updateReview } from "../../redux/slices/stallsSlice";
import { useDispatch } from "react-redux";

const StallCard = ({ user,stall }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [open, setOpen] = useState(false);
	const [openReviewDialog, setOpenReviewDialog] = useState(false);
  	const [review, setReview] = useState("");
	  
	const handleOpen = () => {
		setOpen(true);
	};

	
	const handleClose = () => {
		setOpen(false);
	};
	const handleReviewDialogOpen = () => {
		setOpenReviewDialog(true);
	  };
	
	  const handleReviewDialogClose = () => {
		setOpenReviewDialog(false);
		setReview("");
	  };
	

	  const handleReviewSubmit = async () => {
		try {
		  const newReview = { user: user?.displayName || "User", comment: review };
		  await addReviewToStall(stall.id, newReview);
		  dispatch(updateReview(stall.id, newReview));
		  alert("Review added successfully");
		} catch (error) {
		  console.error("Failed to submit review:", error);
		}
		handleReviewDialogClose();
	  };
	const truncateText = (text, wordLimit) => {
		const words = text.split(" ");
		return words.length > wordLimit
			? `${words.slice(0, wordLimit).join(" ")}...`
			: text;
	};

	if (!stall) {
		return <Typography color="error">Error: Stall data missing</Typography>;
	}

	return (
		<>
			<Card
				sx={{
					width: 300,
					margin: "auto",
					height:"570px",
					padding: "10px",
					display: "flex",
					flexDirection: "column",
					backgroundColor: "inherit",
					color: "white",
					borderTopLeftRadius: "50px",
					borderBottomRightRadius: "50px",
					border: "1px solid rgb(68, 68, 68)",
					boxShadow: "1px 1px 5px rgb(48, 17, 33)",
					"&:hover": {
						boxShadow: "2px 2px 5px rgb(47, 241, 228)",
						borderColor: "#444444",
					},
				}}
			>
				<CardMedia
					component="img"
					height="150"
					image={stall.image}
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
							image={stall.imageLeft}
							alt={`${stall.name} bottom left image`}
							sx={{ border: "1px solid #00b093" }}
						/>
					</Grid>
					<Grid size={6}>
						<CardMedia
							component="img"
							height="100"
							image={stall.imageRight}
							alt={`${stall.name} bottom right image`}
							sx={{ border: "1px solid #00b093" }}
						/>
					</Grid>
				</Grid>
				<CardContent
					sx={{
						flexGrow: 1, // Allows the content to take up equal space in all cards
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between", // Ensures spacing for buttons at the bottom
					}}
				>
					<Typography
						variant="h5"
						component="div"
						sx={{ color: "#c91c75", textShadow: "1px 1px 5px rgb(91, 90, 90)",height:"60px" }}
					>
						{stall.name}
					</Typography>
					<Typography
						variant="body2"
						color="text.secondary"
						sx={{
							flexGrow: 1, // Ensures text fills space evenly
							color: "white",
							whiteSpace: "normal",
							overflowWrap: "break-word",
							wordBreak: "break-word",
							height: "90px", 
						}}
					>
						{truncateText(stall.short_description, 20)}
					</Typography>
					<Box display="flex" justifyContent="space-between" sx={{marginBlock:"1rem"}}>
						<Button
							variant="contained"
							color="secondary"
							sx={{ borderRadius: "10px" }}
							onClick={handleOpen}
						>
							Price Card
						</Button>
						<Button
							variant="outlined"
							color="secondary"
							sx={{ borderRadius: "10px" }}
							onClick={() => {
								navigate(`/stalls/${stall.id}`);
							}}
						>
							View More
						</Button>
						
					</Box>
					<Button
            			variant="contained"
            			color="secondary"
            			sx={{ borderRadius: "10px" ,width:"125px"}}
            			onClick={handleReviewDialogOpen}
          				>
            				Add Review
          				</Button>
				</CardContent>
			</Card>

			<DailogBox open={open} handleClose={handleClose} stall={stall} />
			{/* Review Dialog */}
			<ReviewDialog openReviewDialog={openReviewDialog} handleReviewDialogClose={handleReviewDialogClose} stall={stall}  handleReviewSubmit={handleReviewSubmit} review={review} setReview={setReview}/>
		</>
	);
};

export default StallCard;
