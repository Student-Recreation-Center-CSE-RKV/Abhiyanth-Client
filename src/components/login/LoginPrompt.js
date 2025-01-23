import React, { useState } from "react";
import { Avatar, Menu, MenuItem } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom"; // Import useNavigate
const styles = {
  smallMenutext: {
    background: "linear-gradient(to right, purple, red )",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight:"bold",
    fontSize: "19px"
  },
}

export const LoginPrompt = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLoginClick = () => {
    navigate("/auth/login"); // Navigate to /auth/login
    handleClose(); // Close the menu after navigating
  };

  return (
    <>
      {/* Avatar Button */}
      <Avatar
        onClick={handleAvatarClick}
        sx={{
          cursor: "pointer",
          backgroundColor: "#1976d2",
          "&:hover": { backgroundColor: "#004ba0" },
        }}
      />

      {/* Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <MenuItem
  sx={{
    ...styles.smallMenutext, // Include the styles from `styles.smallMenutext`
    display: "flex",
    alignItems: "center",
    gap: 1,
  }}
  onClick={handleLoginClick}
>
          {/* Login Icon */}
          <LoginIcon />
          Login
        </MenuItem>
      </Menu>
    </>
  );
};
