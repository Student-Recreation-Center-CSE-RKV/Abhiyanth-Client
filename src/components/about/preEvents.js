import React from 'react';
import { Typography } from '@mui/material';
import image from "../../assets/images/Abhiyanth Brochure 1.png"
import "../../styles/about_heading.css"

const PreEventsCard = () => {
  return (
    <div style={styles.container}>
      <Typography variant="h3" className='about-heading'>
        Pre Events
      </Typography>
      <img 
        src={image}
        alt="Event" 
        style={styles.image}
      />
    </div>
  );
};

const styles = {
  container: {
    marginTop:"20px",
    marginBottom:"20px",
    textAlign: 'center',
    padding: '20px',
    paddingTop:"50px",
    paddingBottom:"100px"
  },
  image: {
    width: '100%',
    height: 'auto',
    marginTop:"30px"
  }
};

export default PreEventsCard;
