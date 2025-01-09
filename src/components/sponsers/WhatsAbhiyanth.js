import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import backgroundImage from "../../assets/images/whatsabhiyanth_bgimg.jpeg";
import logoImage from "../../assets/images/Abhiyanthlogo2.png";

const text = {
  color: "#FFF",
  fontFamily: "Averia Sans Libre",
  fontSize: { xs: "18px", sm: "20px", md: "22px", lg: "28px" },
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
};

const WhatsAbhiyanth = () => {
  return (
    <Box sx={{ mt: { xs: "3%", md: "5%" } }}>
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundColor: "rgba(0, 0, 0, 0.60)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          width: "100%",
          color: "#fff",
          padding: { xs: 2, sm: 4 },
        }}
      >
        {/* Title Section */}
        <Box sx={{ textAlign: "center", mb: { xs: 2, md: 4 } }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Audiowide",
              fontWeight: "400",
              textTransform: "uppercase",
              fontSize: { xs: "28px", sm: "36px", md: "48px" },
              mt:{xs:4}
            }}
          >
            What’s Abhiyanth...?
          </Typography>
        </Box>

        {/* Description and Logo Section */}
        <Grid
          container
          spacing={4}
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            mb: 1,
          }}
        >
          {/* Description */}
          <Grid item xs={12} md={8}>
            <Typography
              variant="h6"
              sx={{
                ...text,
                mb: { xs: 2, md: 3 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              "Unleashing Innovation, Empowering Creativity"
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 2, lineHeight: "1.6", ...text }}
            >
              &nbsp; &nbsp; &nbsp; &nbsp;Abhiyanth is the flagship annual
              techno-management fest of IIIT RK Valley, bringing together
              technology enthusiasts, innovators, and visionaries at a single
              place. With a rich legacy of fostering innovation and providing a
              platform for groundbreaking ideas, Abhiyanth offers an
              electrifying mix of competitions, workshops, talks, and cultural
              events.
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
          </Grid>

          {/* Logo */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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
          </Grid>
        </Grid>

        {/* Sponsorship Section */}
        <Box>
          <Typography
            variant="h3"
            sx={{
              ...text,
              fontWeight: "bold",
              fontSize: { xs: "32px", sm: "40px", md: "50px" },
              mb: { xs: 2, md: 3 },
            }}
          >
            Why Sponsor Abhiyanth?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              ...text,
              mb: { xs: 2, md: 3 },
            }}
          >
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
          <Typography
            variant="h6"
            sx={{ mt: 2, mb: 1, ...text }}
          >
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
