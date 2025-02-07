import React, { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent,DialogActions, TextField, Button, Box, Typography ,} from "@mui/material";
import { getUser } from "../../utils/getUser";
import axios from 'axios';
import { cashfree } from "../CashFreeFold/util";




// toast.configure();

const IndividualRegistrationForm = ({ open, onClose, eventName, amount,department }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    
    

    useEffect(() => {
        getUser().then(setUser).catch(console.error);
    }, []);

    const [formData, setFormData] = useState({
        name: user?.displayName || "",
        studentId: "",
        batch: "",
        mobile: user?.phoneNumber || ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const getSessionId = async () => {
        try {
            setLoading(true);
            const res = await axios.post('https://us-central1-abhiyanth-a8d4c.cloudfunctions.net/createOrderProd', {
                cust_id: "jbbhbzx",
                email: user?.email || "jrevanth101@gmail.com",
                phone: formData.mobile.toString(),
                name: formData.name,
                amount: parseInt(amount,10) || 1,
                note: "Event Registration",
                event:eventName,
                department:department,
                isTeam:"false"
            });

            setLoading(false);

            if (res.data.payment_session_id && res.data.order_id) {
                await handlePayment(res.data.payment_session_id, res.data.order_id);
            } else {
                console.error("Payment session ID or order ID missing");
            }
        } catch (error) {
            setLoading(false);
            console.error("Error fetching session ID:", error);
            // toast.error("Failed to initiate payment. Please try again.");
        }
    };


  const handlePayment = (sessionId)=>{
          let checkoutOptions = {
              paymentSessionId: sessionId,
              returnUrl: "https://us-central1-abhiyanth-a8d4c.cloudfunctions.net/checkStatusForWebProd/{order_id} ",
              
          }  
          cashfree.checkout(checkoutOptions).then(function(result){
              console.log(result)
              if(result.error){
                  alert(result.error.message);
              }
              if(result.redirect){
                  // navigate("/");
                  console.log("Redirection")
                  console.log(result);
              }
          });
      }


      const handleSubmit = async () => {
        await getSessionId();
    };

    const isFormValid = formData.name && formData.studentId && formData.mobile;

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm"
            sx={{
                "& .MuiDialog-paper": {
                    backgroundColor: "rgba(217, 217, 217, 0) !important",
                    boxShadow: "0px 5px 15px rgba(173, 216, 230, 0.5) !important",
                    border: "1px solid #FF6AB7 !important",
                    backdropFilter: "blur(10px)",
                },
                "& .MuiTypography-root, & .MuiDialogTitle-root, & .MuiDialogContent-root, & .MuiDialogActions-root": {
                    color: "white !important",
                },
            }}
        >
            <DialogTitle sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>Registering for {eventName}</DialogTitle>
            <DialogContent>
                <Box sx={{ p: 2 }}>
                    <TextField 
                        fullWidth 
                        margin="normal" 
                        label="Name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange}
                        sx={{
                            backgroundColor: "rgba(255, 255, 255, 0.1)", 
                            borderRadius: "10px",
                            mb:2,
                            input: { color: "white" }, 
                            "& .MuiInputLabel-root": { color: "white !important" }, 
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": { borderColor: "white !important" }, 
                                "&:hover fieldset": { borderColor: "#00ffc8 !important" },
                                "&.Mui-focused fieldset": { borderColor: "#00ffc8 !important" },
                            },
                        }}
                    />
                    <TextField 
                        fullWidth 
                        margin="normal" 
                        label="Email" 
                        name="email" 
                        value={user?.email || ""} 
                        InputProps={{ readOnly: true }}
                        sx={{
                            backgroundColor: "rgba(255, 255, 255, 0.1)", 
                            borderRadius: "10px",
                            mb:2,
                            input: { color: "white" }, 
                            "& .MuiInputLabel-root": { color: "white !important" }, 
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": { borderColor: "white !important" }, 
                                "&:hover fieldset": { borderColor: "#00ffc8 !important" },
                                "&.Mui-focused fieldset": { borderColor: "#00ffc8 !important" },
                            },
                        }}
                    />
                    <TextField 
                        fullWidth 
                        margin="normal" 
                        label="Student ID" 
                        name="studentId" 
                        value={formData.studentId} 
                        onChange={handleChange}
                        sx={{
                            backgroundColor: "rgba(255, 255, 255, 0.1)", 
                            borderRadius: "10px",
                            input: { color: "white" }, 
                            mb:2,
                            "& .MuiInputLabel-root": { color: "white !important" }, 
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": { borderColor: "white !important" }, 
                                "&:hover fieldset": { borderColor: "#00ffc8 !important" },
                                "&.Mui-focused fieldset": { borderColor: "#00ffc8 !important" },
                            },
                        }}
                    />
                    <TextField 
                        fullWidth 
                        margin="normal" 
                        label="Mobile" 
                        name="mobile" 
                        value={formData.mobile} 
                        onChange={handleChange}
                        sx={{
                            backgroundColor: "rgba(255, 255, 255, 0.1)", 
                            borderRadius: "10px",
                            input: { color: "white" }, 
                            mb:2,
                            "& .MuiInputLabel-root": { color: "white !important" }, 
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": { borderColor: "white !important" }, 
                                "&:hover fieldset": { borderColor: "#00ffc8 !important" },
                                "&.Mui-focused fieldset": { borderColor: "#00ffc8 !important" },
                            },
                        }}
                    />
                    <Typography variant="h6" sx={{ mt: 2, color: "white"}}>Amount: ₹{amount}</Typography>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{
                            mt: 2,
                            "&:disabled": {
                                backgroundColor: (theme) =>
                                    theme.palette.primary.main, // Keeps primary color
                                opacity: 0.6, // Slightly faded effect
                                color: "white",
                            },
                        }}
                        disabled={!isFormValid || loading}
                        onClick={handleSubmit}
                    >
                        {loading ? "Processing..." : "Pay Now"}
                    </Button>
                </Box>
            </DialogContent>
            <DialogActions sx={{ px: 3, pb: 2 }}>
                <Button onClick={onClose} sx={{ color: "white !important" }}>Cancel</Button>
            </DialogActions>
        </Dialog>
        
    );
};

export default IndividualRegistrationForm;
