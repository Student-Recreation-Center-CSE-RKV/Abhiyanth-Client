import Description from "../components/eventDetails/Description";
import Top from "../components/eventDetails/Top";
import { Box, Typography } from "@mui/material";
import GradientBorderComponent from "../components/general/GradientBorderComponet";
import { Link } from "react-router-dom";
const styles={
  container:{
    margin:"5% 1% ",
    borderRadius:"25px",
    background:"rgba(0, 0, 0, 0.20)",
    boxShadow: "0px 0px 16.718px 0px #D9D9D9",
    padding:"5px"
  },
  subHeading:{
    color: "#00B093",
    fontFamily: "Audiowide",
    fontSize: "30px",
    fontStyle:"normal",
    fontWeight:"400",
    lineHeight:"normal"
  },
}
function EventDetails(){
  
  return(
    <div>
      
      <Box sx={styles.container} >
        <Box >
          <Top item={item}/>
        </Box>
        <Box>
          <Description item={item}/>
        </Box>

      </Box>
      
    <Box >
      
      </Box>
      <Box>
      <Typography sx={{ ...styles.subHeading, color:"#C91C75" , textAlign:"center",margin:"2%"}}>
            <Link to="/events" styles={{color:"#C91C75", textDecoration: "none" }}> Go Back </Link>
      </Typography>
    </Box>

    </div>
  )
}

export default EventDetails;

const item=
{
  "id": "event-011",
  "name": "AI Workshop",
  "mainDescription": "A hands-on workshop on Artificial Intelligence and machine learning techniques.",
  "secondaryDescription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat.",
  "status": "completed",
  "date": "24 December 2024 at 21:25:30 UTC+5:30",
  "venue": "Tech Lab, RGUKT RK Valley",
  "organizers": [
    { "name": "John Smith", "mobile": "9876543220" },
    { "name": "Sarah Lee", "mobile": "9123456790" }
  ],
  "links": [
    { "text": "Workshop Slides", "link": "https://example.com/ai-slides" },
    { "text": "Watch Recording", "link": "https://example.com/ai-recording" }
  ],
  "results": [
    "Team AI Experts",
    "Team Innovators",
    "Team Data Crunchers"
  ],
  "images": {
    "mainImage": "https://example.com/ai_workshop_main.jpg",
    "winnersImage": "https://example.com/ai_workshop_last.jpg",
    "descImageLeft": "https://example.com/ai_workshop_left.jpg",
    "descImageRight": "https://example.com/ai_workshop_right.jpg"
  }
}