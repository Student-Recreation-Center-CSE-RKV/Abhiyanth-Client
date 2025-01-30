import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import WifiOffIcon from "@mui/icons-material/WifiOff";
import { useNavigate } from "react-router-dom";

const SomethingWentWrong = () => {
  const navigate = useNavigate();

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <Box sx={{ mb: 2 }}>
        <WifiOffIcon sx={{ fontSize: 80, color: "error.main" }} />
      </Box>
      <Typography variant="h4" fontWeight="bold" color="text.primary" gutterBottom>
        Something Went Wrong
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        Oops! It looks like there’s an issue. Please check your internet connection and try again.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 3 }}
        onClick={() => navigate("/")}
      >
        Try Again
      </Button>
    </Container>
  );
};

export default SomethingWentWrong;
