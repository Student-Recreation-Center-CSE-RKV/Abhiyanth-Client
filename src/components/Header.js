import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {motion} from "motion/react"
import "../assets/styles/global.css";
import { useNavigate } from 'react-router-dom';

function Header() {
  const textStyles = {
    fontFamily: "Audiowide",
    fontWeight: "400",
    fontStyle: "normal",
    color: "white",
    capitalize:"None",
    fontSize:"10px"

  }
  const navigate=useNavigate()
  const [isSelected, setIsSelected] = React.useState(1);
  return (
    <Box>
      <AppBar position="fixed" sx={{ borderRadius: "0px 0px 30px 30px", backgroundColor: "rgb(137,112,162,0.3)", zIndex: "2" }}>
        <Toolbar sx={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          alignItems: "center",
          justifyContent: "space-between",
          height: "40px"
        }}>
          <nav>
            <Button variant="text" sx={textStyles} onClick={() => {setIsSelected(1); navigate("")}}>
              Home
              </Button>
              {isSelected === 1 && <motion.div layoutId='underline'  style={{ boxShadow: "0px 4px 2px 1px white" ,width:"100%"}}  />}
            </nav>
          <nav>
            <Button variant="text" sx={textStyles} onClick={() => {setIsSelected(2); navigate("/gallery")}}>
              Gallery
            </Button>
              {isSelected === 2 && <motion.div   layoutId='underline'  style={{ boxShadow: "0px 4px 2px 1px white" ,width:"100%"}}  />}
            
          </nav>
          <nav>
            <Button variant="text" sx={textStyles} onClick={() => {setIsSelected(3); navigate("/sponsers")}}>
              Sponsors
            </Button>
              {isSelected === 3 && <motion.div layoutId='underline' style={{ boxShadow: "0px 4px 2px 1px white" ,width:"100%"}} />}
          </nav>
          <nav>
            <Button variant="text" sx={textStyles} onClick={() => {setIsSelected(4); navigate("/about")}}>
              About Us
            </Button>
              {isSelected === 4 && <motion.div layoutId='underline'  style={{ boxShadow: "0px 4px 2px 1px white" ,width:"100%"}}  />}
          </nav>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


export default Header;