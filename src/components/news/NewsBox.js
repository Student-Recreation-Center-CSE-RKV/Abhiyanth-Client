import { Box, Typography } from "@mui/material";
import newsImage from '../../assets/images/news/news1.jpeg'
const styles ={
  container:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    padding:"10px",
    gap:"2",
    margin:"1%",
  },
  
}
function NewsBox(id="1"){
  return(
    <Box sx={styles.container}>
      <Box sx={{width:"70%"}}>
        <Typography variant="h6" sx={{color:"white",fontFamily:"Inter",}}>
          <a href={`/news/${id}`} style={{textDecoration:"none",color:"white"}}>Bidding Grand success amount sum crossed 13 Lakhs</a>
        </Typography>
      </Box>
      <Box sx={{width:"30%", display: "flex", justifyContent: "flex-end"}}>
          <img src={newsImage} alt="newsImage" style={{width:"100%",height:"100%",padding:"5px"}}/>
      </Box>
    </Box>
  )
}
export default NewsBox;