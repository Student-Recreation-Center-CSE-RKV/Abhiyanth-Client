import React from "react";
import { Box, Typography } from "@mui/material";
import backgroundImage from "../../assets/images/whatsabhiyanth_bgimg.jpeg";
import logoImage from "../../assets/images/Abhiyanthlogo2.png";

const text = {
  fontFamily: "Audiowide",
  fontWeight: "400",
};

const WhatsAbhiyanth = () => {
  return (
    <Box sx={{ marginTop: "5%" }}>
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          color: "#fff",
          mt: 2,
          padding: 4,
        }}
      >
        {/* Title Section */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="h4"
            sx={{
              ...text,
              textTransform: "uppercase",
              mb: 1,
            }}
          >
            What’s Abhiyanth...?
          </Typography>
        </Box>

        {/* Description and Logo Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4,
            mb: 4,
          }}
        >
          {/* Description */}
          <Box
            sx={{
              width: { xs: "100%", md: "65%" },
              textAlign: { xs: "center", md: "left" },
              px: 2,
              ...text,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                ...text,
                mb: 2,
              }}
            >
              "Unleashing Innovation, Empowering Creativity"
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 1, lineHeight: "1.6", ...text }}
            >
              Abhiyanth is the flagship annual techno-management fest of IIIT
              RK Valley, bringing together technology enthusiasts, innovators,
              and visionaries at a single place. With a rich legacy of fostering
              innovation and providing a platform for groundbreaking ideas,
              Abhiyanth offers an electrifying mix of competitions, workshops,
              talks, and cultural events.
            </Typography>
            <Typography
              variant="body1"
              sx={{ lineHeight: "1.6", ...text }}
            >
              Each year, Abhiyanth attracts thousands of students, researchers,
              and industry leaders, making it a hub of knowledge exchange and
              inspiration. This year, we’re gearing up for our biggest and best
              edition yet—and we invite you to be a part of this transformative
              journey!
            </Typography>
          </Box>

          {/* Logo */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: { xs: "100%", md: "30%" },
            }}
          >
            <img
              src={logoImage}
              alt="Abhiyanth Logo"
              style={{
                width: "100%",
                maxWidth: "300px",
                height: "auto",
              }}
            />
          </Box>
        </Box>

        {/* Sponsorship Section */}
        <Box sx={{ px: 2 }}>
          <Typography
            variant="h5"
            sx={{
              ...text,
              fontWeight: "bold",
              mb: 2,
            }}
          >
            Why Sponsor Abhiyanth?
          </Typography>
          <Typography variant="h6" sx={{ ...text, mb: 2 }}>
            "Be a Catalyst for Innovation"
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, ...text }}>
            Abhiyanth is IIIT RK Valley’s premier tech fest, attracting
            thousands of students, professionals, and tech enthusiasts from
            across the country. By sponsoring this event, you gain a unique
            platform to:
          </Typography>
          <ul style={{ marginLeft: "20px" }}>
            <li>
              <Typography variant="body1" sx={{ ...text }}>
                Showcase your brand to a highly engaged and diverse audience.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ ...text }}>
                Connect with the brightest young minds in technology and
                innovation.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ ...text }}>
                Strengthen your brand’s association with education, innovation,
                and growth.
              </Typography>
            </li>
          </ul>
          <Typography variant="h6" sx={{ mt: 2, mb: 1, ...text }}>
            Reach and Impact
          </Typography>
          <ul style={{ marginLeft: "20px" }}>
            <li>
              <Typography variant="body1" sx={{ ...text }}>
                <strong>Footfall:</strong> Over 10,000 attendees from top
                institutions and organizations.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ ...text }}>
                <strong>Digital Reach:</strong> Social media impressions
                exceeding [expected impressions] and website traffic of
                [expected views].
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ ...text }}>
                <strong>Media Coverage:</strong> Local and state press coverage,
                amplifying your brand’s visibility.
              </Typography>
            </li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default WhatsAbhiyanth;


