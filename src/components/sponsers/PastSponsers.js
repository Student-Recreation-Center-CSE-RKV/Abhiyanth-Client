import { Box,Typography } from "@mui/material";
import {pastSponsers} from "../../assets/images/index";
import GradientBorderComponent from "../general/GradientBorderComponet";

const styles={

  container:{
    width:"100%",
    display:"flex",
    marginTop:"2%",
    marginBottom:"3%",
    flexDirection:"row",
    alignContent:"center",
    justifyContent:"space-between",
    gap:"1%"
    
  },
 
  text:{
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Audiowide",
    fontSize: {xs:"18px",sm:"20px",md:"24px",lg:"35px"},
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    marginTop:"25%",
  }
}
function PastSponsers(){
  return (
    <Box>
        <GradientBorderComponent  />
      <Box sx={styles.container}>
        <Box >
          <Typography variant="h4" sx={styles.text}  > OUR 
            PAST SPONSORS</Typography>
        </Box>
        <Box>
              <img
                src={pastSponsers}
                alt="pastSponsers"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
          </Box>
      </Box> 
    </Box>
  )
}

export default PastSponsers;