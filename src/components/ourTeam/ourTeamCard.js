import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';


const OurTeamCard = ({ image, name, githubURL, linkdeinURL, instagramURL, email }) => {
  return (
    <Box sx={styles.cardContainer}>
      <Box sx={styles.cardBackground}>
        {image && <img src={image} alt={name} style={styles.image} onContextMenu={(e) => e.preventDefault()} />}
        <Box sx={styles.textContainer}>
          {name && <Typography sx={styles.nameText}>{name}</Typography>}
          <Box sx={styles.iconContainer}>
            {githubURL && (
              <IconButton component="a" href={githubURL} target="_blank" rel="noopener noreferrer">
                <GitHubIcon sx={styles.icon} />
              </IconButton>
            )}
            {linkdeinURL && (
              <IconButton component="a" href={linkdeinURL} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon sx={styles.icon} />
              </IconButton>
            )}
            {instagramURL && (
              <IconButton component="a" href={instagramURL} target="_blank" rel="noopener noreferrer">
                <InstagramIcon sx={styles.icon} />
              </IconButton>
            )}
            {email && (
              <IconButton
                component="a"
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <EmailIcon sx={styles.icon} />
              </IconButton>
            )}


          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  cardContainer: {
    width: 280,
    height: 350,
    position: 'relative',
    margin: '20px',
  },
  cardBackground: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    background: 'rgba(217, 217, 217, 0)',
    borderRadius: '64px',
    border: '1px #FF6AB7 solid',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    boxShadow: '0px 4px 15px rgba(173, 216, 230, 0.5)',
  },
  image: {
    width: '120px',
    height: 'auto',
    borderRadius: '50%',
    marginBottom: '20px',
    pointerEvents: "none"
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  nameText: {
    fontSize: '1.5rem',
    color: 'white',
    fontFamily: 'Audiowide, sans-serif',
    fontWeight: '400',
    textAlign: 'center',
  },
  designationText: {
    fontSize: '1.2rem',
    color: 'white',
    fontFamily: 'Audiowide, sans-serif',
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: '10px',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '10px',
  },
  icon: {
    color: 'white',
    fontSize: '1.5rem',
    transition: 'transform 0.3s ease, color 0.3s ease', // Smooth transition for hover effects
    '&:hover': {
      transform: 'scale(1.2)', 
    },
  },
};

export default OurTeamCard;