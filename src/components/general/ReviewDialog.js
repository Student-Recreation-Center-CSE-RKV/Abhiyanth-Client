import React from "react";
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions,
    Box,
} from "@mui/material";

function ReviewDialog({ openReviewDialog, handleReviewDialogClose, handleReviewSubmit, review, setReview }) {
    return (
        <Dialog open={openReviewDialog} onClose={handleReviewDialogClose} fullWidth maxWidth="sm">
            <DialogTitle sx={{ fontWeight: "bold" ,fontSize:"25px"}}>Add a Review</DialogTitle>
            <DialogContent>
                <Box sx={{ p: 2 }}>
                    <TextField 
                        fullWidth 
                        margin="normal" 
                        label="Write your review" 
                        type="text" 
                        variant="outlined" 
                        value={review} 
                        onChange={(e) => setReview(e.target.value)}
                        sx={{
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            borderRadius: "10px",
                            input: { color: "black" },
                            "& .MuiInputLabel-root": { color: "black" },
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": { borderColor: "black" },
                                "&:hover fieldset": { borderColor: "#00ffc8" },
                                "&.Mui-focused fieldset": { borderColor: "#00ffc8" },
                            },
                        }}
                    />
                </Box>
            </DialogContent>
            <DialogActions sx={{ px: 3, pb: 2 }}>
                <Button onClick={handleReviewDialogClose} color="primary" variant="outlined">
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleReviewSubmit}
                >
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default ReviewDialog;