import React from 'react';

const StatsCard = ({ image, number, description }) => {
  return (
    <div style={styles.cardContainer}>
      <div style={styles.cardBackground} />
      {image && <img src={image} alt="Stats" style={styles.image} />}
      <div style={styles.numberText}>{number}</div>
      <div style={styles.descriptionText}>{description}</div>
    </div>
  );
};

const styles = {
  cardContainer: {
    width: 247,
    height: 294,
    position: 'relative',
    margin: '20px auto', // Center the card and add spacing
  },
  cardBackground: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    background: 'rgba(217, 217, 217, 0)', 
    border: '1px solid', // Solid border to apply gradient
    borderImageSource: 'linear-gradient(to bottom, #FF6AB7, #22D1EE)', // Gradient for the border
    borderImageSlice: 1,
    borderRadius: 64, // Rounded corners
  },
  image: {
    width: '80%',
    height: 'auto',
    position: 'absolute',
    top: 20,
    left: '10%',
    borderRadius: 16, // Optional: rounded edges for the image
  },
  numberText: {
    position: 'absolute',
    top: 160,
    left: '50%',
    transform: 'translateX(-50%)',
    textAlign: 'center',
    color: 'white',
    fontSize: 40,
    fontFamily: 'Audiowide, sans-serif',
    fontWeight: '400',
  },
  descriptionText: {
    position: 'absolute',
    top: 210,
    left: '50%',
    transform: 'translateX(-50%)',
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
    fontFamily: 'Audiowide, sans-serif',
    fontWeight: '400',
  },
};

export default StatsCard;
