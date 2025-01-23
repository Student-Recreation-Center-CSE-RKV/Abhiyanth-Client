import { Box, Chip, Typography } from "@mui/material";
import newsImage from '../../assets/images/news/news1.jpeg'
function FeaturedNews(id="1"){
  return(
    <Box sx={{ position:"relative", width:{xs: '100%',md:"60%"}, overflow: 'hidden',margin:"1%" , }}>
      
      <a href={`/news/${id}`} style={{ textDecoration: 'none' }}>
        <img src={newsImage} alt="Featured News" style={{ width: '100%', borderRadius:"10px",height: 'auto' }} />
      </a>
      <Box sx={{ position: 'absolute', top: 1,  color: 'white' }}>
        <Chip label="Featured" color="error"  />
      </Box>
      
      <Box sx={{ position: 'absolute', bottom: 0, background: 'rgba(0, 0, 0, 0.5)', color: 'white', width: '100%', padding: '10px', display: newsImage ? 'block' : 'none' }}>
        <Typography gutterBottom variant="h5" sx={{fontSize:{xs:"16px"}}} component="div">
          Abhiyanth Ignition Launch Graced by Honourable Director Prof.AVSS Kumara Swamy Gupta 
        </Typography>
        <Typography variant="body2" sx={{ color: 'white' }}>
          Shrimp and Chorizo Paella  •  September 14, 2016  • 5min read
        </Typography>
      </Box>
    </Box>
  )
}
export default FeaturedNews;