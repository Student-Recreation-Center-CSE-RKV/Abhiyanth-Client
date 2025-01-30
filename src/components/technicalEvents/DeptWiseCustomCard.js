import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Grid2,
  Chip,
} from "@mui/material";
import hackathon from "../../assets/images/hackathon.jpeg";
import { extractDateTime } from "../../utils/timeStampToDate";
import { useNavigate } from "react-router-dom";

export default function CustomCard({ event,department }) {
  const navigate=useNavigate();
  const dd=extractDateTime(event.date)
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
        overflow: "hidden", // Prevents content overflow
        // eslint-disable-next-line
        ["@media (max-width: 376px)"]: {
          maxWidth: "95%", // Adjust width for very small screens
          paddingInline: "0.5rem",
          minHeight: "400px", // Reduce height if necessary
        },
      }}
    >
      {/* Full-width image */}
      <CardMedia
        component="img"
        height="150"
        image={hackathon}
        alt="Top full-width image"
        sx={{
          border: "1px solid #00B093",
          borderRadius: "10px",
          marginBottom: "10px",
        }}
      />

      {/* Heading and content */}
      <CardContent
        sx={{
          paddingLeft: "0",
          marginLeft: "0",
          overflow: "hidden", // Hide overflowing content
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontFamily: "Audiowide",
            fontSize: { xs: "18px", sm: "22px" }, // Responsive font size
            lineHeight: "1.2",
            color: " #00B093",
            width: "100%",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {event.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontFamily: "Audiowide",
            fontSize: { xs: "14px", sm: "16px" }, // Responsive font size
            lineHeight: "1.5",
            color: "white",
            width: "100%",
            overflowWrap: "break-word", // Handle long words
            wordBreak: "break-word", // Handle long words
            display: "-webkit-box",
            WebkitLineClamp: 3, // Limits to 3 lines
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {event.short_description}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontFamily: "Audiowide",
            fontSize: { xs: "14px", sm: "16px" }, // Responsive font size
            lineHeight: "1.5",
            color: "white",
            width: "100%",
            overflowWrap: "break-word", // Handle long words
            wordBreak: "break-word", // Handle long words
            display: "-webkit-box",
            WebkitLineClamp: 3, // Limits to 3 lines
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          Date:{dd.date}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontFamily: "Audiowide",
            fontSize: { xs: "14px", sm: "16px" }, // Responsive font size
            lineHeight: "1.5",
            color: "white",
            width: "100%",
            overflowWrap: "break-word", // Handle long words
            wordBreak: "break-word", // Handle long words
            display: "-webkit-box",
            WebkitLineClamp: 3, // Limits to 3 lines
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          Time:{dd.time}
        </Typography>

        <Grid2 container spacing={1} sx={{ marginTop: "1rem" }}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontFamily: "Audiowide",
              fontSize: "14px",
              lineHeight: "1.5",
              color: "white",
              width: "90%",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            Sponsored by:
          </Typography>
          {event.sponsors.map((sponsor, index) => (
            <Grid2 key={index}>
              <Chip
                label={sponsor}
                color="primary"
                sx={{
                  background:
                    "linear-gradient(180deg, #FF6AB7 0%, #6AE4FF 100%)",
                  color: "black",
                  fontFamily: "Audiowide",
                }}
              />
            </Grid2>
          ))}
        </Grid2>

        <Button
          size="small"
          sx={{
            marginTop: 2,
            fontFamily: "Audiowide",
            fontSize: { xs: "14px", sm: "16px" },
            lineHeight: "1.2",
            color: " #00B093",
          }}
          onClick={()=>{navigate(`/technicalEvents/${department}/${event.id}`)}}
        >
          Know more
        </Button>
      </CardContent>
    </Card>
  );
}
