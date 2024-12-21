import React from 'react';
import "@fontsource/orbitron"
import "@fontsource/orbitron/400.css"
import "@fontsource/audiowide"
import "@fontsource/audiowide/400.css"
import { Box, Typography } from '@mui/material';
import '@fontsource/aubrey'
import '@fontsource/aubrey/400.css'
import Grid from '@mui/material/Grid';
import CardComponent from './cardComponent';
import '../styles/eventCards.css'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import '../styles/eventCards.css'

const EventCards = () => {

    const cards = [
        {
          id: 1,
          name: 'Culturals',
          logo: 'https://via.placeholder.com/80',
          events: ['Dance', 'Music', 'Drama' ],
        },
        {
          id: 2,
          name: 'Sports',
          logo: 'https://via.placeholder.com/80',
          events: ['Cricket', 'Football', 'Basketball' ],
        },
        {
          id: 3,
          name: 'Contests',
          logo: 'https://via.placeholder.com/80',
          events: ['Coding', 'Quizzes', 'Debates'],
        },
        {
          id: 4,
          name: 'Tech Events',
          logo: 'https://via.placeholder.com/80',
          events: ['Hackathon', 'AI Workshop', 'Robotics'],
        },
        {
          id: 5,
          name: 'Sponsors',
          logo: 'https://via.placeholder.com/80',
          events: ['Company A', 'Company B', 'Company C' ],
        },
        {
          id: 6,
          name: 'xplode',
          logo: 'https://via.placeholder.com/80',
          events: ['Company A', 'Company B', 'Company C' ],
        },
        {
          id: 7,
          name: 'Stalls',
          logo: 'https://via.placeholder.com/80',
          events: ['Company A', 'Company B', 'Company C' ],
        },
        {
          id: 8,
          name: 'Autions',
          logo: 'https://via.placeholder.com/80',
          events: ['Company A', 'Company B', 'Company C' ],
        },
        {
          id: 9,
          name: 'Bidding',
          logo: 'https://via.placeholder.com/80',
          events: ['Company A', 'Company B', 'Company C' ],
        },
        {
          id: 10,
          name: 'Competitions',
          logo: 'https://via.placeholder.com/80',
          events: ['Company A', 'Company B', 'Company C'],
        },
      ];

      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4, 
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows :false,
        
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    infinite: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots:true,
                    autoplaySpeed: 1000,
                    speed: 1000,
                    infinite: true,
                }
            }
        ]
    };

    return (
    <div className="event-cards">
    
      <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {/* Left Section */}
            <Grid 
              item 
              xs={12} sm={12} md={6} 
              sx={{ marginTop: { xs: '0', sm: '-50px', md: '-100px' }, marginLeft: { xs: '0', md: '-100px' } }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: 'aubrey, sans-serif',
                    textAlign: 'center',
                    color: 'white',
                    fontWeight: 400,
                    lineHeight: { xs: '50px', md: '62.52px' },
                    fontSize: { xs: '36px', md: '60px' },
                    letterSpacing: '5px',
                    marginTop:{xs:'15px', md:15}
                  }}
                >
                  ABHIYANTH
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: 'aubrey, sans-serif',
                    textAlign: 'center',
                    color: 'white',
                    fontWeight: 400,
                    lineHeight: { xs: '50px', md: '62.52px' },
                    fontSize: { xs: '36px', md: '60px' },
                    letterSpacing: '5px',
                    opacity:'2px'
                  }}
                >
                  EXTRAVAGANGA
                </Typography>
              </div>
            </Grid>

            {/* Right Section */}
            <Grid 
                item 
                xs={12} 
                sm={12} 
                md={6} 
                sx={{ 
                  marginTop: { xs: '20px', md: '-100px' }, 
                  textAlign: { xs: 'center', md: 'right' } 
                }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'Orbitron, sans-serif',
                  textAlign: { xs: 'center', md: 'right' },
                  maxWidth: { xs: '100%', md: '100%' }, // Occupy full width on md screens
                  marginRight: { xs: '0', md: '0' }, // Remove margin-right to fully occupy space
                  color: 'white',
                  wordSpacing: '5px',
                  fontSize: { xs: '14px', md: '18px' },
                  marginTop: {xs:'10px',md:15},
                  fontSize :15
                }}
              >
                   Every spring, Rajiv Gandhi University comes alive with Abhiyanth, our iconic tech and cultural fest that celebrates the fusion of technology, creativity, and talent. This much-awaited event is a testament to the energy and passion of students, bringing together a vibrant mix of tech enthusiasts, artists, performers, and food lovers from across the region.
              </Typography>
            </Grid>

          </Grid>
      </Box>

        <Slider {...settings}>
          {cards.map((card) => (
            <CardComponent key={card.id} card={card} />
          ))}
        </Slider>      
    </div>
    );
  };
  
  export default EventCards;



