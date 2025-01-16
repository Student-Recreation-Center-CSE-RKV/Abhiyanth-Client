import React, { useState } from "react";
import hackathon from "../../assets/images/hackathon.jpeg"
import {
  Box,
  Typography,
  Card,
  CardMedia,
  Button,
} from "@mui/material";
import { getTechnicalEventById } from "../../api/technicalEvents";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { extractDateTime } from "../../utils/timeStampToDate";

export default function TechEventDetails() {

  const { department, id } = useParams();
  const [event, setEvent] = useState(null)
  const [loading, setLoading] = useState(false);

  const fetchDepartmentEvent = async (dept, id) => {
    console.log(`Fetching events for department: ${dept} ${id}`);
    try {
      setLoading(true);
      const event = await getTechnicalEventById(dept, id);
      setEvent(event);
    } catch (error) {

    } finally {
      setLoading(false);
    }

  };


  useEffect(() => {
    if (department, id) {
      fetchDepartmentEvent(department, id);
    }
  }, [department, id]);


  if (loading) {
    return <div>Loading...</div>;
  }

  
  if (!event) {
    return <Typography variant="h3" sx={{
      fontSize: { sm: 31, md: 35 },
      color: "#00B093",
      textAlign: "center",
      fontFamily: "Audiowide",
      marginTop: "100px"
    }}>
      No Event Data Available
    </Typography>
  }


  function getOrdinalSuffix(number) {
    const suffixes = ["th", "st", "nd", "rd"];
    const value = number % 100;
    return suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0];
  }


  return (
    <Box sx={{
      width: "90%",
      margin: "75px auto",
      // border:"1.5px solid #FF6AB7",
      borderRadius: "10px",
      padding: 2,
      background: "rgba(0, 0, 0, 0.20);",
      boxShadow: "0px 5px 15px rgba(173, 216, 230, 0.5)",
    }
    }
    >
      <Typography variant="h3" sx={{
        fontSize: { sm: 31, md: 35 },
        color: "#00B093",
        textAlign: "center",
        fontFamily: "Audiowide",
        marginBottom: 2
      }}>
        {event.title}
      </Typography>
      <Card sx={{ marginBottom: 2, textAlign: "center" }}>
        {event.image ? (
          <CardMedia
            component="img"
            sx={{ width: "100%", height: { sm: 400, md: 450 } }}
            image={event.image}
            alt={event.title}
          />
        ) : (
          <Box
            sx={{
              height: { sm: 400, md: 450 },
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 20,
              textAlign: "center"
            }}
          >
            No Image Available
          </Box>
        )}
      </Card>
      <Typography variant="h6" sx={{
        fontSize: { sm: 20, md: 25 },
        color: "white",
        fontFamily: "Audiowide"
      }}>
        Sponsored by : &nbsp;
        {event.sponsors.join(", ")}
      </Typography>
      <Typography variant="h6" sx={{ marginBottom: 1, fontFamily: "Audiowide", color: "white", fontSize: { sm: 20, md: 25 } }}>
        Description :
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 2, fontFamily: "Audiowide", color: "white", fontSize: { sm: 20, md: 22 } }}>
        &nbsp; &nbsp;&nbsp;{event.description}
      </Typography>
      <Typography varient="h3" sx={{ color: "#C91C75", textAlign: "center", marginBottom: 1, fontFamily: "Audiowide", fontSize: 30 }}>
        Event Details
      </Typography>
      <Box>
        <Typography variant="body1" sx={{ marginBottom: 1, fontFamily: "Audiowide", color: "white", fontSize: { sm: 20, md: 25 } }}>
          Date : {extractDateTime(event.date).date}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 1, fontFamily: "Audiowide", color: "white", fontSize: { sm: 20, md: 25 } }}>
          Time : {extractDateTime(event.date).time}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 1, fontFamily: "Audiowide", color: "white", fontSize: { sm: 20, md: 25 } }}>
          Venue : {event.venue}
        </Typography>
      </Box>
      <Typography variant="h5" sx={{ marginBottom: 1,paddingTop:"20px", fontFamily: "Audiowide", color: "white", fontSize: { sm: 22, md: 28 } }}>Prizes : </Typography>
      <Typography sx={{ fontFamily: "Audiowide", color: "white", marginBottom: 1, fontSize: { sm: 20, md: 23 } }}>
        {
          event.prizes.map((prize, index) => <li key={index}>{index + 1}{getOrdinalSuffix(index + 1)} Prize: {prize}</li>)
        }
      </Typography>
      <Box sx={{ textAlign: "center", marginTop: 2 }}>
        <Button
          href={event.registration_link}
          target="_blank"
          disabled={!event.registration_link}
          sx={{
            fontFamily: "Audiowide",
            color: "white !important",
            backgroundColor: "#00B093",
            '&:hover': {
              backgroundColor: "#008a73", // Hover color
            },
            textTransform: "none",
            fontSize: { sm: 18, md: 20 },
            cursor: "pointer !important",
          }}
        >
          Register
        </Button>

      </Box>
      {
        event.result.length > 0 && (
          <Box sx={{ marginBottom: 1 }}>
            <Typography variant="h5" sx={{ marginBottom: 1, fontFamily: "Audiowide", color: "white", fontSize: { sm: 22, md: 28 } }}>
              Winners :
            </Typography>
            <Typography sx={{ fontFamily: "Audiowide", color: "white", marginBottom: 1, fontSize: { sm: 20, md: 23 } }}>
              {
                event.result.map((winner, index) => <li key={index}>{index + 1}{getOrdinalSuffix(index + 1)} : {winner}</li>)
              }
            </Typography>
          </Box>
        )
      }

    </Box>
  )


}
