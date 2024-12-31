// src/components/GalleryShimmer.js
import React from "react";
import { Card, Skeleton, Grid } from "@mui/material";

const GalleryShimmer = () => {
  const shimmerCardStyle = {
    backgroundColor: "black",
    borderRadius: "10px",
    padding: "10px",
    margin: "10px",
    border: "1px solid #505050",
  };

  return (
    <Grid container spacing={2} sx={{ padding: "20px" }}>
      {[...Array(6)].map((_, index) => (
        <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
          <Card sx={shimmerCardStyle}>
            <Skeleton
              variant="rectangular"
              height={200}
              animation="wave"
              sx={{
                borderRadius: "10px",
                backgroundColor: "#505050",
              }}
            />
            <Skeleton
              variant="text"
              height={30}
              width="60%"
              animation="wave"
              sx={{
                marginTop: "10px",
                backgroundColor: "#505050",
              }}
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default GalleryShimmer;
