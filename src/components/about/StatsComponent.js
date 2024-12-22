import React from 'react';
import image1 from "../../assets/images/1.png";
import image2 from "../../assets/images/2.png";
import image3 from "../../assets/images/3.png";
import image4 from "../../assets/images/4.png";
import StatsCard from './StatsCard';
import { Typography, Box } from '@mui/material';
import "../../styles/about_heading.css"

export default function StatsComponent() {
  const images = [{ image: image1, number: "03", description: "Days" }, { image: image2, number: "150000 +", description: "Foot Fall" }, { image: image3, number: "50+", description: "Projects" }, { image: image4, number: "50+", description: "Stalls" }]
  
  return (
    <div style={{paddingTop:"30px",paddingBottom:"30px"}}>
      <Typography variant="h3" sx={{ marginBottom: '20px'}} className='about-heading'>
        Stats
      </Typography>
      <Box
        sx={{
          display: { xs: "none", md: "block" },  
          padding: '20px',
          textAlign: 'center',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <StatsCard image={image1} number="03" description="Days" />
          <StatsCard image={image2} number="150000 +" description="Foot Fall" />
          <StatsCard image={image3} number="50+" description="Projects" />
          <StatsCard image={image4} number="50+" description="Stalls" />
        </Box>
      </Box>

      <Box
        sx={{
          display: { xs: "block", md: "none" },
          overflowX: "auto",  
          padding: "1rem",
          "&::-webkit-scrollbar": { display: "none" },  
        }}
      >
        <Box sx={{ display: "flex", gap: "10px" }}>
          {images.map((item, index) => (
            <Box
              key={index}
              sx={{
                flexShrink: 0,
                borderRadius: "8px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                overflow: "hidden",
              }}
            >
              <StatsCard
                image={item.image}
                number={item.number}
                description={item.description}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </div>
  );
}
