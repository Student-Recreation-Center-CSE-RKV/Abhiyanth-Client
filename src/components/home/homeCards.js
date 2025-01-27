import React from "react";
import { Box, Grid } from "@mui/material";
import CustomCard from "../general/CustomCard";
import techevents from "../../assets/images/techevents_image.png";
import cultural from "../../assets/images/culturals_image.png";
import stalls from "../../assets/images/stalls_image.png";
import bgHome from "../../assets/images/bg_home.png";
import projects from "../../assets/images/stalls/project.jpg";
import { useNavigate } from "react-router-dom";

const HomeCards = () => {
    const navigate = useNavigate(); // Use navigate hook for navigation

    const titleStyles = {
        fontFamily: "Audiowide",
        fontSize: "28px",
        fontWeight: "600",
        lineHeight: "30.8px",
        letterSpacing: "-0.01em",
        textAlign: "center",
        textUnderlinePosition: "from-font",
        textDecorationSkipInk: "none",
        color: "white",
    };

    const contentStyles = {
        fontFamily: "Averia Sans Libre",
        fontSize: "20px",
        fontWeight: "400",
        lineHeight: "18.9px",
        textAlign: "center",
        textUnderlinePosition: "from-font",
        textDecorationSkipInk: "none",
        height: "155px",
    };

    const cardStyles = {
        background: "rgba(255, 255, 255, 0.1)", // Glass effect
        backdropFilter: "blur(10px)", // Glass effect blur
        boxShadow: "0px 10px 20px rgba(244, 243, 243, 0.3)", // Soft shadow for depth
        borderRadius: "10px",
        border: "0.2px solid gray",
        color: "white",
        display: "flex",
        '&:hover': {
            transform: "scale(1.05)", // Scale the card on hover
            transition: "transform 0.3s ease-in-out", // Smooth transition for the scale effect
            boxShadow: "0 20px 20px rgba(224, 222, 222, 0.3)",
            backdropFilter: "none", // Glass effect blur
        },
        flexDirection: "column", // Ensure the content inside the card stretches
        minHeight: "300px", // Set a minimum height for all cards
        flexGrow: 1, // Allow cards to grow in height equally
    };

    const footerButtonStyles = {
        backgroundColor: "#275FC1",
        color: "#ffffff",
        textDecoration: "none",
        padding: "5px 10px",
        borderRadius: "5px",
        boxShadow: "5px 5px 2px #FF6AB7", // Pinkish shadow
        '&:hover': {
            textDecoration: "underline",
            backgroundColor: "#275FD1",
        },
        fontSize: "19px",
        cursor: "pointer",
        textAlign: "center",
        display: "block",
        marginBottom: "1rem",
        width: "fit-content",
        margin: "auto",
    };

    return (
        <Box
            sx={{
                backgroundImage: `url(${bgHome})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                bgcolor: "rgba(0, 0, 0, 0.5)",
                padding: "1rem 0", // Add padding to top and bottom
            }}
        >
            <Grid
                container
                spacing={4}
                sx={{
                    margin: "0 auto", // Center the grid
                }}
            >
                <Grid item xs={12} sm={6} md={3}>
                    <CustomCard
                        title="Technical Events"
                        image={techevents}
                        content={[{ label: "", value: "As a part of Abhiyanth, various technical events are conducted to foster innovation and technical skills. These include webinars, hackathons, tech expos, coding contests, and more. Explore a world of knowledge and creativity." }]}
                        footer="See All Technical Events"
                        titleStyles={titleStyles}
                        contentStyles={contentStyles}
                        cardStyles={cardStyles}
                        footerButtonStyles={footerButtonStyles}
                        onFooterClick={() => navigate("/technicalEvents")}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <CustomCard
                        title="Cultural Events"
                        image={cultural}
                        content={[{ label: "", value: "Experience the joy and vibrancy of Abhiyanth with cultural and recreational events. Highlights include dances, flash mobs, singing performances, and other fun activities that bring everyone together." }]}
                        footer="See All Cultural Events"
                        titleStyles={titleStyles}
                        contentStyles={contentStyles}
                        cardStyles={cardStyles}
                        footerButtonStyles={footerButtonStyles}
                        onFooterClick={() => navigate("/events")}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <CustomCard
                        title="Stalls"
                        image={stalls}
                        content={[{ label: "", value: "Relish delicious food and unique items at the Abhiyanth stalls. From local delicacies to fun games, our stalls have something for everyone to enjoy." }]}
                        footer="See All Stalls"
                        titleStyles={titleStyles}
                        contentStyles={contentStyles}
                        cardStyles={cardStyles}
                        footerButtonStyles={footerButtonStyles}
                        onFooterClick={() => navigate("/stalls")}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <CustomCard
                        title="Projects"
                        image={projects}
                        content={[{
                            label: "",
                            value: "Discover innovative technical projects designed and implemented by RGUKT RK Valley students. These projects highlight their creativity, problem-solving skills, and technical expertise across various domains.",
                        }]}
                        footer="Explore Projects"
                        titleStyles={titleStyles}
                        contentStyles={contentStyles}
                        cardStyles={cardStyles}
                        footerButtonStyles={footerButtonStyles}
                        onFooterClick={() => navigate("/projectShowCase")}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default HomeCards;
