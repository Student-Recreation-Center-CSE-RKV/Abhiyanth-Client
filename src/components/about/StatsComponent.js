import React from 'react';
import image1 from "../../assets/images/1.png";
import image2 from "../../assets/images/2.png";
import image3 from "../../assets/images/3.png";
import image4 from "../../assets/images/4.png";
import StatsCard from './StatsCard';
import { Typography } from '@mui/material';

export default function StatsComponent() {
  return (
    <div style={styles.container}>
      <Typography variant="h3" style={styles.text}>
        Stats
      </Typography>
      <div style={styles.cardContainer}>
        <StatsCard 
          image={image1}
          number="03" 
          description="Days" 
        />
        <StatsCard 
          image={image2}
          number="150000 +" 
          description="Foot Fall" 
        />
        <StatsCard 
          image={image3}
          number="50+" 
          description="Projects" 
        />
        <StatsCard 
          image={image4}
          number="50+" 
          description="Stalls" 
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column', 
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',  
    padding: '20px',
  },
  text: {
    fontFamily: 'Audiowide, sans-serif',
    marginBottom: '20px',
    color: '#FFFFFF',
    fontSize: "40px",
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row', 
    gap: '20px', 
    flexWrap: 'wrap', 
    justifyContent: 'center', 
  },
  '@media (max-width: 768px)': {  
    cardContainer: {
      flexDirection: 'column', 
      alignItems: 'center',  
      justifyContent: 'center', 
    },
  }
};