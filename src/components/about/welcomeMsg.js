import React from "react";
import { Box, Typography, Card, CardContent, Avatar } from "@mui/material";
import director from "../../assets/images/Director.png"
import ao from "../../assets/images/AO.png"

const WelcomeMessages = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        padding: 4,
        color: "#ffffff"
      }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          color: "#EFE1EE",
          textShadow: "1px 1px 1px #FF6AB7", // Heading shadow
        }}
      >
        From Director’s & AO’s Desk
      </Typography>

      {/* Director's Message */}
      <Card
        sx={{
          display: "flex",
          flexDirection: "row-reverse",
          backgroundColor: "rgba(38, 30, 53, 0.8)", // Ensure contrast
          borderRadius: 3,
          padding: 2,
          alignItems: "center",
          border: "1px #FF6AB7 solid",

        }}
      >
        <Avatar
          src={director}
          alt="Dr. AVSS Kumara Swamy Gupta"
          sx={{
            width: "23%",
            height: "auto",
            marginRight: "16px",
            border: "1px #FF6AB7 solid", 
            margin:"20px",
            boxShadow: '0px 4px 15px rgba(173, 216, 230, 0.5)'
          }}
        />
        <CardContent sx={{ flex: 1 }}>
          <Typography
            variant="body1"
            sx={{
              whiteSpace: "pre-line",
              marginBottom: 2,
              fontSize: "1.4rem",
              fontFamily: "Averia Sans Libre",
              color: "#ffffff",
            }}
          >
            As the Director of this esteemed institution, I am thrilled to
            announce Abhiyanth, our flagship Techno-Cultural-Management Fest, a
            celebration of innovation, creativity, and leadership. Abhiyanth is
            a dynamic platform that brings together engineering brilliance,
            cultural vibrance, and managerial expertise under one roof.
            {"\n\n"}
            This fest is not just an event but a movement designed to ignite
            young minds and provide a space for students to showcase their
            technical skills, artistic talents, and managerial prowess. With
            competitions, workshops, seminars, and cultural performances, we
            aim to promote holistic growth among participants.
          </Typography>
          <Box sx={{ textAlign: "left" }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", fontSize: "1.4rem", color: "#b3b3b3" }}
            >
              - Dr. AVSS Kumara Swamy Gupta
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ fontSize: "1rem", color: "#b3b3b3" }}
            >
              M Tech (RECW), Ph D (IITKGP)
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {/* Administrative Officer's Message */}
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "rgba(38, 30, 53, 0.8)", // Ensure contrast
          borderRadius: 1,
          padding: 2,
          alignItems: "center",
          border: "1px #FF6AB7 solid",
        }}
      >
        <Avatar
          src={ao}
          alt="Dr. P.Ravi Kumar"
          sx={{
            width: "23%",
            height: "auto",
            border: "1px #FF6AB7 solid",
            margin:"20px",
            boxShadow: '0px 4px 15px rgba(173, 216, 230, 0.5)'
          }}
        />
        <CardContent sx={{ flex: 1 }}>
          <Typography
            variant="body1"
            sx={{
              whiteSpace: "pre-line",
              marginBottom: 2,
              fontSize: "1.4rem",
              fontFamily: "Averia Sans Libre",
              color: "#ffffff",
            }}
          >
            As an Administrative Officer of our institution, It is my honour to
            welcome you all to our flagship event, Abhiyanth, a unique blend of
            technology, culture, and management. This fest showcases the
            creativity, innovation, and leadership skills of our students,
            making it a true celebration of talent and teamwork.
            {"\n\n"}
            I encourage each one of you to actively participate, learn, and make
            the most of this opportunity. Such events are vital in shaping
            well-rounded individuals and fostering collaboration among diverse
            talents. My sincere gratitude to the organising committee, faculty,
            and sponsors for their dedication. Let’s join hands to make
            Abhiyanth a grand success and a memorable experience for all. Thank
            You!
          </Typography>
          <Box sx={{ textAlign: "right" }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", fontSize: "1.4rem", color: "#b3b3b3" }}
            >
              - Dr. P.Ravi Kumar
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ fontSize: "1rem", color: "#b3b3b3" }}
            >
              M.E (IISc Bangalore), Ph D (University of AIZU, Japan)
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default WelcomeMessages;
