// src/components/ShimmerCard.js
import React from "react";
import { Card, CardContent, Skeleton, Grid } from "@mui/material";

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
    <Skeleton
      variant="rectangular"
      height={150}
      animation="wave"
      sx={{
        borderRadius: "10px",
        marginBottom: "10px",
        backgroundColor: "#505050",
      }}
    />
    <Grid container spacing={1}> {/* Use Grid container for spacing */}
      <Grid item xs={6}>
        <Skeleton
          variant="rectangular"
          height={100}
          animation="wave"
          sx={{
            borderRadius: "10px",
            backgroundColor: "#505050",
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <Skeleton
          variant="rectangular"
          height={100}
          animation="wave"
          sx={{
            borderRadius: "10px",
            backgroundColor: "#505050",
          }}
        />
      </Grid>
    </Grid>
    <CardContent>
      <Skeleton
        variant="text"
        height={30}
        width="80%"
        animation="wave"
        sx={{ backgroundColor: "#505050" }}
      />
      <Skeleton
        variant="text"
        height={20}
        width="90%"
        animation="wave"
        sx={{ backgroundColor: "#505050", marginTop: "10px" }}
      />
      <Skeleton
        variant="rectangular"
        height={40}
        width="60%"
        animation="wave"
        sx={{
          backgroundColor: "#505050",
          marginTop: "20px",
          borderRadius: "20px",
        }}
      />
    </CardContent>
  </Card>
);

export default ShimmerCard;
