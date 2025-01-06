// src/components/CarouselShimmer.js
import React from "react";
import { Box, Skeleton } from "@mui/material";

const CarouselShimmer = () => {
  const shimmerContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: "80vh",
    borderRadius: "10px",
    overflow: "hidden",
    padding: "10px",
  };

  return (
    <Box sx={shimmerContainerStyle}>
      <Skeleton
        variant="rectangular"
        width="90%"
        height="90%"
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