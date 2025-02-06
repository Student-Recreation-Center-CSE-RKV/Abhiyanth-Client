import React from "react";
import {
    Button,
	Dialog,
	DialogTitle,
	DialogContent,
	TextField,
	DialogActions,
} from "@mui/material";

function ReviewDialog({openReviewDialog,handleReviewDialogClose,stall,handleReviewSubmit,review,setReview}) {
    return ( 
        <Dialog open={openReviewDialog} onClose={handleReviewDialogClose}
			  sx={{
				"& .MuiDialog-paper": {
				  width: "400px",
				  height: "250px",
				  backgroundColor: "rgba(217, 217, 217, 0) !important", 
				  boxShadow: "0px 5px 15px rgba(173, 216, 230, 0.5) !important",
				  border: "1px solid #FF6AB7 !important", 
				  backdropFilter: "blur(10px)",
				},
				"& .MuiTypography-root, & .MuiDialogTitle-root, & .MuiDialogContent-root, & .MuiDialogActions-root": {
					color: "white !important",
				  },
			}}>
        		<DialogTitle sx={{ fontSize: "1.5rem", fontWeight: "bold",}}>Add a Review</DialogTitle>
        		<DialogContent>
          		<TextField
            		autoFocus
            		margin="dense"
            		label="Write your review"
            		type="text"
            		fullWidth
            		variant="outlined"
            		value={review}
            		onChange={(e) => setReview(e.target.value)}
					sx={{
						backgroundColor: "rgba(255, 255, 255, 0.1)", 
						borderRadius: "10px",
						input: { color: "white" }, 
						"& .MuiInputLabel-root": { color: "white !important" }, 
						"& .MuiOutlinedInput-root": {
						  "& fieldset": { borderColor: "white !important" }, 
						  "&:hover fieldset": { borderColor: "#00ffc8 !important" },
						  "&.Mui-focused fieldset": { borderColor: "#00ffc8 !important" },
						},
					  }}
          		/>
        		</DialogContent>
        		<DialogActions>
          			<Button onClick={handleReviewDialogClose} sx={{ color: "white !important"}}>Cancel</Button>
          			<Button
            			variant="contained"
            			color="secondary"
            			onClick={handleReviewSubmit}
						sx={{
							color: "white !important",
							fontWeight:"bold",
						  }}
          			>
            			Submit
          			</Button>
        		</DialogActions>
      		</Dialog>
     );
}

export default ReviewDialog;