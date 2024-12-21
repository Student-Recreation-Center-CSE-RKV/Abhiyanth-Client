import React from 'react';

const StatsCard = ({ image, number, description }) => {
  return (
    <div style={styles.cardContainer}>
      <div style={styles.cardBackground}>
        {image && <img src={image} alt="Stats" style={styles.image} />}
        <div style={styles.textContainer}>
          <div style={styles.numberText}>{number}</div>
          <div style={styles.descriptionText}>{description}</div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  cardContainer: {
    width: 247,
    height: 294,
    position: 'relative',
    margin: '20px',
  },
  cardBackground: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    background: 'rgba(217, 217, 217, 0)', 
    
    borderRadius: 64, 
    border: '1px #FF6AB7 solid', 
    display: 'flex',
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center',
    padding: '20px',
    boxShadow: '0px 4px 15px rgba(173, 216, 230, 0.5)'
  },
  image: {
    width: "120px",
    height: 'auto',
    borderRadius: 16,
    marginBottom: '20px', 
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  numberText: {
    fontSize: 32,
    color: 'white',
    fontFamily: 'Audiowide, sans-serif',
    fontWeight: '400',
    textAlign: 'center',
  },
  descriptionText: {
    fontSize: 25,
    color: 'white',
    fontFamily: 'Audiowide, sans-serif',
    fontWeight: '400',
    textAlign: 'center',
  },
};

export default StatsCard;