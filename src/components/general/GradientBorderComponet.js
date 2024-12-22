import React from 'react';
import { Box } from '@mui/material';

const GradientBorderComponent = () => {
  return (
    <Box
      sx={{
        border: '1.5px solid',
        borderImageSource: 'linear-gradient(to right, #261E35, #C91C75, #EFE1EE, #E9C0DA, #E4AACC, #C91C75, #261E35)',
        borderImageSlice: 1,
        width: '100%', 
        marginTop:"20px",
        marginBottom:"20px",
      }}
    />
  );
};

export default GradientBorderComponent;
