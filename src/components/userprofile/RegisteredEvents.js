import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
const events = [
    {
      name: "Short Film Contest",
      date: "2025-02-25T12:07:00+05:30",
      time: "16:07:00",
      venue: "Main Hall, RGUKT RK Valley",
      status: "upcoming",
    },
    {
      name: "Tech Talk",
      date: "2025-01-20T10:00:00+05:30",
      time: "10:00:00",
      venue: "Auditorium ,RGUKT RK Valley",
      status: "completed",
    },
    {
      name: "Short Film Contest",
      date: "2025-02-25T12:07:00+05:30",
      time: "16:07:00",
      venue: "Main Hall, RGUKT RK Valley",
      status: "upcoming",
    },
    {
      name: "Tech Talk",
      date: "2025-01-20T10:00:00+05:30",
      time: "10:00:00",
      venue: "Auditorium , RGUKT RK Valley",
      status: "completed",
    },
  ];
const RegisteredEvents = () => {
  return (
    <Box sx={{
        width:"90%",
        margin: "75px auto",
        borderRadius: "10px",
        padding: 2,
        background: "rgba(0, 0, 0, 0.20);",
        boxShadow: "0px 5px 15px rgba(173, 216, 230, 0.5)",
    }}>
      <Typography variant="h4" gutterBottom color="white" fontFamily="Audiowide" sx={{
          fontSize:{sm:26, md:30},
          textAlign:"center",
          marginTop:1
      }}>
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
            <Card
              key={index}
              sx={{
                width: "300px",
                display: "flex",
                flexDirection: "column",
                height: {sm:"250px", md:"270px"},
                backgroundColor: 'rgba(217, 217, 217, 0)',
                boxShadow: "0px 5px 15px rgba(173, 216, 230, 0.5)",
                border: "1px solid  #FF6AB7",
                color:"white",
                fontFamily:"Audiowide"
              }}
            >
              <CardContent>
                <Typography variant="h6" component="div" sx={{fontSize:{sm:20,md:22},fontFamily:"Audiowide",color:"#008a73"}}>
                  {event.name}
                </Typography>
                <Typography variant="body2"sx={{fontSize:{sm:18,md:19},fontFamily:"Audiowide"}}>
                  Date: {new Date(event.date).toLocaleDateString()}
                </Typography>
                <Typography variant="body2" sx={{fontSize:{sm:18,md:19},fontFamily:"Audiowide"}}>
                  Time: {event.time}
                </Typography>
                <Typography variant="body2" sx={{fontSize:{sm:18,md:19},fontFamily:"Audiowide"}}>
                  Venue: {event.venue}
                </Typography>
                <Typography
                  variant="body2"
                  color={event.status === "upcoming" ? "primary" : "error"}
                  sx={{fontSize:{sm:18,md:20},
                  fontFamily:"Audiowide"
                }}
                >
                  Status: {event.status}
                </Typography>
              </CardContent>
              <Typography
                component="a"
                href="#"
                sx={{
                  fontFamily: "Audiowide",
                  color: "#00B093",
                  textDecoration: "none",
                  '&:hover': {
                    textDecoration: "underline",
                    color: "#008a73",
                  },
                  fontSize: { sm: 17, md: 19 },
                  cursor: "pointer",
                  display: "block",
                  textAlign: "center",
                  marginBottom: 1,
                }}
                onClick={() => alert(`Explore ${event.name}`)}
              >
                Explore
              </Typography>
            </Card>
          ))
        ) : (
          <Typography variant="body2" >
            No registered events found.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default RegisteredEvents;

