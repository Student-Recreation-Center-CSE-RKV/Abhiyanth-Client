import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import EventNoteIcon from '@mui/icons-material/EventNote';

const EventsComingSoon = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 4,
                backgroundColor: '#f4f4f4',
                borderRadius: 2,
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                marginTop: 4,
                margin:"90px"
            }}
        >
            <EventNoteIcon
                sx={{
                    fontSize: 80,
                    color: '#2196f3',
                    marginBottom: 2,
                }}
            />
            <Typography
                variant="h4"
                fontWeight="bold"
                gutterBottom
                sx={{
                    color: '#333',
                }}
            >
                Events Coming Soon
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    color: '#666',
                    marginBottom: 3,
                }}
            >
                Stay tuned for exciting upcoming events!
            </Typography>
        </Box>
    );
};

export default EventsComingSoon;
