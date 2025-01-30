import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, TextField, MenuItem, Button, Box, Typography } from "@mui/material";
import { getUser } from "../../utils/getUser";
import { useEffect } from "react";

const IndividualRegistrationForm = ({ open, onClose, eventName, amount }) => {
    const [user, setUser] = useState(null);

  useEffect(() => {
    getUser().then(setUser).catch(console.error);
    
  }, []);

  const [formData, setFormData] = useState({
    name: user?.displayName ? user.displayName:"",
    studentId: "",
    batch: "",
    mobile:user?.phoneNumber? user.phoneNumber:""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isFormValid = formData.name && formData.studentId && formData.batch;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Registering for {eventName}</DialogTitle>
      <DialogContent>
        <Box sx={{ p: 2 }}>
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            value={user?.email? user.email:""}
            InputProps={{ readOnly: true }}
          />
          
          <TextField
            fullWidth
            margin="normal"
            label="Student ID"
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Mobile"
            name="studentId"
            value={formData.mobile}
            onChange={handleChange}
          />
          
          <TextField
            select
            fullWidth
            margin="normal"
            label="Batch"
            name="batch"
            value={formData.batch}
            onChange={handleChange}
          >
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
            disabled={!isFormValid}
          >
            Pay Now
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default IndividualRegistrationForm;