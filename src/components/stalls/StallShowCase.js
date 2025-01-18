import { Box, Button, Rating, Typography, useMediaQuery } from "@mui/material";
import { motion } from 'framer-motion';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ImageCarousel from "../general/Carousel";
import { foodcourtMap } from "../../assets/images/index";
import specialofferIcon from "../../assets/images/stalls/offer.png";
import img1 from "../../assets/images/stalls/bakery.jpg";
import img2 from "../../assets/images/stalls/biryani.jpg";
import img3 from "../../assets/images/stalls/ice_cream.avif";
function StallShowcase({stallname = "Crispy Snackers", offers=[ "buy idli get sambar" ," buy 2 biryani get 1 chicken lolipop"],stallImages=[img1,img2,img3], stalllocation="1", stallrating="5", stalltype="snackers", stallmenu=["Potatto spring roll","mirchi bajji","pepper corn"]}) {
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
      lineHeight: "normal"

    }
  }
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
              <Box sx={{width:"100%"}}>
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
              <Box>
                <Button sx={{
                  background: "linear-gradient(180deg, #FF6AB7 0%, #6AE4FF 100%)",
                  color: "black",
                  fontFamily: "Audiowide",
                  marginTop:"10px",
                }}>View Menu</Button>
              </Box>
            </Box>
            <Box>
              <Typography sx={styles.subHeading}>
                Stall No :{stalllocation}
              </Typography>
              <Typography sx={styles.content}>
                Rating : <Rating name="half-rating-read" defaultValue={2.5} value={stallrating} precision={0.5} readOnly />
              </Typography>
            </Box>
            <Box>
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
          <Box sx={{width:"70%"}}>
            <ImageCarousel images={stallImages} />
          </Box>)}
        </Box>
      </Box>
      <Box sx={{
          ...styles.DescriptionContainer,
          flexDirection: isSmallScreen ? "column" : "row"
        }}>
        <Box>
        <img src={foodcourtMap} alt="foodcourt map" style={{width:"90%"}} />
        </Box>
        <Box sx={{width:"50%", position: "relative",border: "3px solid",borderImageSlice: 1,
        borderImageSource: 'linear-gradient(to right, #261E35, #C91C75, #EFE1EE, #E9C0DA, #E4AACC, #C91C75, #261E35)'}}>
          <Box sx={{position: "absolute", top: "20px", left: "10px", zIndex: 1}}>
            <Typography sx={{...styles.subHeading, marginBottom:"0%"}}>Our Specials spotlights:</Typography>
          </Box>
          <ImageCarousel images={stallImages} />
        </Box>
      </Box>
    </Box>
  )

}
export default StallShowcase;