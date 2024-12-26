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
      <Box sx={{marginTop:"6%"}}>
        <GradientBorderComponent />
      </Box>
      <Box sx={styles.container} >
        <Box >
          <Top/>
        </Box>
        <Box>
          <Description/>
        </Box>

      </Box>
      <Box>
      <Typography sx={{ ...styles.subHeading, color:"#C91C75" , textAlign:"center",margin:"2%"}}>
            <Link to="/events" sx={{color:"#C91C75"}}> Go Back </Link>
      </Typography>
    </Box>
    </div>
  )
}

export default EventDetails;