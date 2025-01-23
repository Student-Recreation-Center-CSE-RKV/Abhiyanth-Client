// src/components/CarouselShimmer.js
import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/system";

// Styled Skeleton with Glow Effect
const GlowSkeleton = styled("div")(({ theme }) => ({
  width: "90%",
  height: "100%",
  borderRadius: "10px",
  background: `linear-gradient(90deg, #505050 25%, #707070 50%, #505050 75%)`,
  backgroundSize: "200% 100%",
  animation: "glow 1.5s infinite",
  "@keyframes glow": {
    "0%": {
      backgroundPosition: "200% 0",
    },
    "100%": {
      backgroundPosition: "-200% 0",
    },
  },
}));

const CarouselShimmer = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // xs and sm screens

  const shimmerContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: isSmallScreen ? "37vh" : "80vh", // Adjust height based on screen size
    borderRadius: "10px",
    overflow: "hidden",
    padding: "10px",
  };

  return (
    <Box sx={shimmerContainerStyle}>
      <GlowSkeleton />
    </Box>
  );
};

export default CarouselShimmer;
