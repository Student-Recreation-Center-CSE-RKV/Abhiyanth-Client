import React from 'react';
import "../../styles/Footer.css";
import image from "../../assets/images/abhiyath_logo_2.png"
import src_logo from "../../assets/images/src_logo_white.jpeg"
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section left">
                    <ul>
                        <li>Home</li>
                        <li>Gallery</li>
                        <li>Sponsors</li>
                        <li>Stalls</li>
                    </ul>
                    <ul>
                        <li>Technical Events</li>
                        <li>Hackathons</li>
                        <li>Webinars</li>
                        <li>Workshops</li>
                    </ul>
                    <ul>
                        <li>About Us</li>
                        <li>Our Team</li>
                        <li>Contact us</li>

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
                    <div style={{display:"flex",flexDirection:"row",alignItems:"center",paddingTop:"20px",justifyContent:"center"}}>
                        <img
                            src={src_logo}
                            alt="SRC Logo"
                            className="footer-image"
                            style={{ height: "30px", width: "30px", margin: "5px" , borderRadius: "50%" }}
                        />
                        <p style={{fontSize: "14px", fontWeight: 400,fontFamily:"Inter"}}>Powered by SRC @CSE</p>
                    </div>
                </div>


                <div className="vertical-line"></div>


                <div className="footer-section right">
                    <h3>Follow Us For Updates :</h3>
                    <div className="social-icons">
                        <FacebookIcon className="icon" sx={{ fontSize: "40px" }} />
                        <LinkedInIcon className="icon" sx={{ fontSize: "40px" }} />
                        <InstagramIcon className="icon" sx={{ fontSize: "40px" }} />
                        <TwitterIcon className="icon" sx={{ fontSize: "40px" }} />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
