import React from 'react'
import logo from '../../assets/images/ab-logo-removebg-preview.png'
import "@fontsource/orbitron"
import "@fontsource/orbitron/400.css"
import "@fontsource/audiowide"
import "@fontsource/audiowide/400.css"
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';
import '@fontsource/aubrey'
import '@fontsource/aubrey/400.css'
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import '../../styles/eventCards.css'
const CardComponent = ({card}) => {
   const [isHovered , setIsHovered] = useState(null);
  return (
    <div >
      <Grid item xs={6} md={2.4} sx={{marginTop:5}}>
            <Box
                sx={{
                position: "relative", // Allows the card to expand within this box
                height: 300, // Fixed height for the container
                width: 200, // Fixed width for the container
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                
                }}
            >
                <Card
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                sx={{
                    position: "absolute",
                    width: 250,
                    height: 300,
                    transition: "all 0.3s ease",
                    background: isHovered
                    ? "linear-gradient(90deg, #652DC0, #6954EBC9, #CF47CA7D)"
                    : "rgba(255, 255, 255, 0.06)",
                    backdropFilter: !isHovered ? "blur(10px)" : "none",
                    transform: isHovered ? "scale(1.1)" : "scale(1)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    overflow: "hidden",
                    borderRadius: "50px",
                    top: 0,
                    height: isHovered ? 250 : 250, // Expand downwards only
                    marginLeft:"100px"
                  }}
                >
                    <CardMedia
                        component="img"
                        image={logo}
                        alt={`${card.name} logo`}
                        sx={{
                        width: 300,
                        height: 180,
                        marginTop: -0.1   ,
                        transition: "all 0.3s ease",
                        opacity: isHovered ? 0.3 : 1,
                        }}
                    />

                    <CardContent
                        sx={{
                        position: "relative",
                        bottom: 0,
                        width: "100%",
                        textAlign: "center",
                        background: "linear-gradient(90deg, #652DC0, #6954EBC9, #CF47CA7D)",
                        color: "white",
                        padding: 2, // Increased padding for more height
                        textDecoration : isHovered ? 'underline':'none',
                        }}
                    >
                        <Typography variant="h6" sx={{fontFamily: 'audiowide, sans-serif',fontWeight:400 ,fontSize:'25px' , marginBottom:10}}> {card.name}</Typography>
                    </CardContent>

                      {isHovered && (
                        <Box
                          sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0, 
                            bottom: 0,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "white",
                            backgroundColor: "linear-gradient(90deg, #652DC0, #6954EBC9, #CF47CA7D)",
                            zIndex: 1,
                            boxSizing: "border-box",
                            marginTop:'0px'
                          }}
                        >
                            <Box component="ul" sx={{ listStyle: "disc", padding: 0, margin: 0 }}>
                              {card.events.map((event, index) => (
                                <Typography
                                  key={index}
                                  component="li"
                                  sx={{ fontSize: 20, marginTop: 1, fontFamily: 'audiowide, sans-serif' }}
                                >
                                  {event}
                                </Typography>
                              ))}
                            </Box>
                        </Box>
                    )}
                </Card>
            </Box>
      </Grid>
    </div>
  )
}

export default CardComponent

