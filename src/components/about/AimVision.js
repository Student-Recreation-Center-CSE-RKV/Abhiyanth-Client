import { Box, Typography } from "@mui/material";
import { sandAbLogo ,aim,roboRocket,vision} from "../../assets/images";

function AimVision(){
  const styles = {
    container: {
      width: "100%",
      height: "900px",
      flexShrink: "0",
      border: '3px solid',
      borderImageSource: 'linear-gradient(to right, #261E35, #C91C75, #EFE1EE, #E9C0DA, #E4AACC, #C91C75, #261E35)',
      backgroundImage: `url(${sandAbLogo})`,
      backgroundSize: "cover",
      zIndex: "-1",
      position: "relative",
    },
    text: {
      color: "#FFF",
      textAlign: "center",
      textShadow: "3px 4px 10px rgba(34, 209, 238, 0.30), -3px -4px 10px rgba(255, 79, 248, 0.30)",
      fontFamily: "Audiowide",
      fontSize: "60px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "normal",
    },
    textLayout: {
      display: "flex",
      width: "687px",
      height: "66px",
      position: "absolute",
      top: "5%",
      left: "20%",
      flexDirection: "column",
      justifyContent: "center",
      flexShrink: "0",
    },
    rectangle1:  {
      width: "1050px",
      height: "214px",
      position: "absolute",
      top: "25%",
      left: "5%",
      right: "5%",
      borderRadius: "26px",
      border: "1px solid var(--gradient, #FF6AB7,#6AE4FF)",
      background: "rgba(0, 0, 0, 0.25)",
      boxShadow: "-3px -4px 10px 0px rgba(255, 79, 248, 0.50), 3px 4px 10px 0px rgba(34, 209, 238, 0.50)",
    },
    contentText: {
      color: "white",
      textAlign: "center",
      fontFamily: "Averia Sans Libre",
      fontSize: "25px",
      fontStyle: "normal",
      fontWeight: "400",
      marginLeft: "10px",
      mariginRight: "20px",
      paddingRight:"20px"


    },
    rectangle2: {
      width: "1050px",
      height: "250px",
      position: "absolute",
      bottom: "15%",
      left: "5%",
      right: "10%",
      borderRadius: "26px",
      border: "1px solid var(--gradient, #FF6AB7,#6AE4FF)",
      background: "rgba(0, 0, 0, 0.25)",
      boxShadow: "-3px -4px 10px 0px rgba(255, 79, 248, 0.50), 3px 4px 10px 0px rgba(34, 209, 238, 0.50)",
    },
    aim: 
      {
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        background: "#fff",
        color: "#000",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "-1px",
        marginRight: "10px",
        fontWeight: "bold",
      },
    aimText: {
      borderRadius: "12px",
      border: "1px solid var(--gradient, #FF6AB7)",
      padding:" 0 10px",
      background: "var(--Not-so-black, #11110F)",
      color: "#FFFF",
      textAlign: "center",
      textShadow: "3px 4px 10px rgba(34, 209, 238, 0.30), -3px -4px 10px rgba(255, 79, 248, 0.30)",
      fontFamily: "Audiowide",
      fontSize: "40px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "normal",
      marginLeft: "10px",
    }
  }
  return (
  <>
    <div style={styles.container}>
      <Box sx={styles.textLayout}>
        <Typography variant="h3" style={styles.text}>
          Abhiyanth 2K25
        </Typography>
      </Box>
      <Box sx={styles.rectangle1}>
        <Typography
          variant="h6"
          sx={{
            display: "flex",
            alignItems: "center",
            color: "#fff",
            marginBottom: "10px",
          }}
        >
          <Box 
            component="span"
            sx={{ ...styles.aim, width: "50px", height: "50px",marginTop:"-50px", marginLeft: "-10px" }}
          >
            <img src={aim} style={{ width: "40px", height: "40px" }} alt="aim"/>
          </Box>
          <Box sx={{ ...styles.aimText,marginTop:"-30px", marginLeft: "-10px",marginBottom:"10px" }}>
          Aim
          </Box>
        </Typography>
        <Typography
          variant="body1"
          sx={{ ...styles.contentText, marginLeft: "70px" }}
        >
          The Objective of Abhiyanth is to explore the endless limits of knowledge,
          enlightening the impact we can plunge into the world of innovation and
          delve into the ecstasy.
        </Typography>
      </Box>
      <Box sx={styles.rectangle2}>
      <Typography
          variant="h6"
          sx={{
            display: "flex",
            alignItems: "center",
            color: "#fff",
            marginBottom: "10px",
            paddingRight: "20px",
            justifyContent: "flex-end",
          }}
        >
          <Box
            component="span"
            sx={{ ...styles.aimText,marginTop:"-50px", marginRight: "40px" }}
          >
            Vision
          </Box>
          <Box
            component="span"
            sx={{ ...styles.aim, width: "50px", height: "50px",  marginRight: "-10px" ,marginTop:"-10px",marginBottom:"10px"}}
          >
            <img src={vision} style={{ width: "80px", height: "80px" }} alt="vision"/>
          </Box>
        </Typography>
        <Typography
          variant="body1"
          sx={{ ...styles.contentText, marginLeft: "70px" }}
        >
        Abhiyanth is a Valley of Engineers, events, artists coming together to form a 3-day techno management cultural fest with an instilling new spirit in quest of exposure, freedom, fun and diversity. In Abhiyanth, faith flows, aspirations arise, achievements adored, talent turns up with ecstasy endured
        </Typography>
      </Box>
      <Box
    component="img"
    src={roboRocket}
    alt="roboRocket"
    sx={{
      position: "absolute",
      bottom: "0",
      right: "0",
      width: "250px",
      height: "auto",
    }}
  />
    </div>
   
  </>
  ) 
}
export default AimVision;