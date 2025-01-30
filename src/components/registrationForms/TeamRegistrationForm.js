import React, { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, TextField, MenuItem, Button, Box, Typography } from "@mui/material";
import { getUser } from "../../utils/getUser";

const TeamRegistrationForm = ({ open, onClose, eventName, amount }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser().then(setUser).catch(console.error);
  }, []);

  const [formData, setFormData] = useState({
    teamName: "",
    teamSize: 2,
    teamMembers: Array(2).fill({ name: "", studentId: "" }),
    email: user?.email || "", // Email field for the team
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "teamSize") {
      setFormData({
        ...formData,
        teamSize: value,
        teamMembers: Array(value).fill({ name: "", studentId: "" }),
      });
    } else if (name.includes("teamMember")) {
      const [key, index] = name.split("-");

      const updatedMembers = [...formData.teamMembers];
      updatedMembers[index][key] = value;

      setFormData({ ...formData, teamMembers: updatedMembers });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const isFormValid = formData.teamName && formData.teamMembers.every(member => member.name && member.studentId);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Registering for {eventName}</DialogTitle>
      <DialogContent>
        <Box sx={{ p: 2 }}>
          <TextField
            fullWidth
            margin="normal"
            label="Team Name"
            name="teamName"
            value={formData.teamName}
            onChange={handleChange}
          />
          
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            value={formData.email}
            InputProps={{ readOnly: true }}
          />

          <TextField
            select
            fullWidth
            margin="normal"
            label="Team Size"
            name="teamSize"
            value={formData.teamSize}
            onChange={handleChange}
          >
            {[2, 3, 4, 5, 6].map((size) => (
              <MenuItem key={size} value={size}>{size}</MenuItem>
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
              />
              <TextField
                fullWidth
                margin="normal"
                label={`Member ${index + 1} Student ID`}
                name={`teamMember-studentId-${index}`}
                value={formData.teamMembers[index].studentId}
                onChange={handleChange}
              />
            </Box>
          ))}

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

export default TeamRegistrationForm;
