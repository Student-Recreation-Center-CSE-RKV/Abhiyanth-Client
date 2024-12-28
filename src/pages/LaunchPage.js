import React from "react";
import { Box, Button, Typography } from "@mui/material";

const LaunchPage = ({ setFlag }) => {
    const handleClick = () => {
        setFlag(true); // Set the flag to true when the button is clicked
    };

    return (
        <Box
            sx={{
                width: "100%",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #1e3c72, #2a5298, #1e3c72)",
                color: "white",
                textAlign: "center",
                padding: "20px",
            }}
        >
            <Typography 
                variant="h2" 
                gutterBottom 
                sx={{ fontWeight: "bold", textTransform: "uppercase" }}
            >
                Welcome to Abhiyanth
            </Typography>
            <Typography 
                variant="h5" 
                gutterBottom 
                sx={{ maxWidth: "800px", lineHeight: "1.8", marginBottom: "20px" }}
            >
                Let's Rock! Let's Begin! <br />
                A celebration of innovation, creativity, and talent like never before.
            </Typography>
            <Typography 
                variant="h6" 
                gutterBottom 
                sx={{ maxWidth: "800px", lineHeight: "1.6", marginBottom: "30px" }}
            >
                Abhiyanth is the annual tech fest organized by RGUKT RK Valley, where students showcase their technical expertise, participate in thrilling competitions, and connect with like-minded peers. It’s a stage for ideas, creativity, and teamwork to shine!
            </Typography>
            <Typography 
                variant="h4" 
                gutterBottom 
                sx={{ fontWeight: "bold", marginTop: "20px" }}
            >
                Launch By Honourable Director
            </Typography>
            <Typography 
                variant="h3" 
                gutterBottom 
                sx={{ fontStyle: "italic" }}
            >
                Prof. AVSS Kumara Swami Guptha
            </Typography>
            <Button
                variant="contained"
                color="secondary"
                onClick={handleClick}
                sx={{
                    marginTop: "40px",
                    padding: "15px 40px",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    borderRadius: "8px",
                }}
            >
                Launch Website
            </Button>
        </Box>
    );
};

export default LaunchPage;
