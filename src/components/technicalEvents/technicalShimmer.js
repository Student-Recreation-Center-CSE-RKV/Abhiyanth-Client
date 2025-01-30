import React from "react";
import { Card, CardContent, Box, Grid } from "@mui/material";
import { styled } from "@mui/system";

// Styled Skeleton with Glow Effect
const GlowSkeleton = styled("div")(({ theme, width, height, borderRadius }) => ({
  width: width || "100%",
  height: height || "20px",
  borderRadius: borderRadius || "4px",
  background: `linear-gradient(90deg, #3a3a3a 25%, #505050 50%, #3a3a3a 75%)`,
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

const TechnicalShimmer = () => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "auto",
        backgroundColor: "black",
        color: "white",
        paddingTop: "1rem",
        paddingInline: "1rem",
        border: "1px solid #505050",
        borderRadius: "20px",
        position: "relative",
        overflow: "hidden",
        // eslint-disable-next-line
        ["@media (max-width: 376px)"]: {
          maxWidth: "95%",
          paddingInline: "0.5rem",
          minHeight: "400px",
        },
      }}
    >
      {/* Shimmer for image */}
      <GlowSkeleton
        height="150px"
        borderRadius="10px"
        style={{ border: "1px solid #00B093", marginBottom: "10px" }}
      />

      {/* Shimmer for content */}
      <CardContent
        sx={{
          paddingLeft: "0",
          marginLeft: "0",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        {/* Title shimmer */}
        <GlowSkeleton width="80%" height="30px" />

        {/* Short description shimmer */}
        <GlowSkeleton width="100%" height="20px" />
        <GlowSkeleton width="90%" height="20px" />

        {/* Date and time shimmer */}
        <GlowSkeleton width="50%" height="20px" />
        <GlowSkeleton width="50%" height="20px" />

        {/* Sponsors shimmer */}
        <Box sx={{ marginTop: "1rem", width: "100%" }}>
          <GlowSkeleton width="30%" height="20px" />
          <Grid container spacing={1} sx={{ marginTop: "0.5rem" }}>
            <Grid item>
              <GlowSkeleton width="60px" height="30px" borderRadius="15px" />
            </Grid>
            <Grid item>
              <GlowSkeleton width="60px" height="30px" borderRadius="15px" />
            </Grid>
          </Grid>
        </Box>

        {/* Button shimmer */}
        <GlowSkeleton
          width="60%"
          height="40px"
          borderRadius="10px"
          style={{ marginTop: "1rem" }}
        />
      </CardContent>
    </Card>
  );
};

export default TechnicalShimmer;
