import React, { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, TextField, MenuItem, Button, Box, Typography } from "@mui/material";
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

    const isFormValid = formData.name && formData.studentId && formData.batch;

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Registering for {eventName}</DialogTitle>
            <DialogContent>
                <Box sx={{ p: 2 }}>
                    <TextField fullWidth margin="normal" label="Name" name="name" value={formData.name} onChange={handleChange} />
                    <TextField fullWidth margin="normal" label="Email" name="email" value={user?.email || ""} InputProps={{ readOnly: true }} />
                    <TextField fullWidth margin="normal" label="Student ID" name="studentId" value={formData.studentId} onChange={handleChange} />
                    <TextField fullWidth margin="normal" label="Mobile" name="mobile" value={formData.mobile} onChange={handleChange} />
                    <TextField select fullWidth margin="normal" label="Batch" name="batch" value={formData.batch} onChange={handleChange}>
                        {["P1", "P2", "E1", "E2", "E3", "E4"].map((option) => (
                            <MenuItem key={option} value={option}>{option}</MenuItem>
                        ))}
                    </TextField>
                    <Typography variant="h6" sx={{ mt: 2 }}>Amount: ₹{amount}</Typography>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2 }}
                        disabled={!isFormValid || loading}
                        onClick={handleSubmit}
                    >
                        {loading ? "Processing..." : "Pay Now"}
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default IndividualRegistrationForm;
