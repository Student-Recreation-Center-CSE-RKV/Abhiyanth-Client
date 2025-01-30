import React from 'react';
import { Link } from 'react-router-dom';
import {  Typography, Button, Box } from '@mui/material';

const PageNotFound = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width:"100%",
        color:"white"
      }}
    >
      <Typography
        variant="h1"
        sx={{ fontWeight: 'bold', color: 'white', fontFamily: 'Space Mono' }}
      >
        404
      </Typography>
      <Typography variant="h5" sx={{ mt: 2, color: 'white', fontFamily: 'Poppins' }}>
        Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ mt: 1, color: 'white', fontFamily: 'Poppins' }}>
        Oops! The page you're looking for doesn't exist or has been moved.
      </Typography>
      <Box mt={4}>
        <Button
          component={Link}
          to="/"
          variant="contained"
          sx={{ bgcolor: 'primary.main', fontFamily: 'Poppins', '&:hover': { bgcolor: 'primary.dark' } }}
        >
          Go Back Home
        </Button>
      </Box>
    </Box>
  );
};

export default PageNotFound;
