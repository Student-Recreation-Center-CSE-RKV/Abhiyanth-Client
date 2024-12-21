import { Box, Typography } from "@mui/material";

function AimVision(){
  const styles={
    container:{
      width: "100%",
      height: "100vh",
      flexShrink: "0",
      border: '3px solid',
    borderImageSource: 'linear-gradient(to right, #261E35, #C91C75, #EFE1EE, #E9C0DA, #E4AACC, #C91C75, #261E35)',
    borderImageSlice: 1, 
    position:"relative",
    },
    text:{
      color:"#FFF",
      textAlign: "center",
      textShadow: "3px 4px 10px rgba(34, 209, 238, 0.30), -3px -4px 10px rgba(255, 79, 248, 0.30)",
      fontFamily:" Audiowide",
      fontSize: "60px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "normal",
  
      
    },
    textLayout:{
      display: "flex",
      width: "687px",
      height: "66px",
      position:"absolute",
      top:"20%",
      left:"20%",
      flexDirection: "column",
      justifyContent: "center",
      flexShrink:"0",
    }
  }
  return (
    <div style={styles.container}>
      <Box sx={styles.textLayout}>
        <Typography variant="h3" style={styles.text}>
          Abhiyanth 2K25
        </Typography>
      </Box>
    </div>
  )
}
export default AimVision;