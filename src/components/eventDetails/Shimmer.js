// src/components/ShimmerCard.js
import React from "react";
import { Card, CardContent, Skeleton, Grid } from "@mui/material";
import { styled } from "@mui/system";

const GlowSkeleton = styled(Skeleton)(({ theme }) => ({
  background: `linear-gradient(90deg, #505050 25%, #707070 50%, #505050 75%)`,
  backgroundSize: "200% 100%",
  animation: "glow 1.5s infinite",
  borderRadius: "10px",
  "@keyframes glow": {
    "0%": {
      backgroundPosition: "200% 0",
    },
    "100%": {
      backgroundPosition: "-200% 0",
    },
  },
}));

const ShimmerCard = () => (
  <Card
    sx={{
      maxWidth: 345,
      margin: "auto",
      backgroundColor: "black",
      color: "white",
      paddingTop: "1rem",
      paddingInline: "1rem",
      border: "1px solid #505050 ",
      borderRadius: "20px",
      position: "relative",
    }}
  >
    <GlowSkeleton
      variant="rectangular"
      height={150}
      sx={{
        marginBottom: "10px",
      }}
    />
    <Grid container spacing={1}>
      <Grid item xs={6}>
        <GlowSkeleton
          variant="rectangular"
          height={100}
        />
      </Grid>
      <Grid item xs={6}>
        <GlowSkeleton
          variant="rectangular"
          height={100}
        />
      </Grid>
    </Grid>
    <CardContent>
      <GlowSkeleton
        variant="text"
        height={30}
        width="80%"
      />
      <GlowSkeleton
        variant="text"
        height={20}
        width="90%"
        sx={{ marginTop: "10px" }}
      />
      <GlowSkeleton
        variant="rectangular"
        height={40}
        width="60%"
        sx={{
          marginTop: "20px",
          borderRadius: "20px",
        }}
      />
    </CardContent>
  </Card>
);

export default ShimmerCard;
