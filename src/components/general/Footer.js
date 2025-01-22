import React from 'react';
import "../../styles/Footer.css";
import image from "../../assets/images/abhiyath_logo_2.png"
import src_logo from "../../assets/images/src_logo_white.jpeg"
import YoutubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { IconButton } from '@mui/material';

import { useNavigate } from 'react-router-dom';

const email = 'abhiyanth@rguktrkv.ac.in';
const whatsappLink = 'https://whatsapp.com/channel/0029VawFXPVLCoWs5A8bCo3D';
const instagramLink = 'https://www.instagram.com/abhiyanth_rkv?igsh=NjNjbXdrbW05YTVo';
const linkedinLink = 'https://www.linkedin.com/company/abhiyanth-rgukt-rk-valley/';
const youtubeLink = 'https://youtube.com/@abhiyanth-rkvalley?si=GfVnmrQrjrY0Ml37';

const styles = {
    icon: {
      fontSize: {
        xs: '30px',  
        sm: '35px',  
        md: '40px',  
        lg: '45px',  
      },
    },
  };

const Footer = () => {
    const navigate = useNavigate()
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section left">
                    <ul>
                        <li onClick={() => navigate("/")}>Home</li>
                        <li onClick={() => navigate("/gallery")}>Gallery</li>
                        <li onClick={() => navigate("/sponsers")}>Sponsors</li>
                        <li onClick={() => navigate("/about")}>About Us</li>
                    </ul>
                    <ul>
                        <li onClick={() => navigate("/technicalEvents")}>Technical Events</li>
                        <li onClick={() => navigate("/projectShowCase")}>Projects</li>
                        <li onClick={() => navigate("/events")}>Culturals</li>
                        <li onClick={() => navigate("/stalls")}>Stalls</li>
                       
                    </ul>
                    <ul>
                        
                        <li onClick={() => navigate("/ourTeam")}>Our Dev Team</li>
                        <li onClick={() => navigate("/contactUs")} >Contact us</li>

                    </ul>
                </div>
                <div className="vertical-line"></div>
                <div className="footer-section middle">
                    <img
                        src={image}
                        alt="Abhiyanth Logo"
                        className="footer-image"
                        style={{ height: "150px", width: "150px", margin: "0px" }}
                    />
                    <div>
                        <h1>Abhiyanth 2K25</h1>
                    </div>
                    <p>
                        Rajiv Gandhi University's Abhiyanth is more than just an event—it's a celebration of innovation,
                        creativity, and community, offering a dynamic platform for showcasing talent, exchanging ideas,
                        and creating unforgettable experiences.
                    </p>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", paddingTop: "20px", justifyContent: "center",cursor: "pointer" }} onClick={() => window.open("https://www.linkedin.com/company/src-rgukt-rkvalley/", "_blank")}> 
                        <img
                            src={src_logo}
                            alt="SRC Logo"
                            className="footer-image"
                            style={{ height: "40px", width: "40px", margin: "5px", borderRadius: "50%", cursor: "pointer" }}
                            onClick={() => window.open("https://www.linkedin.com/company/src-rgukt-rkvalley/", "_blank")}
                        />
                        <p style={{ fontSize: "18px", fontWeight: 400, fontFamily: "Inter" }}>Powered by SRC @CSE</p>
                    </div>
                </div>


                <div className="vertical-line"></div>


                <div className="footer-section right">
                    <h3>Follow Us For Updates :</h3>
                    <div className="social-icons">
                        <IconButton
                            component="a"
                            href={instagramLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <InstagramIcon className="icon" sx={styles.icon} />
                        </IconButton>

                        <IconButton
                            component="a"
                            href={linkedinLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LinkedInIcon className="icon" sx={styles.icon} />
                        </IconButton>

                        <IconButton
                            component="a"
                            href={youtubeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <YoutubeIcon className="icon" sx={styles.icon} />
                        </IconButton>

                        <IconButton
                            component="a"
                            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <EmailIcon className="icon" sx={styles.icon} />
                        </IconButton>

                        <IconButton
                            component="a"
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <WhatsAppIcon className="icon" sx={styles.icon} />
                        </IconButton>


                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
