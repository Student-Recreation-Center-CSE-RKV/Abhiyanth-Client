import React from 'react'
import OurTeamCard from '../components/ourTeam/ourTeamCard';
import { Box, Typography } from '@mui/material';
import sreekanth from "../assets/images/ourTeam/sreekanth.jpeg"
import rajeswari from "../assets/images/ourTeam/rajeswari.jpeg"
import achyutha from "../assets/images/ourTeam/achyutha.jpeg"
import phani from "../assets/images/ourTeam/phani.jpeg"
import asif from "../assets/images/ourTeam/asif.jpeg"
import pavan from "../assets/images/ourTeam/pavan.jpeg"
import revanth from "../assets/images/ourTeam/revanth.jpeg"
import nagarjuna from "../assets/images/ourTeam/nagarjuna.jpg"
import azad from "../assets/images/ourTeam/azad.jpg"
import sam from "../assets/images/ourTeam/sam.jpeg"
import ishrath from "../assets/images/ourTeam/ishrath.jpeg"

import "../styles/about.css";

export default function OurTeam() {
    

    const webTeam = [
        {
            image: azad,
            name: 'Shaik Azad',
            designation: 'BackEnd Developer',
            githubURL: 'https://github.com/Azad99-9',
            linkdeinURL: 'https://www.linkedin.com/in/shaik-azad-4505b7240/',
            instagramURL: 'https://instagram.com/revanth_kumar_j',
        },
        {
            image: ishrath,
            name: 'S. Ishrath',
            designation: 'UI/UX Designer',
            githubURL: 'https://github.com/IshrathAsh',
            linkdeinURL: 'http://linkedin.com/in/shaikmahammadishrath',
            instagramURL: 'https://www.instagram.com/ishrath_ash/',
        },
        {
            image: revanth,
            name: 'J.Revanth Kumar',
            designation: 'FrontEnd Developer',
            githubURL: 'https://github.com/revanthkumarJ',
            linkdeinURL: 'https://www.linkedin.com/in/jilakararevanthkumar/',
            instagramURL: 'https://instagram.com/revanth_kumar_j',
        },

        {
            image: asif,
            name: 'S. Asif Basha',
            designation: 'App Developer',
            githubURL: 'https://github.com/sayyad-asifbasha',
            linkdeinURL: 'https://www.linkedin.com/in/sayyad-asifbasha-b15731305/',
            instagramURL: 'https://www.instagram.com/sayyad._.asif._/',
        },
        {
            image: nagarjuna,
            name: 'B.Nagarjuna',
            designation: 'BackEnd Developer',
            githubURL: 'https://github.com/Nagarjuna0033',
            linkdeinURL: 'https://www.linkedin.com/in/nagarjuna3/',
            instagramURL: '',
        },
        {
            image: achyutha,
            name: 'V.Achyutha',
            designation: 'FrontEnd Developer',
            githubURL: 'https://github.com/AchyuthaVikaram',
            linkdeinURL: 'https://www.linkedin.com/in/achyuthavikaram',
            instagramURL: '',
        },
        {
            image: sreekanth,
            name: 'T.Srikanth',
            designation: 'FrontEnd Developer',
            githubURL: 'https://github.com/THOTA-SRIKANTH',
            linkdeinURL: 'https://www.linkedin.com/in/thota-srikanth-725757280/',
            instagramURL: '',
        },
        {
            image: pavan,
            name: 'B.Naga Pavan',
            designation: 'UI/UX Designer',
            githubURL: 'https://github.com/Naga-Pavan-Bhuma',
            linkdeinURL: 'https://www.linkedin.com/in/bhuma-naga-pavan/',
            instagramURL: 'https://www.instagram.com/nagapavan_8/',
        },
        {
            image: sam,
            name: 'Sam Chitrala',
            designation: 'UI/UX Designer',
            githubURL: 'https://github.com/SamChitrala',
            linkdeinURL: 'https://www.linkedin.com/in/samify-design-91b416305/',
            instagramURL: '',
        },
        {
            image: phani,
            name: 'V.Phani',
            designation: 'App Developer',
            githubURL: 'https://github.com/venkataPhanindraVutla',
            linkdeinURL: 'https://www.linkedin.com/in/phanindra-vutla/',
            instagramURL: 'https://www.instagram.com/self._name_/',
        },
        {
            image: rajeswari,
            name: 'M.Rajeswari',
            designation: 'FrontEnd Developer',
            githubURL: 'https://github.com/Rajeswari-Machina',
            linkdeinURL: 'https://www.linkedin.com/in/rajeswari-machina',
            instagramURL: '',
        },
    ];

    return (
        <Box sx={{ paddingTop: "80px" }} className="gif-background">
            {/* Core Team Section
          <Typography
            variant="h4"
            sx={{
              marginBottom: "10px",
              color: "white",
              fontFamily: "AudioWide",
              textAlign:"center"
            }}
          >
            Core Team and Event Organizers
          </Typography>
          <Box
            sx={{
              overflowX: "auto",
              display: "flex",
              gap: "10px",
              padding: "1rem",
              "&::-webkit-scrollbar": { display: "none" },
              marginBottom: "40px",
            }}
          >
            {coreTeam.map((member, index) => (
              <Box
                key={index}
                sx={{
                  flexShrink: 0,
                  borderRadius: "8px",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                  overflow: "hidden",
                }}
              >
                <OurTeamCard
                  image={member.image}
                  name={member.name}
                  designation={member.designation}
                  githubURL={member.githubURL}
                  linkdeinURL={member.linkdeinURL}
                  instagramURL={member.instagramURL}
                  facebookURL={member.facebookURL}
                />
              </Box>
            ))}
          </Box>
       */}
            {/* Web Team Section */}
            <Typography
                variant="h4"
                sx={{

                    color: "white",
                    fontFamily: "AudioWide",
                    textAlign: "center"
                }}
            >
                Our Developer Team
            </Typography>
            <Box
                sx={{
                    overflowX: "auto",
                    display: "flex",
                    gap: "10px",
                    padding: "1rem",
                    "&::-webkit-scrollbar": { display: "none" },
                }}
            >
                {webTeam.map((member, index) => (
                    <Box
                        key={index}
                        sx={{
                            flexShrink: 0,
                            borderRadius: "8px",
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                            overflow: "hidden",
                        }}
                    >
                        <OurTeamCard
                            image={member.image}
                            name={member.name}
                            designation={member.designation}
                            githubURL={member.githubURL}
                            linkdeinURL={member.linkdeinURL}
                            instagramURL={member.instagramURL}
                            facebookURL={member.facebookURL}
                        />
                    </Box>
                ))}
            </Box>
        </Box>
    );


}

