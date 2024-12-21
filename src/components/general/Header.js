import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { motion } from "motion/react";
// import "../../assets/styles/global.css"
import { miniAbhiyanthLogo } from '../../assets/images/index';
import { useNavigate, useLocation } from 'react-router-dom';

function Header() {
  const textStyles = {
    fontFamily: "Audiowide",
    fontWeight: "400",
    fontStyle: "normal",
    color: "white",
    textTransform: "none", 
    fontSize: "17px"
  };

  const navigate = useNavigate();
  const location = useLocation();
  const [isSelected, setIsSelected] = useState(1);

  
  const pathToNavMap = {
    "/": 1,
    "/gallery": 2,
    "/sponsors": 3,
    "/about": 4
  };

  
  useEffect(() => {
    const currentPath = location.pathname;
    setIsSelected(pathToNavMap[currentPath] || 1); 
  }, [location.pathname]);

  return (
    <Box>
      <AppBar position="fixed" sx={{ borderRadius: "0px 0px 30px 30px", backgroundColor: "rgb(137,112,162,0.8)", zIndex: "2" }}>
        <Toolbar sx={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          alignItems: "center",
          justifyContent: "space-around",
          height: "40px"
        }}>
          <nav>
            <Button variant="text" sx={textStyles} onClick={() => navigate("/")}>
              Home
            </Button>
            {isSelected === 1 && <motion.div layoutId='underline' style={{ boxShadow: "0px 4px 2px 1px white", width: "100%" }} />}
          </nav>
          <nav>
            <Button variant="text" sx={textStyles} onClick={() => navigate("/gallery")}>
              Gallery
            </Button>
            {isSelected === 2 && <motion.div layoutId='underline' style={{ boxShadow: "0px 4px 2px 1px white", width: "100%" }} />}
          </nav>
          <nav >
            <div>
              <img src={miniAbhiyanthLogo} alt="A" style={{ width: "60px", height: "100%" }} />
            </div>
          </nav>
          <nav>
            <Button variant="text" sx={textStyles} onClick={() => navigate("/sponsors")}>
              Sponsors
            </Button>
            {isSelected === 3 && <motion.div layoutId='underline' style={{ boxShadow: "0px 4px 2px 1px white", width: "100%" }} />}
          </nav>
          <nav>
            <Button variant="text" sx={textStyles} onClick={() => navigate("/about")}>
              About Us
            </Button>
            {isSelected === 4 && <motion.div layoutId='underline' style={{ boxShadow: "0px 4px 2px 1px white", width: "100%" }} />}
          </nav>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
