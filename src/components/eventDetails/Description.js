import { Box, Typography } from "@mui/material";
import {dummyImage} from "../../assets/images/index";
import {useMediaQuery}  from "@mui/material";
const styles={
  descriptionLayout:{
    margin:"3% 1%"
  },
  subHeading:{
    color: "#00B093",
    fontFamily: "Audiowide",
    fontSize: "30px",
    fontStyle:"normal",
    fontWeight:"400",
    lineHeight:"normal"
  },
  contenttext:{
    color: "#D9D9D9",
    textAlign: "justify",
    fontFamily: "Audiowide",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight:"400",
    lineHeight: "normal",
    margin:"1%"
  },
  descriptionMain:{
    display:"flex",
    flexDirection:"row",
    alignItems:"left",
    justifyContent:"space-between",
    alignSelf:"stretch",
    width:"100%",
    gap:"3%",
  },
  descriptionMain1:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    width:"100%",
    alignSelf:"stretch",
    gap:"2%",
    height:"auto",
  },
  descriptionMain2:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    width:"100%",
    height:"auto",
  },
  

}

function Description() {
  const isSmallScreen = useMediaQuery('(max-width:750px)');
  const results = true;
  const links = ["https://www.google.com", "https://www.google.com", "https://www.google.com"];

  return (
    <Box sx={styles.descriptionLayout}>
      <Box sx={styles.subHeading}>
        Description
      </Box>
      <Box sx={styles.descriptionMain}>
        <Box sx={styles.descriptionMain1}>
          <Typography sx={styles.contenttext}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Donec ut odio nec nisl tincidunt luctus. Nulla facilisi. 
            Nullam nec velit euismod, faucibus odio eget, ultrices nunc. 
            Sed auctor, justo vel ultricies ultricies
          </Typography>
          <Box>
            <img
              src={dummyImage}
              alt="Event"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "16.718px",
                boxShadow: "0px 0px 8.359px 1.672px #00B093"
              }}
            />
          </Box>
        </Box>
        {!isSmallScreen && (
          <Box>
            <img
              src={dummyImage}
              alt="Event"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "16.718px",
                boxShadow: "0px 0px 8.359px 1.672px #00B093"
              }}
            />
          </Box>
        )}
      </Box>
      <Box sx={styles.descriptionMain2}>
        <Typography sx={styles.contenttext}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
          Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. 
          Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum.
          Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat.
        </Typography>
        <Box>
          <img
            src={dummyImage}
            alt="Event"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "16.718px",
              boxShadow: "0px 0px 8.359px 1.672px #00B093",
              margin:"1%"
            }}
          />
        </Box>
      </Box>
      <Box>
        {results && (
          <Typography
            sx={{
              ...styles.subHeading,
              color: "#C91C75",
              textAlign: "center",
              margin: "1%"
            }}
          >
            Results
          </Typography>
        )}
        <Box>
          <Typography sx={styles.subHeading}>
            Links
          </Typography>
          <Box>
            <Typography sx={styles.contenttext}>
              {links &&
                links.map((link) => (
                  <div key={link}>
                    <a href={link} style={{ textDecoration: "none" }}>
                      {link}
                    </a>
                  </div>
                ))}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Description;

