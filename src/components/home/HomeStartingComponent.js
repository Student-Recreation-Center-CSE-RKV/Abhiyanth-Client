import React from 'react'
import { audience, abhiyanthLogo, maskGroup } from '../../assets/images'
import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion';

export default function HomeStartingComponent() {
    const styles = {
        heroContainer: {
            position: 'relative',
            width: '100%',
            height: '100vh',
            backgroundImage: `url(${audience})`,
            backgroundSize: "cover",
            overflow: 'hidden'
        },
        title: {
            fontFamily: 'Audiowide',
            fontSize: { xs: '20px', sm: '30px', md: '30px', lg: '50px' },
            fontWeight: 400,
            lineHeight: "normal",
            width:"100%",
            letterSpacing: '0.19em',
            position: "absolute",
            bottom: "0px",
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: 'center',
            color: 'white',
        },
        buttonLeft: {
            padding: "10px 15px ",
            fontSize: { xs: '14px', sm: '16px', md: '18px' },
            cursor: 'pointer',
            borderRadius: "0 30px 0 0",
            backgroundColor: "transparent",
            borderColor: "white",
            color: "white",
            width: { xs: '150px', sm: '300px', md: '500px' }, 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '@media (max-width: 600px)': {
                width: '80px',
                padding: '5px 10px',
                fontSize: '12px'
            }
        },
        buttonRight: {
            padding: "10px 15px ",
            fontSize: { xs: '14px', sm: '16px', md: '18px' },
            cursor: 'pointer',
            borderRadius: "30px 0 0 0",
            backgroundColor: "transparent",
            borderColor: "white",
            color: "white",
            width: { xs: '150px', sm: '300px', md: '500px' }, // Adjust width according to screen sizes
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '@media (max-width: 600px)': {
                width: '80px',
                padding: '5px 10px',
                fontSize: '12px'
            }
        },
        buttonText: {
            fontFamily: 'Audiowide',
            fontSize: { xs: '18px', sm: '20px', md: '28px' },
            fontWeight: 400,
            lineHeight: '35.7px',
            textAlign: 'center', // Center align text
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none',
        }
    }

    return (
        <div>
            <Box sx={styles.heroContainer}>
                <Box sx={{
                    position: 'absolute',
                    top: '60%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'white',
                    textAlign: 'center',
                }}>
                    <Box sx={{ width: { xs: "200px", sm: "267px" }, height: { xs: "200px", sm: "263px" }, position: 'relative' }}>
                        <motion.img
                            src={abhiyanthLogo}
                            alt="Ablogo"
                            style={{ width: '100%', height: 'auto', objectFit: "fill", bottom: "30px" }}
                            animate={{x:10 , y: [0, -50, 0]}}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                        <img src={maskGroup} alt="Mask Group" style={{ width: '287px', height: '150px', objectFit: "fill", position: 'absolute', bottom: '10px', top: "140px", right: "10px", left: "10px" }} />
                    </Box>
                </Box>
                <Typography sx={styles.title}>ABHIYANTH 2K25</Typography>
                <Box sx={{ position: 'absolute', top: '30%', left: "0" }}>
                    <motion.button
                        style={styles.buttonLeft}
                        whileHover={{ scale: 1.1 }}
                    >
                        <Typography component="span" sx={styles.buttonText}>
                            Technical Events
                        </Typography>
                    </motion.button>
                </Box>
                <Box sx={{ position: 'absolute', top: '30%', right: "0" }}>
                    <motion.button
                        style={styles.buttonRight}
                        whileHover={{ scale: 1.1 }}
                    >
                        <Typography component="span" sx={{ ...styles.buttonText, minWidth: "100px" }}>
                            Culturals
                        </Typography>
                    </motion.button>
                </Box>
                <Box sx={{ position: 'absolute', bottom: '10%', left: "0" }}>
                    <motion.button
                        style={{ ...styles.buttonLeft, minWidth: "150px" }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <Typography component="span" sx={{ ...styles.buttonText }}>
                            Stalls
                        </Typography>
                    </motion.button>
                </Box>
                <Box sx={{ position: 'absolute', bottom: '10%', right: "0" }}>
                    <motion.button
                        style={{ ...styles.buttonRight, width: "150px" }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <Typography sx={styles.buttonText}>
                            Sports
                        </Typography>
                    </motion.button>
                </Box>
            </Box>
        </div>
    )
}
