import { Box, Typography,Rating} from "@mui/material";
import { useState } from "react";
import { motion } from 'framer-motion';
import StarIcon from '@mui/icons-material/Star';
import {dummyImage} from "../../assets/images/index";
import {useMediaQuery}  from "@mui/material";
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
function Top(){
  const [value,setValue] = useState(2);
  const isSmallScreen = useMediaQuery('(max-width:280px)');
  const [status,setStatus] = useState("live");
  const getStatusText = () => {
    if (status === "upcoming") {
      return "DD/MM/YYYY";
    } else if (status === "ongoing") {
      return "TODAY AT DD/MM/YYYY";
    } else if (status === "completed") {
      return "";
    } else if (status === "live") {
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
          <img src={dummyImage} alt="Event" style={{width:"100%", height:"auto", borderRadius: "16.718px"}}/>
        </Box>
      </Box>
      <Box sx={styles.RatingLayout}>
        <Typography variant="h5" sx={styles.subHeading}>
          {
           isSmallScreen ? null : "Rating:"
          }&nbsp;
         
        </Typography>
          <Rating
          name="rating"
          value={value}
          readOnly
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55,color:"white" }} fontSize="inherit" max={5} />}
        />
        <Box sx={{fontFamily:"Audiowide",color:"white", fontWeight:"bold"}}>{value}/5</Box>
      </Box>
    </Box>
  )
}
export default Top;


const item={
  "id": "event-001",
  "name": "Hackathon 2024",
  "description": "A 24-hour hackathon to solve real-world problems.",
  "status": "live",
  "date": "2024-12-23",
  "time": "09:00:00",
  "venue": "Tech Hall, RGUKT RK Valley",
  "organizers": [
    { "name": "John Doe", "mobile": "9876543210" },
    { "name": "Jane Smith", "mobile": "9123456789" }
  ],
  "links": [
    { "text": "Event Details", "link": "https://example.com/hackathon" },
    { "text": "Submit Project", "link": "https://example.com/submit" }
  ],
  "results": [],
  "images": {
    "mainImage": "https://example.com/hackathon_main.jpg",
    "lastImage": "https://example.com/hackathon_last.jpg",
    "descImageLeft": "https://example.com/hackathon_left.jpg",
    "descImageRight": "https://example.com/hackathon_right.jpg"
  }
}
