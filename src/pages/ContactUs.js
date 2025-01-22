// Import React and Material UI components
import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import logo from "../assets/images/Abhiyanthlogo2.png"
import audience from "../assets/images/audience.png"
import anil from "../assets/images/anil.png"


const ContactUs = () => {
  return (
    <Box sx={{background: `url(${audience}) center/cover no-repeat`, paddingTop:"70px",}}>
        <Contact/>
    </Box>
  );
};

export const Contact=() => {
  return (
    <div>
        <Box
      sx={{
        display: 'flex',
        flexDirection: {xs:'column',sm:'column',md:'row',lg:'row'},
        color: 'white',
        height:{sx:"auto",xs:"auto",md:"95vh",lg:"95vh"},
        padding: 2,
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          paddingBottom:"50px",
          
        }}
      >
        <img src={logo}/>
        <Typography variant="h1" sx={{ fontSize: '3rem', fontWeight: 'bold', margin: 0 ,fontFamily:"Autowide"}}>
          ABHIYANTH 2K25
        </Typography>
        <Typography variant="h5" sx={{  fontSize: '1.8rem',fontWeight: 'bold', margin: 0 }}>
          RGUKT RK Valley
        </Typography>
        <Typography variant="h5" sx={{ fontSize: '1.5rem',fontWeight: 'bold', marginTop: 3 }}>
          FEB 27th, 28th & MAR 1st
        </Typography>
      </Box>

      {/* Right Section */}
      <Box
        sx={{
          flex: 1,
          padding: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" sx={{ fontSize: '2.5rem', marginBottom: 2 }}>
          CONTACT US
        </Typography>
        <Typography variant="h3" sx={{ fontSize: '2rem', marginBottom: 3, color: '#ffcc00' }}>
          Fest Coordinator
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 3,
            flexDirection: {sx:"column",xs:"column",md:"row",lg:"row"}
          }}
        >
          <Avatar
            alt="Coordinator"
            src={anil}
            sx={{ width: 200, height: 200, marginRight: 2, border: '2px solid white' }}
          />
          <Box sx={{ textAlign: 'left' }}>
            <Typography variant="body1" sx={{ fontSize: '1.8rem', fontWeight: 'bold' }}>
              B.ANIL KUMAR REDDY
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '1.4rem' }}>
              anilkumarreddy@rguktrkv.ac.in
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '1.4rem' }}>
              +91-9966585808
            </Typography>
          </Box>
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body1" sx={{ fontSize: '1.5rem', margin: '5px 0' }}>
            Team Abhiyanth
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '1.5rem' }}>
            abhiyanth@rguktrkv.ac.in
          </Typography>
        </Box>
      </Box>
    </Box>
    </div>
  );
};
export default ContactUs;