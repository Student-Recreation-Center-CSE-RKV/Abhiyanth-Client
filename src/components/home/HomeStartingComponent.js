import React from 'react';
import { audience, abhiyanthLogo, maskGroup } from '../../assets/images';
import logo from "../../assets/images/Rgukt_Logo_White.png";
import { Box, Typography, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import CountdownTimer from './timer';
import { useNavigate } from 'react-router-dom';



export default function HomeStartingComponent() {
    const navigate=useNavigate()
    const styles = {
        heroContainer: {
            position: 'relative',
            width: '100%',
            height: '100vh',
            backgroundImage: `url(${audience})`,
            backgroundSize: "cover",
            overflow: 'hidden',
        },
        title: {
            fontFamily: 'Audiowide',
            fontSize: { xs: '10px', sm: '30px', md: '45px', lg: '60px' },
            fontWeight: 400,
            lineHeight: "normal",
            width: "100%",
            letterSpacing: '0.19em',
            position: "absolute",
            bottom: "5%",
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: 'center',
            color: 'white',
        },
        subtitle: {
            fontFamily: 'Audiowide',
            fontSize: { xs: '8px', sm: '18px', md: '22px', lg: '25px' },
            fontWeight: 300,
            letterSpacing: '0.15em',
            position: "absolute",
            bottom: "2%",
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
        buttonText: {
            fontFamily: 'Audiowide',
            fontSize: { xs: '18px', sm: '20px', md: '28px' },
            fontWeight: 400,
            lineHeight: '35.7px',
            textAlign: 'center',
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none',
        },
        timer: {
            fontFamily: 'Audiowide',
            fontSize: { xs: '22px', sm: '30px', md: '45px', lg: "50px" },
            padding:{xs:"0"},
            margin:{xs:"0"},
            fontSize: { xs: '18px', sm: '27px', md: '45px', lg: "50px" },
            fontWeight: 500,
            color: 'white',
            textAlign: 'center',
        }
    };

    const istitleVisible = useMediaQuery('(max-width:800px)');

    
    return (
        <div>
            <Box sx={styles.heroContainer}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "75px",
                        display: "flex",
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                    }}
                >
                    <img
                        src={logo}
                        alt="RGUKT Logo"
                        style={{ width: "60px", height: "60px" }}
                    />
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: "bold",
                            textTransform: "uppercase",
                            fontFamily: "Audiowide",
                            color: "white",
                            display: {
                                xs: "none",
                                sm: "none",
                                md: "block",
                                lg: "block",
                            },
                        }}
                    >
                        Rajiv Gandhi University of Knowledge Technologies - RK Valley
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: "bold",
                            textTransform: "uppercase",
                            fontFamily: "Audiowide",
                            color: "white",
                            display: {
                                xs: "block",
                                sm: "block",
                                md: "none",
                                lg: "none",
                            },
                        }}
                    >
                        RGUKT RK Valley
                    </Typography>
                </Box>
                <Box sx={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)' }}>
                    <Typography sx={styles.timer}>
                        <CountdownTimer targetDate={"2025-02-27T00:00:00"} />
                    </Typography>
                </Box>
                <Box sx={{
                    position: 'absolute',
                    top: '60%', left: { xs: '45%', sm: '50%', md: "50%" },
                    transform: 'translate(-50%, -50%)',
                    color: 'white',
                    textAlign: 'center',
                }}>
                    <Box sx={{ width: { xs: "200px", sm: "267px" }, height: { xs: "200px", sm: "263px" }, position: 'relative' }}>
                        <motion.img
                            src={abhiyanthLogo}
                            alt="Ablogo"
                            style={{
                                width: '100%',
                                height: 'auto',
                                objectFit: "fill",
                                bottom: "40px",
                                paddingLeft: "20px", 
                            }}
                            animate={{ y: [0, -50, 0] }} // Up and down movement only
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />

                        <img src={maskGroup} alt="Mask Group" style={{ width: '300px', height: '160px', objectFit: "fill", position: 'absolute', bottom: { xm: '20px', sm: '10px', md: "10px" }, top: "140px", right: "10px", left: "10px" }} />
                    </Box>
                </Box>
                {istitleVisible ? null : (
                    <>
                        <Typography sx={styles.title}>ABHIYANTH 2K25</Typography>
                        <Typography sx={styles.subtitle}>#AbhiyathKashor</Typography>
                    </>
                )}
                {/* <Box sx={{ position: 'absolute', top: '30%', left: "0" }} onClick={()=>{navigate("/technicalEvents")}} >
                    <motion.button
                        style={styles.buttonLeft}
                        whileHover={{ scale: 1.1 }}
                    >
                        <Typography component="span" sx={styles.buttonText}>
                            Technical Events
                        </Typography>
                    </motion.button>
                </Box> */}
                {/* <Box sx={{ position: 'absolute', top: '30%', right: "0" }} onClick={()=>{navigate("/events")}}>
                    <motion.button
                        style={styles.buttonRight}
                        whileHover={{ scale: 1.1 }}
                    >
                        <Typography component="span" sx={{ ...styles.buttonText, minWidth: "100px" }}>
                            Events
                        </Typography>
                    </motion.button>
                </Box> */}
                {/* <Box sx={{ position: 'absolute', bottom: '10%', left: "0" }} onClick={()=>{navigate("/register-volunteer")}}>
                    <motion.button
                        style={{ ...styles.buttonLeft, minWidth: "150px" }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <Typography component="span" sx={{ ...styles.buttonText }}>
                        Volunteers
                        </Typography>
                    </motion.button>
                </Box> */}
                {/* <Box sx={{ position: 'absolute', bottom: '10%', right: "0" }} onClick={()=>{navigate("/stalls")}}>
                    <motion.button
                        style={{ ...styles.buttonRight, width: "150px" }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <Typography sx={styles.buttonText}>
                            Stalls
                        </Typography>
                    </motion.button>
                </Box> */}
            </Box>
        </div>
    );
}
