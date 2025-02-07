import React, { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent,DialogActions, TextField, MenuItem, Button, Box, Typography } from "@mui/material";
import { getUser } from "../../utils/getUser";
import axios from 'axios';
import { cashfree } from "../CashFreeFold/util";
import { addDataToCollection } from "../../api/general";

const TeamRegistrationForm = ({ open, onClose, eventName, amount,department }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState('');
  useEffect(() => {
    getUser().then(setUser).catch(console.error);
  }, []);
  
  const [formData, setFormData] = useState({
    teamName: "",
    teamSize: 2,
    teamMembers: Array(2).fill({ name: "", studentId: "" }),
    email: user?.email || "user@gmail.com", // Email field for the team
    mobile: user?.phoneNumber || "0000000000"
  });
    
    const getSessionId = async () => {
      try {
        
          setLoading(true);
          const res = await axios.post(process.env.REACT_APP_FIREBASE_CREATEORDER_COLLECTION, {
              cust_id: "jbbhbzx",
              email: user?.email || "user@gmail.com",
              phone: formData.mobile.toString(),
              name: formData.teamName.trim(),
              amount: parseInt(amount,10) || 1,
              note: "Event Registration",
              event:eventName,
              department:department,
              isTeam:"true"
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
            returnUrl: process.env.REACT_APP_FIREBASE_CHECKSTATUS_COLLECTION,
            
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



 

  

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    if (name === "teamSize") {
      const newSize = parseInt(value, 10);
      
      setFormData((prevData) => {
        const newMembers = Array.from({ length: newSize }, (_, index) => 
          prevData.teamMembers[index] || { name: "", studentId: "" }
        );
        
        return { ...prevData, teamSize: newSize, teamMembers: newMembers };
      });
  
    } else if (name.startsWith("teamMember")) {
      const [, field, index] = name.split("-"); 
      const idx = parseInt(index, 10);
  
      setFormData((prevData) => ({
        ...prevData,
        teamMembers: prevData.teamMembers.map((member, i) =>
          i === idx ? { ...member, [field]: value } : member
        ),
      }));
  
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };
  

  const handleSubmit= async ()=>{
    await addDataToCollection("Teams",{...formData,email:user?.email})
    await getSessionId();
  }


  const isFormValid = formData.teamName && formData.teamMembers.every(member => member.name && member.studentId);

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
                label="Team Name"
                name="teamName"
                value={formData.teamName}
                onChange={handleChange}
                sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)", 
                    borderRadius: "10px",
                    input: { color: "white" }, 
                    mb: 2,
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
                    input: { color: "white" }, 
                    mb: 2,
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
                    mb: 2,
                    "& .MuiInputLabel-root": { color: "white !important" }, 
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "white !important" }, 
                        "&:hover fieldset": { borderColor: "#00ffc8 !important" },
                        "&.Mui-focused fieldset": { borderColor: "#00ffc8 !important" },
                    },
                }}
            />
            <TextField
                        select
                        fullWidth
                        margin="normal"
                        label="Team Size"
                        name="teamSize"
                        value={formData.teamSize || 2}
                        onChange={handleChange}
                        sx={{
                            backgroundColor: "rgba(255, 255, 255, 0.1)", 
                            borderRadius: "10px",
                            input: { color: "white !important" }, 
                            mb: 2,
                            "& .MuiInputLabel-root": { color: "white !important" }, 
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": { borderColor: "white !important" }, 
                                "&:hover fieldset": { borderColor: "#00ffc8 !important" },
                                "&.Mui-focused fieldset": { borderColor: "#00ffc8 !important" },
                            },
                            "& .MuiSelect-icon": { 
                                color: "white !important",
                            },
                            "& .MuiSelect-select": { 
                              color: "white !important",
                          },
                        }}
                    >
                        {[2, 3, 4, 5, 6].map((size) => (
                            <MenuItem key={size} value={size}>{size} </MenuItem>
                        ))}
                    </TextField>
            {Array.from({ length: formData.teamSize }).map((_, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                    <TextField
                        fullWidth
                        margin="normal"
                        label={`Member ${index + 1} Name`}
                        name={`teamMember-name-${index}`}
                        value={formData.teamMembers[index].name}
                        onChange={handleChange}
                        sx={{
                            backgroundColor: "rgba(255, 255, 255, 0.1)", 
                            borderRadius: "10px",
                            input: { color: "white" }, 
                            mb: 2,
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
                        label={`Member ${index + 1} Student ID`}
                        name={`teamMember-studentId-${index}`}
                        value={formData.teamMembers[index].studentId}
                        onChange={handleChange}
                        sx={{
                            backgroundColor: "rgba(255, 255, 255, 0.1)", 
                            borderRadius: "10px",
                            input: { color: "white" }, 
                            mb: 2,
                            "& .MuiInputLabel-root": { color: "white !important" }, 
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": { borderColor: "white !important" }, 
                                "&:hover fieldset": { borderColor: "#00ffc8 !important" },
                                "&.Mui-focused fieldset": { borderColor: "#00ffc8 !important" },
                            },
                        }}
                    />
                </Box>
            ))}

            <Typography variant="h6" sx={{ mt: 2, color: "white" }}>Amount: ₹{amount}</Typography>
            
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

export default TeamRegistrationForm;
