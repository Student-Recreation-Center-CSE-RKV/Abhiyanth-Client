// src/components/CarouselShimmer.js
import React from "react";
import { Box, Skeleton, useMediaQuery, useTheme } from "@mui/material";

const CarouselShimmer = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // xs and sm screens

  const shimmerContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: isSmallScreen ? "50vh" : "80vh", // Adjust height based on screen size
    borderRadius: "10px",
    overflow: "hidden",
    padding: "10px",
  };

  return (
    <Box sx={shimmerContainerStyle}>
      <Skeleton
        variant="rectangular"
        width="90%"
        height="100%" // Matches container height
        animation="wave"
        sx={{
          borderRadius: "10px",
          backgroundColor: "#505050",
        }}
      />
    </Box>
  );
};

export default CarouselShimmer;
