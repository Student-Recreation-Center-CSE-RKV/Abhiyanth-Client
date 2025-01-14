import { Box, Typography,Rating} from "@mui/material";
import { useState } from "react";
import { motion } from 'framer-motion';
import StarIcon from '@mui/icons-material/Star';
import {dummyImage} from "../../assets/images/index";
import {useMediaQuery}  from "@mui/material";
import { extractDateTime } from "../../utils/timeStampToDate";

const styles={
  TopLayout:{
    margin:"3% 1%"
  },
  titleLayout:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent:"center",
    padding:"2%",
  },
  eventStatus:{
    display:"inline-flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    fontSize:"18px",
  },
  title:{
    color: "#00B093",
    fontFamily: "Audiowide",
    fontSize: { xs: "24px", md: "28px", lg: "30px" },
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight:"normal",
    },
  titleImage:{
    borderRadius: "16.718px",
    background: ` lightgray 50% / cover no-repeat`,
    boxShadow:" 0px 0px 8.359px 1.672px #00B093"
  },

  subHeading:{
    color: "#00B093",
    fontFamily: "Audiowide",
    fontSize: "30px",
    fontStyle:"normal",
    fontWeight:"400",
    lineHeight:"normal"
  },
  RatingLayout:{
    display: "flex",
    flexDirection: "row",
    justifyContent:"left",
    alignItems:"center",
  },


}
function Top({item}){

  const date=extractDateTime(item.date);
  
  
  const getStatusText = () => {
    if (item.status === "upcoming") {
      return date.date;
    } else if (item.status === "ongoing") {
      return `TODAY AT ${date.date}`;
    } else if (item.status === "completed") {
      return "Completed";
    } else if (item.status === "live") {
      return (
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px"}}>
          <motion.div
            animate={{ scale: 1.5 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            style={{
              width: "8px",
              height: "8px",
              backgroundColor: "red",
              borderRadius: "50%",
            }}
          ></motion.div>
          <Typography variant="h6" sx={{ color: "red", fontWeight: "bold" }}>
            Live
          </Typography>
        </Box>
      );
    }
    return "";
  };
 
  return (
    <Box sx={styles.TopLayout} >
      <Box sx={styles.titleLayout}>
        <Typography variant="h2"  sx={styles.title}>{item.name}</Typography>
        <Typography variant="h3" sx={{...styles.eventStatus,color:"#F00"}}> {getStatusText()}</Typography>
      </Box>
      <Box >
        <Box sx={styles.titleImage}>
          <img src={item.images.mainImage} alt="Event" style={{width:"100%", height:"500px", borderRadius: "16.718px",objectFit: "cover"}}/>
        </Box>
      </Box>
    </Box>
  )
}
export default Top;

