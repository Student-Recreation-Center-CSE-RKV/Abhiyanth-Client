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
import { LoginPrompt } from '../login/LoginPrompt';
import { auth } from '../../api/firebaseConfig';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { LogoutPrompt } from '../login/LogoutPrompt';



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
    fontSize: "17px",

  },
  smallMenucontainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    zIndex: "2",
    position: "fixed",
    backgroundColor: "rgb(137,112,162,0.8)"
  },
  smallMenutext: {
    background: "linear-gradient(to right, purple, red )",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "bold",
    fontSize: "19px"
  },


}
function BasicMenu() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleBasicMenuLoginClick = () => {
    navigate('/auth/login')
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut(); // Firebase signOut method
      // setIsLogin(false); 
      toast.success("Successfully logged out");
      navigate('/');
    } catch (error) {
      console.error("Logout Error: ", error.message);
      toast.error("Error during logout");
    }
  };



  return (

    <div style={styles.smallMenucontainer}>
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

        <MenuItem sx={styles.smallMenutext} onClick={() => { handleClose(); navigate("") }}>Home</MenuItem>
        <MenuItem sx={styles.smallMenutext} onClick={() => { handleClose(); navigate("/gallery") }}>Gallery</MenuItem>
        <MenuItem sx={styles.smallMenutext} onClick={() => { handleClose(); navigate("/sponsers") }}>Sponsors</MenuItem>
        <MenuItem sx={styles.smallMenutext} onClick={() => { handleClose(); navigate("/about") }}>About Us</MenuItem>
        <MenuItem sx={styles.smallMenutext} onClick={() => { handleClose(); navigate("/ourTeam") }}>Our Team</MenuItem>
        

        {user ? (<MenuItem sx={styles.smallMenutext} onClick={handleLogout}>Logout</MenuItem>) : (<MenuItem sx={styles.smallMenutext} onClick={handleBasicMenuLoginClick}>Login</MenuItem>)}

      </Menu>
    </div>
  );
}

function Header() {


  const navigate = useNavigate();
  const location = useLocation();
  const [isSelected, setIsSelected] = useState(1);
  const [user, setUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      await auth.signOut(); // Firebase signOut
      // setIsLogin(false);
      console.log("Successfully logged out")
      toast.success("Successfully logged out");
      navigate('/');
    } catch (error) {
      console.error("Logout Error: ", error.message);
      toast.error("Error during logout");
    }
  };


  const pathToNavMap = {
    "/": 1,
    "/gallery": 2,
    "/sponsers": 3,
    "/about": 4
  };


  useEffect(() => {
    const currentPath = location.pathname;
    setIsSelected(pathToNavMap[currentPath] || 1);
    // eslint-disable-next-line
  }, [location.pathname]);

  return (
    <Box>
      <AppBar position="fixed" sx={{ borderRadius: "0px 0px 30px 30px", backgroundColor: "rgb(137,112,162,0.8)", zIndex: "7" }}>
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
              Sponsors
            </Button>
            {isSelected === 3 && <motion.div layoutId='underline' style={{ boxShadow: "0px 4px 2px 1px white", width: "100%" }} />}
          </nav>
          <nav>
            <Button variant="text" sx={styles.textStyles} onClick={() => navigate("/about")}>
              About Us
            </Button>
            {isSelected === 4 && <motion.div layoutId='underline' style={{ boxShadow: "0px 4px 2px 1px white", width: "100%" }} />}
          </nav>

          <nav>
            {user ? (
          

              <Button variant="text" sx={styles.textStyles}>
                <LogoutPrompt user={user} handleClick={handleClick} anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  handleLogout={handleLogout}

                />
              </Button>
            ) : (
              <Button variant="text" sx={styles.textStyles}>
                {/* {setIsLogin(true)} */}
                <LoginPrompt />
              </Button>
            )}
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
