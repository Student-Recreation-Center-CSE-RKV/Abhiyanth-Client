
import React from "react";
import { Card, Grid, Skeleton } from "@mui/material";
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
            <GlowSkeleton
              variant="rectangular"
              height={200}
              sx={{
                borderRadius: "10px",
              }}
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default GalleryShimmer;
