import React from 'react';
import OurTeamCard from '../ourTeam/ourTeamCard';
import { Box, Typography, Grid2, useMediaQuery, useTheme } from '@mui/material';
import sreekanth from "../../assets/images/ourTeam/sreekanth.jpeg";
import rajeswari from "../../assets/images/ourTeam/rajeswari.jpeg";
import achyutha from "../../assets/images/ourTeam/achyutha.jpeg";
import revanth from "../../assets/images/ourTeam/revanth.jpeg";



import "../../styles/about.css";

export default function OurTeam() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const frontendTeam = [
        {
            image: revanth,
            name: 'J.Revanth Kumar',
            position:'co ordinator',
            contact:"Contact: 6309380007",
            linkdeinURL: 'https://www.linkedin.com/in/jilakararevanthkumar/',
            instagramURL: 'https://instagram.com/revanth_kumar_j',
        },
        {
            image: achyutha,
            name: 'V.Achyutha',
            position:'co ordinator',
            contact:"Contact: 6309380007",
            linkdeinURL: 'https://www.linkedin.com/in/achyuthavikaram',
            instagramURL: 'https://www.instagram.com/_lightening_rose__/',
        },
        {
            image: rajeswari,
            name: 'M.Rajeswari',
            position:'coordinator',
            contact:"Contact: 6309380007",
            linkdeinURL: 'https://www.linkedin.com/in/rajeswari-machina',
            instagramURL: '',
            email: "rajeswarimachina02@gmail.com"
        },
        {
            image: sreekanth,
            name: 'T.Srikanth',
            position:'coordinator',
            contact:"Contact: 6309380007",
            githubURL: 'https://github.com/THOTA-SRIKANTH',
            linkdeinURL: 'https://www.linkedin.com/in/thota-srikanth-725757280/',
            instagramURL: '',
            email: "tsrikanth866@gmail.com"
        },
        
    ];

    const typographyStyles = {
        color: "white",
        fontFamily: "AudioWide",
        textAlign: "center",
        paddingTop:"50px"
    };

    const renderTeam = (team) => (
       isSmallScreen ? (
            <Box
                sx={{
                    display: 'flex',
                    overflowX: 'auto',
                    gap: 1,
                    paddingTop: "1rem",
                    "&::-webkit-scrollbar": { display: "none" },
                }}
            >
                {team.map((member, index) => (
                    <Box key={index} sx={{ minWidth: '250px', flexShrink: 0 }}>
                        <OurTeamCard
                            image={member.image}
                            name={member.name}
                            position={member.position}
                            contact={member.contact}
                            githubURL={member.githubURL}
                            linkdeinURL={member.linkdeinURL}
                            instagramURL={member.instagramURL}
                            email={member?.email}
                        />
                    </Box>
                ))}
            </Box>
        ) : (
            <Grid2
                container
                spacing={2}
                sx={{
                    justifyContent:'center'
                }}
            >
                {team.map((member, index) => (
                    <Grid2 item key={index} xs={12} sm={6} md={4} lg={3}>
                        <OurTeamCard
                            image={member.image}
                            name={member.name}
                            position={member.position}
                            contact={member.contact}
                            githubURL={member.githubURL}
                            linkdeinURL={member.linkdeinURL}
                            instagramURL={member.instagramURL}
                            email={member?.email}
                        />
                    </Grid2>
                ))}
            </Grid2>
    )
    );

    return (
        <Box >
            <Box sx={{ padding: "1rem" }}>
    
                <Typography variant="h5" sx={typographyStyles}>
                    Event Orgainisers 
                </Typography>
                {renderTeam(frontendTeam)}
    
            </Box>
        </Box>
    );
}
