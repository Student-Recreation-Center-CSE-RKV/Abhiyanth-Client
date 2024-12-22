import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { motion } from "motion/react";
import { miniAbhiyanthLogo } from '../../assets/images/index';
import { useNavigate, useLocation } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Typography } from '@mui/material';

const styles = {
  menubar: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    gap: "20px",
    alignItems: "center",
    justifyContent: "space-around",
    height: "40px"
  },
  textStyles: {
    fontFamily: "Audiowide",
    fontWeight: "400",
    fontStyle: "normal",
    color: "white",
    textTransform: "none",
    fontSize: "19px"
  },

}
function BasicMenu() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "10px 5px", position: "fixed",top: 0,left: 0,zIndex: 1000,boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",backgroundColor:"rgba(0, 0, 0, 0.6)"
    }}>
      <nav style={{ display: "flex", alignItems: "center" }}>
        <img src={miniAbhiyanthLogo} alt="A" style={{ width: "40px", height: "40px", marginRight: "10px" }} />
        <Typography sx={styles.textStyles}>Abhiyanth</Typography>
      </nav>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ color: "white", background: "transparent", border: "none" }}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={() => { handleClose(); navigate("") }}>Home</MenuItem>
        <MenuItem onClick={() => { handleClose(); navigate("/gallery") }}>Gallery</MenuItem>
        <MenuItem onClick={() => { handleClose(); navigate("/sponsers") }}>Sponsors</MenuItem>
        <MenuItem onClick={() => { handleClose(); navigate("/about") }}>About</MenuItem>
      </Menu>
    </div>
  );
}

function Header() {


  const navigate = useNavigate();
  const location = useLocation();
  const [isSelected, setIsSelected] = useState(1);


  const pathToNavMap = {
    "/": 1,
    "/gallery": 2,
    "/sponsers": 3,
    "/about": 4
  };


  useEffect(() => {
    const currentPath = location.pathname;
    setIsSelected(pathToNavMap[currentPath] || 1);
  }, [location.pathname]);

  return (
    <Box>
      <AppBar position="fixed" sx={{ borderRadius: "0px 0px 30px 30px", backgroundColor: "rgb(137,112,162,0.8)", zIndex: "2" }}>
        <Toolbar sx={styles.menubar}>
          <nav>
            <Button variant="text" sx={styles.textStyles} onClick={() => navigate("/")}>
              Home
            </Button>
            {isSelected === 1 && <motion.div layoutId='underline' style={{ boxShadow: "0px 4px 2px 1px white", width: "100%" }} />}
          </nav>
          <nav>
            <Button variant="text" sx={styles.textStyles} onClick={() => navigate("/gallery")}>
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
            <Button variant="text" sx={styles.textStyles} onClick={() => navigate("/sponsers")}>
              Sponsers
            </Button>
            {isSelected === 3 && <motion.div layoutId='underline' style={{ boxShadow: "0px 4px 2px 1px white", width: "100%" }} />}
          </nav>
          <nav>
            <Button variant="text" sx={styles.textStyles} onClick={() => navigate("/about")}>
              About Us
            </Button>
            {isSelected === 4 && <motion.div layoutId='underline' style={{ boxShadow: "0px 4px 2px 1px white", width: "100%" }} />}
          </nav>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

function ResponsiveMenu() {
  const isSmallScreen = useMediaQuery('(max-width:650px)');

  return (
    <div>
      {isSmallScreen ? <BasicMenu /> : <Header />}
    </div>
  );
}

export default ResponsiveMenu;
