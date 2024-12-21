import React from 'react'

import { audience, abhiyanthLogo, maskGroup } from '../../assets/images'
import { Box, Typography } from '@mui/material'
import { motion } from 'motion/react';
export default function HomeStartingComponent() {
    return (
        <div >
            <Box sx={{ position: 'relative', width: '100%', height: '100vh', backgroundImage:`url(${audience})`,backgroundSize:"cover", overflow: 'hidden' }}>
                <Box sx={{
                    position: 'absolute',
                    top: '70%', left: '51%',
                    transform: 'translate(-50%, -50%)',
                    color: 'white',
                    textAlign: 'left',
                }}>
                    <div style={{ width: "267px", height: "263px", position: 'relative' }}>
                        <motion.img
                            src={abhiyanthLogo}
                            alt="Ablogo"
                            style={{ width: '100%', height: 'auto', objectFit: "fill", bottom: "30px" }}
                            animate={{ y: [0, -50, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                        <img src={maskGroup} alt="Mask Group" style={{ width: '287px', height: '150px', objectFit: "fill", position: 'absolute', bottom: '10px', top:"140px",right: "10px", left: "10px" }} />
                    </div>

                    <h1 style={{
                        fontFamily: 'Audiowide',
                        fontSize: '30px',
                        fontWeight: 400,
                        lineHeight: '81.59px',
                        letterSpacing: '0.19em',
                        textAlign: 'center',
                        marginTop: '0px',
                    }}>ABHIYANTH 2K25</h1>
                </Box>
                <Box sx={{ position: 'absolute', top: '30%', left: "0" }}>
                    <motion.button
                        style={{ padding: '10px 12px', fontSize: '16px', cursor: 'pointer', borderRadius: "0 30px 0 0",  backgroundColor:"transparent", borderColor:"white",color:"white"}}
                        whileHover={{ scale: 1.1 }}
                    >
                        <Typography sx={{
                            fontFamily: 'Audiowide',
                            fontSize: '28px',
                            fontWeight: 400,
                            lineHeight: '35.7px',
                            textAlign: 'left',
                            textUnderlinePosition: 'from-font',
                            textDecorationSkipInk: 'none',

                        }}>
                            Technical Events
                        </Typography>
                    </motion.button>
                </Box>
                <Box sx={{ position: 'absolute', top: '30%', right: "0" }}>
                    <motion.button
                        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', borderRadius: "30px  0 0 0", backgroundColor:"transparent", borderColor:"white",color:"white" }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <Typography sx={{
                            fontFamily: 'Audiowide',
                            fontSize: '28px',
                            fontWeight: 400,
                            lineHeight: '35.7px',
                            textAlign: 'left',
                            textUnderlinePosition: 'from-font',
                            textDecorationSkipInk: 'none',

                        }}>
                            Culturals
                        </Typography>
                    </motion.button>
                </Box>
                <Box sx={{ position: 'absolute', bottom: '10%', left: "0" }}>
                    <motion.button
                        style={{ padding: '10px 70px', fontSize: '16px', width: "300px", cursor: 'pointer', borderRadius: "0 30px 0 0",  backgroundColor:"transparent", borderColor:"white",color:"white"}}
                        whileHover={{ scale: 1.1 }}
                    >
                        <Typography sx={{
                            fontFamily: 'Audiowide',
                            fontSize: '28px',
                            fontWeight: 400,
                            lineHeight: '35.7px',
                            textAlign: 'left',
                            textUnderlinePosition: 'from-font',
                            textDecorationSkipInk: 'none',

                        }}>
                            Stalls
                        </Typography>
                    </motion.button>
                </Box>
                <Box sx={{ position: 'absolute', bottom: '10%', right: "0" }}>
                    <motion.button
                        style={{ padding: '10px 20px', fontSize: '16px', width: "200px", cursor: 'pointer', borderRadius: "30px 0 0 0" , backgroundColor:"transparent", borderColor:"white",color:"white"}}
                        whileHover={{ scale: 1.1}}
                    >
                        <Typography sx={{
                            fontFamily: 'Audiowide',
                            fontSize: '28px',
                            fontWeight: 400,
                            lineHeight: '35.7px',
                            textAlign: 'left',
                            textUnderlinePosition: 'from-font',
                            textDecorationSkipInk: 'none',

                        }}>
                            Sports
                        </Typography>
                    </motion.button>
                </Box>
            </Box>
        </div>
    )
}

// linear-gradient(145deg, rgba(122, 54, 119, 0.7) 30%, rgba(82, 74, 162, 0.6) 50%, rgba(89, 57, 125, 0.4) 20%, rgba(57, 42, 107, 0.3) 10%)`,




// background: #4758CB;
// background: radial-gradient(at left top, #4758CB, #6529ED);