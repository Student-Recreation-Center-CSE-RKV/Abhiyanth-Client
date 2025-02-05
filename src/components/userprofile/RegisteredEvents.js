import React from "react";
import { Box, Typography } from "@mui/material";
import CustomCard from "../general/CustomCard";

const events = [
  {
    title: "Short Film Contest",
    content: [
      { label: "Date", value: new Date("2025-02-25T12:07:00+05:30").toLocaleDateString() },
      { label: "Time", value: "16:07:00" },
      { label: "Venue", value: "Main Hall, RGUKT RK Valley" },
      {label: "Status" , value:"completed"}
    ],
    footer: "Know More",
  },
  {
    title: "Tech Talk",
    content: [
      { label: "Date", value: new Date("2025-01-20T10:00:00+05:30").toLocaleDateString() },
      { label: "Time", value: "10:00:00" },
      { label: "Venue", value: "Auditorium , RGUKT RK Valley" },
      {label: "Status" , value:"completed"}
    ],
    footer: "Know More",
  },
];

const RegisteredEvents = () => {
  return (
    <Box
      sx={{
        width: "90%",
        margin: "75px auto",
        borderRadius: "10px",
        padding: 2,
        background: "rgba(0, 0, 0, 0.20);",
        boxShadow: "0px 5px 15px rgba(173, 216, 230, 0.5)",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        color="white"
        fontFamily="Audiowide"
        sx={{
          fontSize: { sm: 26, md: 30 },
          textAlign: "center",
          marginTop: 1,
        }}
      >
        Previously Registered Events
      </Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        gap="20px"
        justifyContent="center"
        alignItems="center"
        marginTop="20px"
      >
        {events.length > 0 ? (
          events.map((event, index) => (
            <CustomCard
              key={index}
              title={event.title}
              content={event.content}
              footer={event.footer}
              onFooterClick={() => alert(`Explore ${event.title}`)}
            />
          ))
        ) : (
          <Typography variant="body2">No registered events found.</Typography>
        )}
      </Box>
    </Box>
  );
};

export default RegisteredEvents;