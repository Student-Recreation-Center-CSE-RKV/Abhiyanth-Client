import React from 'react';
import OurTeamCard from '../components/ourTeam/ourTeamCard';
import { Box, Typography, Grid2, useMediaQuery, useTheme } from '@mui/material';
import sreekanth from "../assets/images/ourTeam/sreekanth.jpeg";
import rajeswari from "../assets/images/ourTeam/rajeswari.jpeg";
import achyutha from "../assets/images/ourTeam/achyutha.jpeg";
import phani from "../assets/images/ourTeam/phani.jpeg";
import asif from "../assets/images/ourTeam/asif.jpeg";
import pavan from "../assets/images/ourTeam/pavan.jpeg";
import revanth from "../assets/images/ourTeam/revanth.jpeg";
import nagarjuna from "../assets/images/ourTeam/nagarjuna.jpg";
import azad from "../assets/images/ourTeam/azad.jpg";
import sam from "../assets/images/ourTeam/sam.jpeg";
import ishrath from "../assets/images/ourTeam/ishrath.jpeg";
import sahel from "../assets/images/ourTeam/sahel.jpeg";
import tanisha from "../assets/images/ourTeam/tanisha.jpeg";
import rakshitha from "../assets/images/ourTeam/rakshitha.jpeg"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState,useRef } from 'react';
import {IconButton} from '@mui/material';

import "../styles/about.css";

export default function OurTeam() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const frontendTeam = [
        {
            image: revanth,
            name: 'J.Revanth Kumar',
            githubURL: 'https://github.com/revanthkumarJ',
            linkdeinURL: 'https://www.linkedin.com/in/jilakararevanthkumar/',
            instagramURL: 'https://instagram.com/revanth_kumar_j',
        },
        {
            image: achyutha,
            name: 'V.Achyutha',
            githubURL: 'https://github.com/AchyuthaVikaram',
            linkdeinURL: 'https://www.linkedin.com/in/achyuthavikaram',
            instagramURL: 'https://www.instagram.com/_lightening_rose__/',
        },
        {
            image: rajeswari,
            name: 'M.Rajeswari',
            githubURL: 'https://github.com/Rajeswari-Machina',
            linkdeinURL: 'https://www.linkedin.com/in/rajeswari-machina',
            instagramURL: '',
            email: "rajeswarimachina02@gmail.com"
        },
        {
            image: sreekanth,
            name: 'T.Srikanth',
            githubURL: 'https://github.com/THOTA-SRIKANTH',
            linkdeinURL: 'https://www.linkedin.com/in/thota-srikanth-725757280/',
            instagramURL: '',
            email: "tsrikanth866@gmail.com"
        },
        
    ];

    const backendTeam = [
        {
            image: azad,
            name: 'Shaik Azad',
            githubURL: 'https://github.com/Azad99-9',
            linkdeinURL: 'https://www.linkedin.com/in/shaik-azad-4505b7240/',
            instagramURL: 'https://instagram.com/revanth_kumar_j',
        },{
            image: tanisha,
            name: 'N. Thanisha',
            githubURL: 'https://github.com/thanishanitturu',
            linkdeinURL: 'https://www.linkedin.com/in/thanisha-nitturu-0412b22a2',
            instagramURL: 'https://www.instagram.com/niitturu_thanisha_reddy/',
        },{
            image: rakshitha,
            name: 'S. Rakshita',
            githubURL: 'https://github.com/Rakshita4121',
            linkdeinURL: 'https://www.linkedin.com/in/rakshita-reddy-singam-8136a7280/',
            instagramURL: 'https://www.instagram.com/singam_rakshitareddy/',
        },
        {
            image: nagarjuna,
            name: 'B.Nagarjuna',
            githubURL: 'https://github.com/Nagarjuna0033',
            linkdeinURL: 'https://www.linkedin.com/in/nagarjuna3/',
            instagramURL: '',
        },
    ];

    const uiuxTeam = [
        {
            image: ishrath,
            name: 'S. Ishrath',
            githubURL: 'https://github.com/IshrathAsh',
            linkdeinURL: 'http://linkedin.com/in/shaikmahammadishrath',
            instagramURL: 'https://www.instagram.com/ishrath_ash/',
        },
        {
            image: pavan,
            name: 'B.Naga Pavan',
            githubURL: 'https://github.com/Naga-Pavan-Bhuma',
            linkdeinURL: 'https://www.linkedin.com/in/bhuma-naga-pavan/',
            instagramURL: 'https://www.instagram.com/nagapavan_8/',
        },
        {
            image: sam,
            name: 'Sam Chitrala',
            githubURL: 'https://github.com/SamChitrala',
            linkdeinURL: 'https://www.linkedin.com/in/samify-design-91b416305/',
            instagramURL: '',
        },
    ];

    const mobileTeam = [
        {
            image: asif,
            name: 'S. Asif Basha',
            githubURL: 'https://github.com/sayyad-asifbasha',
            linkdeinURL: 'https://www.linkedin.com/in/sayyad-asifbasha-b15731305/',
            instagramURL: 'https://www.instagram.com/sayyad._.asif._/',
        },
        {
            image: phani,
            name: 'V.Phani',
            githubURL: 'https://github.com/venkataPhanindraVutla',
            linkdeinURL: 'https://www.linkedin.com/in/phanindra-vutla/',
            instagramURL: 'https://www.instagram.com/self._name_/',
        },
        {
            image: sahel,
            name: 'Syed Sahil',
            githubURL: 'https://github.com/SyedShahil',
            linkdeinURL: 'https://www.linkedin.com/in/syed-sahil-076546286/',
            instagramURL: 'https://www.instagram.com/______s_a_i_f_______05/#',
        },
    ];

    const typographyStyles = {
        color: "white",
        fontFamily: "AudioWide",
        textAlign: "center",
        paddingTop:"50px"
    };

    const CARD_WIDTH = 280;

    const renderTeam = (team) => (
        isSmallScreen ? (
            <Box
                sx={{
                    display: 'flex',
                    overflowX: 'auto',
                    gap: 2,
                    padding: "1rem",
                    "&::-webkit-scrollbar": { display: "none" },
                }}
            >
                {team.map((member, index) => (
                    <Box key={index} sx={{ minWidth: '250px', flexShrink: 0 }}>
                        <OurTeamCard
                            image={member.image}
                            name={member.name}
                            designation={member.designation}
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
                            designation={member.designation}
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
        <Box sx={{ paddingTop: "30px" }} className="gif-background">
            <Typography variant="h4" sx={typographyStyles}>
                Our Team
            </Typography>
            <Box sx={{ padding: "1rem" }}>
    
                <Typography variant="h5" sx={typographyStyles}>
                    FrontEnd Team
                </Typography>
                {renderTeam(frontendTeam)}
    
                <Typography variant="h5" sx={typographyStyles}>
                    BackEnd Team
                </Typography>
                {renderTeam(backendTeam)}
    
                <Typography variant="h5" sx={typographyStyles}>
                    UI/UX Team
                </Typography>
                {renderTeam(uiuxTeam)}
    
                <Typography variant="h5" sx={typographyStyles}>
                    App Development Team
                </Typography>
                {renderTeam(mobileTeam)}
            </Box>
        </Box>
    );
}
