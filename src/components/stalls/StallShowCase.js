import { Box, Button,Chip, Rating, Typography, useMediaQuery } from "@mui/material";
import { motion } from 'framer-motion';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ImageCarousel from "../general/Carousel";
import specialofferIcon from "../../assets/images/stalls/offer.png";
import img1 from "../../assets/images/stalls/bakery.jpg";
import img2 from "../../assets/images/stalls/biryani.jpg";
import img3 from "../../assets/images/stalls/ice_cream.avif";


const styles={
  titleContainer:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    alignItems:"center",
    gap:"1",
    width:"100%",
    margin:"2% 1%"
  },
  title:{
    color: "rgb(201, 28, 117)",
    fontFamily: "Audiowide",
    fontSize: "30px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal"
  },
  subHeading:{
    color: "#00B093",
    fontFamily: "Averia Sans Libre",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
    fontSize:"20px",
    margin:"1%",

  },
  DescriptionContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    width:"100%",
    alignItems:"center",
    gap:"2",
  },
  subDescriptionContainer:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    
    margin:"1%",
    width:"60%",
    gap:"1",
    padding:"1%",
  },
  content:{
    fontFamily: "Averia Sans Libre",
    color:"white",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    margin:"1%",

  }
}

function StallShowcase({stallname = "Crispy Snackers",
    items=["icecream","biryani","shawarma","Potato spring roll","mirchi bajji","pepper corn"] ,
    offers=[ "buy idli get sambar" ," buy 2 biryani get 1 chicken lolipop",],
    stallImages=[img1,img2,img3], stalllocation="1", stallrating="5", 
    stalltype="snackers",
    belongTo="Rajesh",
  timings="10:00 AM to 10:00 PM"}) {
  
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  return (
    <Box sx={{margin:"6% 1% 1% 1%"}}>
      <Box sx={styles.titleContainer}>
        <Typography sx={styles.title}> 
          {stallname}
        </Typography>
        <motion.div
        sx={{color:"white",fontSize:"20px",fontWeight:"bold"}}
        animate={{ x:[-100,0,100] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        >
          <Box sx={{display:"flex",gap:"10px",alignItems:"center"}}>
          <img src={specialofferIcon} style={{height:"50px"}} alt="Offer"/>
          { 
            offers &&
            offers.map((offer) => (
              <>
                <Typography sx={styles.subHeading}>
                  {offer}
                </Typography>
                <img src={specialofferIcon} style={{height:"50px"}} alt="Offer"/>
              </>
            ))
    }
          </Box>
        </motion.div>
        <Box sx={{
          ...styles.DescriptionContainer,
          flexDirection: isSmallScreen ? "column" : "row"
        }}>
          {
            isSmallScreen && (
              <Box id="menu" sx={{width:"100%"}}>
            <ImageCarousel images={stallImages} />
          </Box>
            )
          }
          <Box sx={styles.subDescriptionContainer}>
            <Box>
              <Typography sx={styles.content}>
                <Box sx={{color:"yellow",fontSize:"20px",fontWeight:"bold"}}>
                  TRY ONE
                </Box>
                  spicy crispy flavours of {stallname}. We deliver the best taste to your plate.
                  spicy crispy flavours of {stallname}. We deliver the best taste to your plate.
                  spicy crispy flavours of {stallname}. We deliver the best taste to your plate.
                  spicy crispy flavours of {stallname}. We deliver the best taste to your plate.
                  spicy crispy flavours of {stallname}. We deliver the best taste to your plate.
              </Typography>
              <Box > 
          <Button component="a" href="#menu" sx={{
                  background: "linear-gradient(180deg, #FF6AB7 0%, #6AE4FF 100%)",
                  color: "black",
                  fontFamily: "Audiowide",
                  margin:"10px"
                }}>View Menu</Button>
              
            <Typography sx={{...styles.subHeading,fontSize:"20px",color:"gold",marginBottom:"2%"}}>Items Available:</Typography>
            <Box sx={{display:"flex",gap:"10px",alignItems:"center",flexDirection:isSmallScreen ? "column" : "row",flexWrap:"wrap"}}>
              
            { items && items.map((item)=>(
              <Chip label={item} variant="outlined" color="secondary" sx={styles.subHeading} />
            
            ))
            }
            </Box>
          </Box>
            </Box>
            <Box>
              <Typography sx={styles.subHeading}>
                Stall No :{stalllocation}
              </Typography>
              <Typography sx={styles.content}>
                Timings:{timings}
                </Typography>
              <Typography sx={styles.content}>
                Owned By :{belongTo}
              </Typography>
              
            </Box>
            <Box >
              <Box sx={styles.subHeading}>
                Contact Info
              </Box>
              <Box>
                <Typography sx={styles.content}> <LocalPhoneIcon color="info"/> +91 0000000000</Typography>
                <Typography sx={styles.content}> <WhatsAppIcon color="success"/> +91 0000000000 </Typography>
              </Box>
            </Box>
          </Box>
          { !isSmallScreen && (
          <Box sx={{width:"70%", position: "relative",border: "3px solid",borderImageSlice: 1,
              borderImageSource: 'linear-gradient(to right, #261E35, #C91C75, #EFE1EE, #E9C0DA, #E4AACC, #C91C75, #261E35)'}}>
                  <Typography sx={{...styles.subHeading, marginBottom:"0%"}}>Our Specials spotlights:</Typography>
                <ImageCarousel images={stallImages} />
              </Box>
          )}
        </Box>
      </Box>
      { !isSmallScreen ?(
      <Box  id="menu" >
        <Box sx={{width:"100%"}}>
              <ImageCarousel images={stallImages} />
            </Box>
      </Box>):(
        <Box sx={{width:"100%", position: "relative",border: "3px solid",borderImageSlice: 1,
              borderImageSource: 'linear-gradient(to right, #261E35, #C91C75, #EFE1EE, #E9C0DA, #E4AACC, #C91C75, #261E35)'}}>
            <Box >
              <Typography sx={{...styles.subHeading, marginBottom:"0%"}}>Our Specials spotlights:</Typography>
            </Box>
              <ImageCarousel images={stallImages} />
        </Box>)}
    </Box>
  )

}
export default StallShowcase;