import React, { useEffect } from 'react';
import { audience, abhiyanthLogo, maskGroup } from '../../assets/images';
import logo from "../../assets/images/Rgukt_Logo_White.png";
import { Box, Typography, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import CountdownTimer from './timer';
import confetti from 'canvas-confetti'; // Import confetti

export default function HomeStartingComponent() {
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
            bottom: "14%",
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
            bottom: "10%",
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
            fontSize: { xs: '20px', sm: '30px', md: '45px', lg: "50px" },
            fontWeight: 500,
            color: 'white',
            textAlign: 'center',
        }
    };

    const istitleVisible = useMediaQuery('(max-width:800px)');

    useEffect(() => {
        // Triggering Side Cannons Confetti
        const end = Date.now() + 3 * 1000; // 3 seconds
        const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];
        const frame = () => {
            if (Date.now() > end) return;

            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                startVelocity: 60,
                origin: { x: 0, y: 0.5 },
                colors: colors,
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                startVelocity: 60,
                origin: { x: 1, y: 0.5 },
                colors: colors,
            });

            requestAnimationFrame(frame);
        };
        frame();

        // Triggering Emoji Confetti
        const scalar = 2;
        const unicorn = confetti.shapeFromText({ text: "🦄", scalar });
        const defaults = {
            spread: 360,
            ticks: 60,
            gravity: 0,
            decay: 0.96,
            startVelocity: 20,
            shapes: [unicorn],
            scalar,
        };
        const shoot = () => {
            confetti({
                ...defaults,
                particleCount: 30,
            });
            confetti({
                ...defaults,
                particleCount: 5,
            });
            confetti({
                ...defaults,
                particleCount: 15,
                scalar: scalar / 2,
                shapes: ["circle"],
            });
        };

        setTimeout(shoot, 0);
        setTimeout(shoot, 100);
        setTimeout(shoot, 200);

        // Triggering Fireworks Confetti
        const duration = 5 * 1000;
        const animationEnd = Date.now() + duration;
        const randomInRange = (min, max) =>
            Math.random() * (max - min) + min;
        const interval = window.setInterval(() => {
            const timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            });
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            });
        }, 250);
    }, []);

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
                <Box sx={{ position: 'absolute', top: '24%', left: '50%', transform: 'translateX(-50%)' }}>
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
    );
}
