import React from "react";
import { Box, Typography } from "@mui/material";
import src_logo from "../../assets/images/src_logo_white.jpeg";
import delit from "../../assets/images/delit_logo.jpeg";
import fmc from "../../assets/images/fmc_logo.png";
import think from "../../assets/images/think_logo.png";

function ParticipatingClubs() {
  const clubs = [
    { name: "SRC CSE", logo: src_logo },
    { name: "De-Lit", logo: delit },
    { name: "FMC", logo: fmc },
    { name: "Think Finance", logo: think },
  ];

  const styles = {
    container: {
      padding: "20px",
      textAlign: "center",
    },
    grid: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
    },
    logoBox: {
      width: "120px",
      height: "120px",
      position: "relative",
      cursor: "pointer",
      borderRadius: "8px",
      overflow: "hidden",
      transition: "transform 0.3s ease",
      backgroundColor: "#f0f0f0",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    },
    logoImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "opacity 0.3s ease",
    },
    logoHoverOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      fontSize: "16px",
      fontWeight: "bold",
      color: "#FFFFFF",
      opacity: 0,
      transition: "opacity 0.3s ease",
    },
    logoBoxHovered: {
      transform: "scale(1.1)",
    },
    footerText: {
      marginTop: "40px",
      color: "#FFFFFF",
      fontFamily: "Roboto, sans-serif",
      fontSize: "18px",
      fontWeight: "bold",
    },
  };

  return (
    <Box style={styles.container}>
      <Typography
        sx={{
          fontFamily: "Audiowide, sans-serif",
          fontWeight: "bold",
          marginBottom: "20px",
          color: "#FFFFFF",
          fontSize: {
            xs: "20px", // Extra small screens
            sm: "25px", // Small screens
            md: "30px", // Medium screens
            lg: "35px", // Large screens
          },
        }}
      >
        Collaborative Efforts Of
      </Typography>
      <Box style={styles.grid}>
        {clubs.map((club, index) => (
          <Box
            key={index}
            style={styles.logoBox}
            onMouseOver={(e) => {
              e.currentTarget.querySelector(".hoverOverlay").style.opacity = 1;
              e.currentTarget.style.transform = styles.logoBoxHovered.transform;
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector(".hoverOverlay").style.opacity = 0;
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <img src={club.logo} alt={club.name} style={styles.logoImage} />
            <Box className="hoverOverlay" style={styles.logoHoverOverlay}>
              {club.name}
            </Box>
          </Box>
        ))}
      </Box>
      <Typography style={styles.footerText}>
        We are inviting other clubs to collaborate with us and make this event a grand success!
      </Typography>
    </Box>
  );
}

export default ParticipatingClubs;
