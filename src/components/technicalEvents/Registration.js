import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const volunteerData = [
  {
    title: "Event A",
    description: "Join Event A and be a part of an exciting experience.",
    image: "https://via.placeholder.com/300x200", // Replace with real image URL
    formLink: "https://forms.gle/exampleA", // Replace with Google Form link
  },
  {
    title: "Event B",
    description: "Help organize and manage Event B to make it successful.",
    image: "https://via.placeholder.com/300x200", // Replace with real image URL
    formLink: "https://forms.gle/exampleB", // Replace with Google Form link
  },
  {
    title: "Event C",
    description: "Volunteer for Event C and contribute to a great cause.",
    image: "https://via.placeholder.com/300x200", // Replace with real image URL
    formLink: "https://forms.gle/exampleC", // Replace with Google Form link
  },
  // Add more events as needed
];

const VolunteerRegistrationPage = () => {
  return (
    <div style={{ padding: '20px', background: '#f5f5f5', minHeight: '100vh' }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        style={{ fontFamily: 'Audiowide, sans-serif', marginBottom: '20px' }}
      >
        Volunteer Registration
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {volunteerData.map((event, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={event.image}
                alt={event.title}
                style={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {event.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {event.description}
                </Typography>
              </CardContent>
              <Button
                variant="contained"
                color="primary"
                style={{
                  margin: '10px',
                  fontFamily: 'Audiowide, sans-serif',
                  background: 'linear-gradient(45deg, #6AE4FF, #9747FF)',
                }}
                onClick={() => window.open(event.formLink, '_blank')}
              >
                Register
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default VolunteerRegistrationPage;
