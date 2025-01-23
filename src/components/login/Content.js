import * as React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import FeedbackRoundedIcon from "@mui/icons-material/FeedbackRounded";

const items = [
  {
    icon: <EventAvailableRoundedIcon sx={{ color: "white" }} />,
    title: "Event Registration",
    description:
      "Easily register for workshops, cultural programs, and competitions with our streamlined process.",
  },
  {
    icon: <StorefrontRoundedIcon sx={{ color: "white" }} />,
    title: "Stall Management",
    description:
      "Effortlessly manage and explore various stalls, from food to exhibitions, all in one place.",
  },
  {
    icon: <SchoolRoundedIcon sx={{ color: "white" }} />,
    title: "Workshops & Learning",
    description:
      "Browse and enroll in diverse workshops, led by industry experts and experienced speakers.",
  },
  {
    icon: <FeedbackRoundedIcon sx={{ color: "white" }} />,
    title: "Feedback Collection",
    description:
      "Share your experience and feedback about Abhiyanth, helping us improve year after year.",
  },
];

export default function Content() {
  return (
    <Stack
      sx={{
        flexDirection: "column",
        alignSelf: "center",
        gap: 4,
        maxWidth: 450,
      }}
    >
      {items.map((item, index) => (
        <Stack key={index} direction="row" sx={{ gap: 2 }}>
          {item.icon}
          <div>
            <Typography
              gutterBottom
              sx={{
                fontWeight: "medium",
                color: "white", // White font for the title
              }}
            >
              {item.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "white", // White font for the description
              }}
            >
              {item.description}
            </Typography>
          </div>
        </Stack>
      ))}
    </Stack>
  );
}
