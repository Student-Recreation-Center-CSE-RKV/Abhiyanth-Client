import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { audience } from '../assets/images';
import logo from "../assets/images/Rgukt_Logo_White.png"

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
            {/* RGUKT Header */}
            <Box
                sx={{
                    position: "absolute",
                    top: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent:"center",
                    gap: "10px",
                }}
            >
                <img
                    src={logo}
                    alt="RGUKT Logo"
                    style={{ width: "60px", height: "60px" }}
                />
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        fontFamily: "Audiowide",
                        color: "white",
                    }}
                >
                    Rajiv Gandhi University of Knowledge Technologies - RGUKT RK Valley
                </Typography>
            </Box>

            {/* Title */}
            <Typography
                variant="h2"
                gutterBottom
                sx={{
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    fontFamily: "Audiowide",
                    marginTop: "10px",
                }}
            >
                ABHIYANTH 2K25
            </Typography>

            {/* Subtitle */}
            <Typography
                variant="h5"
                gutterBottom
                sx={{
                    maxWidth: "800px",
                    lineHeight: "1.8",
                    marginBottom: "20px",
                    fontFamily: "Audiowide",
                    padding: "10px",
                }}
            >
                Let's Rock! Let's Begin! <br />
                A celebration of innovation, creativity, and talent like never before.
            </Typography>

            {/* Honourable Director Section */}
            <Typography
                variant="h4"
                gutterBottom
                sx={{
                    fontWeight: "bold",
                    marginTop: "20px",
                    fontFamily: "Audiowide",
                }}
            >
                Launch By Honourable Director
            </Typography>
            <Typography
                variant="h3"
                gutterBottom
                sx={{
                    fontStyle: "italic",
                    fontFamily: "Audiowide",
                }}
            >
                Prof. AVSS Kumara Swami Guptha
            </Typography>

            {/* Launch Button */}
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
                    fontFamily: "Audiowide",
                }}
            >
                Launch Website
            </Button>
        </Box>
    );
};

export default LaunchPage;
