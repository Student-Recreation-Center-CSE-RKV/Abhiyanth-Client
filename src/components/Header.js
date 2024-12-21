import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {motion} from "motion/react"
import { miniAbhiyanthLogo } from '../assets/images/index';
import { useNavigate } from 'react-router-dom';

function Header() {
  const styles={textStyles : {
    fontFamily: "Audiowide",
    fontWeight: "400",
    fontStyle: "normal",
    color: "white",
    capitalize:"None",
    fontSize:"10px"
  },
container:{ 
  borderRadius: "0px 0px 30px 30px", 
  backgroundColor: "rgb(137,112,162,0.8)", 
  zIndex: "2" },

}
  const navigate=useNavigate()
  const [isSelected, setIsSelected] = React.useState(1);
  return (
    <Box>
      <AppBar position="fixed" sx={styles.container}>
        <Toolbar sx={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          alignItems: "center",
          justifyContent: "space-between",
          height: "40px"
        }}>
          <nav>
            <Button variant="text" sx={styles.textStyles} onClick={() => {setIsSelected(1); navigate("")}}>
              Home
              </Button>
              {isSelected === 1 && <motion.div layoutId='underline'  style={{ boxShadow: "0px 4px 2px 1px white" ,width:"100%"}}  />}
            </nav>
          <nav>
            <Button variant="text" sx={styles.textStyles} onClick={() => {setIsSelected(2); navigate("/gallery")}}>
              Gallery
            </Button>
              {isSelected === 2 && <motion.div   layoutId='underline'  style={{ boxShadow: "0px 4px 2px 1px white" ,width:"100%"}}  />}
            
          </nav>
          <nav >
            <div >
              <img src={miniAbhiyanthLogo} alt="A" style={{width:"60px",height:"100%"}}/>
              </div>
          </nav>
          <nav>
            <Button variant="text" sx={styles.textStyles} onClick={() => {setIsSelected(3); navigate("/sponsers")}}>
              Sponsors
            </Button>
              {isSelected === 3 && <motion.div layoutId='underline' style={{ boxShadow: "0px 4px 2px 1px white" ,width:"100%"}} />}
          </nav>
          <nav>
            <Button variant="text" sx={styles.textStyles} onClick={() => {setIsSelected(4); navigate("/about")}}>
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