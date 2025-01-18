import React from "react";
import {
  Card,
  CardContent,
  Skeleton,
  Box,
  Grid,
} from "@mui/material";

export default function TechnicalShimmer() {
  return (
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
        overflow: "hidden",
        ["@media (max-width: 376px)"]: {
          maxWidth: "95%",
          paddingInline: "0.5rem",
          minHeight: "400px",
        },
      }}
    >
      {/* Shimmer for image */}
      <Skeleton
        variant="rectangular"
        animation="wave"
        height={150}
        sx={{
          border: "1px solid #00B093",
          borderRadius: "10px",
          marginBottom: "10px",
        }}
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
        <Skeleton
          variant="text"
          animation="wave"
          width="80%"
          height={30}
          sx={{ backgroundColor: "#3a3a3a" }}
        />

        {/* Short description shimmer */}
        <Skeleton
          variant="text"
          animation="wave"
          width="100%"
          height={20}
          sx={{ backgroundColor: "#3a3a3a" }}
        />
        <Skeleton
          variant="text"
          animation="wave"
          width="90%"
          height={20}
          sx={{ backgroundColor: "#3a3a3a" }}
        />

        {/* Date and time shimmer */}
        <Skeleton
          variant="text"
          animation="wave"
          width="50%"
          height={20}
          sx={{ backgroundColor: "#3a3a3a" }}
        />
        <Skeleton
          variant="text"
          animation="wave"
          width="50%"
          height={20}
          sx={{ backgroundColor: "#3a3a3a" }}
        />

        {/* Sponsors shimmer */}
        <Box sx={{ marginTop: "1rem", width: "100%" }}>
          <Skeleton
            variant="text"
            animation="wave"
            width="30%"
            height={20}
            sx={{ backgroundColor: "#3a3a3a" }}
          />
          <Grid container spacing={1} sx={{ marginTop: "0.5rem" }}>
            <Grid item>
              <Skeleton
                variant="rectangular"
                animation="wave"
                width={60}
                height={30}
                sx={{
                  borderRadius: "15px",
                  backgroundColor: "#3a3a3a",
                }}
              />
            </Grid>
            <Grid item>
              <Skeleton
                variant="rectangular"
                animation="wave"
                width={60}
                height={30}
                sx={{
                  borderRadius: "15px",
                  backgroundColor: "#3a3a3a",
                }}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Button shimmer */}
        <Skeleton
          variant="rectangular"
          animation="wave"
          width="60%"
          height={40}
          sx={{
            marginTop: "1rem",
            borderRadius: "10px",
            backgroundColor: "#3a3a3a",
          }}
        />
      </CardContent>
    </Card>
  );
}