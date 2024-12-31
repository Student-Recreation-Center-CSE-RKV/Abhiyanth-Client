import React from "react";
import { Box, Button, Typography } from "@mui/material";
import  audience  from '../assets/images/launching.jpeg';

const LaunchPage = ({ setFlag }) => {
    const handleClick = () => {
        setFlag(true); 
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
                backgroundImage: `url(${audience})`,
                backgroundSize: "cover",
                color: "white",
                textAlign: "center",
                padding: "20px",
                position: "relative",
            }}
        >
            {/* Honourable Director Section */}
            <Box
                sx={{
                    position: "absolute",
                    bottom: "0%",
                    textAlign: "center",
                }}
            >
                <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                        fontWeight: "bold",
                        fontFamily: "Audiowide",
                    }}
                >
                    Launch By Honourable Director
                </Typography>
                <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                        fontStyle: "italic",
                        fontFamily: "Audiowide",
                    }}
                >
                    Prof. AVSS Kumara Swami Guptha
                </Typography>
            </Box>

            {/* Launch Button */}
            <Button
  variant="secondary"
  onClick={handleClick}
  sx={{
    position: "absolute",
    bottom: "15%",
    padding: "15px 40px",
    fontSize: "1.5rem",
    fontWeight: "bold",
    borderRadius: "8px",
    fontFamily: "Audiowide",
    backgroundColor: "#ffffff", // White background
    color: "#000000", // Black text for contrast
    '&:hover': {
      backgroundColor: "#f0f0f0", // Slightly darker shade on hover
    },
  }}
>
  Launch Website
</Button>

        </Box>
    );
};

export default LaunchPage;
