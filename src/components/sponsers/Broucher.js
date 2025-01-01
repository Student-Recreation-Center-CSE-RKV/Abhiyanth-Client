import React from 'react';
import robotImage from '../../assets/images/robot.png'; // Import robot image
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import brochurePDF from "../../assets/images/final.pdf"
import DownloadIcon from '@mui/icons-material/Download';

const Brochure = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = brochurePDF; // Use the actual imported path to the PDF
        link.download = 'Abhiyanth2K25-Brochure.pdf';
        link.click();
    };

    const isSmallScreen = useMediaQuery('(max-width:900px)');

    return (
        <Box sx={{ color: '#FFFFFF', p: 4 }}>
            <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>Brochure</Typography>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: isSmallScreen ? 'column' : 'row',
                }}
            >
                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        overflow: 'hidden',
                        borderRadius: 2,
                        textAlign: 'center',
                    }}
                >
                    <iframe
                        loading="lazy"
                        style={{
                            width: '100%',
                            height: isSmallScreen ? '400px' : '570px',
                            border: 'none',
                            borderRadius: '8px',
                            marginBottom: '1rem',
                        }}
                        src="https://www.canva.com/design/DAGaY90SjhQ/8aPXQ5jwnufAiK-cVl7odg/watch?embed"
                        allowFullScreen
                        title="Abhiyanth 2K25 Brochure"
                    ></iframe>
                    <Button
                        onClick={handleDownload}
                        variant="contained"
                        sx={{
                            backgroundColor: '#00C853',
                            color: '#FFFFFF',
                            borderRadius: 1,
                            fontWeight: 'bold',
                            '&:hover': {
                                backgroundColor: '#009624',
                            },
                        }}
                        endIcon={<DownloadIcon />}
                    >
                        Download Brochure
                    </Button>
                </Box>
                {!isSmallScreen && (
                    <Box
                        component="img"
                        src={robotImage}
                        alt="Robot Icon"
                        sx={{ width: 400,  borderRadius: 2 }}
                    />
                )}
            </Box>
        </Box>
    );
};

export default Brochure;
