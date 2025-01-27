import { Box, Chip, Typography } from '@mui/material';
import FeaturedNews from '../components/news/FeaturedNews';
import NewsBox from '../components/news/NewsBox';
import NewsCard from '../components/news/NewsCard'
const styles={
  ColumnContainer:{
    display:"flex",
    flexDirection:"column",
    gap:"10px",
    padding:"10px",
    justifyContent:"space-between",
    alignItems:"center",
  },
  RowContainer:{
    display:"flex",
    flexDirection:"row",
    gap:"10px",
    padding:"10px",
    justifyContent:"space-between",
    alignItems:"center",
  },
  subHeading:{
    color:"#c91c75",
    fontSize:"28px",
    fontFamily:"DM Sans",
    fontWeight:"bold"
  }
}
function News(){
  return(
    <>
    <Box sx={{...styles.ColumnContainer,marginTop:"3%",}} >
      <Box sx={{...styles.RowContainer, flexDirection: { xs: 'column', md: 'row' } }}>
        <FeaturedNews />

        <Box sx={{...styles.ColumnContainer,width:{ xs: '100%', md: '40%' }}}>
        <Typography variant="h3" sx={styles.subHeading}> Hot Updates</Typography>
          <Box sx={{width:"100%"}}>
            <Box sx={{...styles.ColumnContainer,color:"white",width:"100%"}}>
              <Chip label="Horror Room won by Giri E4 in Bidding" color="warning" variant="outlined" sx={{width:"100%",padding:"1px"}}/>
              <Chip label="Horror Room won by Giri E4 in Bidding" color="primary" sx={{width:"100%"}}/>
              <Chip label="Horror Room won by Giri E4 in Bidding" color="secondary" sx={{width:"100%"}}/>
            </Box>
          </Box>
          <Typography variant="h3" sx={styles.subHeading}> Latest News</Typography>
          <NewsBox />
          <NewsBox />
          <NewsBox />
        </Box>
      </Box>
      <Box>
        <Typography variant="h3" sx={{...styles.subHeading,color:"red"}}> Top Stories</Typography>
      </Box>
      <Box sx={{...styles.RowContainer,margin:"1%", flexDirection: { xs: 'column', md: 'row' } }}>
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </Box>
    </Box>
    </>
  )
}
export default News;