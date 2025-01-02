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
      {[...Array(8)].map((_, index) => (
        <Grid item xs={12} sm={6} md={3} lg={3} key={index}>
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
           
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default GalleryShimmer;
