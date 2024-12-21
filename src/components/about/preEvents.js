import React from 'react';
import { Typography } from '@mui/material';
import image from "../../assets/images/Abhiyanth Brochure 1.png"

const PreEventsCard = () => {
  return (
    <div style={styles.container}>
      <Typography variant="h3" style={styles.text}>
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
    border: '3px solid',
    borderImageSource: 'linear-gradient(to right, #261E35, #C91C75, #EFE1EE, #E9C0DA, #E4AACC, #C91C75, #261E35)',
    borderImageSlice: 1,
    textAlign: 'center',
    padding: '20px',
    paddingTop:"50px",
    paddingBottom:"100px"
  },
  text: {
    fontFamily: 'Audiowide, sans-serif',
    marginBottom: '20px',
    color: '#FFFFFF',
    fontSize:"38px"
  },
  image: {
    width: '100%',
    height: 'auto',
    marginTop:"30px"
  }
};

export default PreEventsCard;
