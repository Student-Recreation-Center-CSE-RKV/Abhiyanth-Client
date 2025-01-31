import { Box, Typography, Button } from "@mui/material"; 
import { useMediaQuery } from "@mui/material";
import { extractDateTime } from "../../utils/timeStampToDate";

const styles = {
  descriptionLayout: {
    margin: "3% 1%"
  },
  subHeading: {
    color: "#00B093",
    fontFamily: "Audiowide",
    fontSize: "30px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal"
  },
  contenttext: {
    color: "#D9D9D9",
    textAlign: "justify",
    fontFamily: "Audiowide",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    margin: "1%"
  },
  descriptionMain: {
    display: "flex",
    flexDirection: "row",
    alignItems: "left",
    justifyContent: "space-between",
    alignSelf: "stretch",
    width: "100%",
    gap: "3%"
  },
  descriptionMain1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    alignSelf: "stretch",
    gap: "2%",
    height: "auto"
  },
  descriptionMain2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    height: "auto"
  },
  registerButton: {
    backgroundColor: "#00B093",
    color: "#FFF",
    fontFamily: "Audiowide",
    fontSize: "18px",
    fontWeight: "500",
    textTransform: "none",
    margin: "2% 0",
    "&:hover": {
      backgroundColor: "#00785F"
    },

  }
};

function Description({ item }) {
  const date = extractDateTime(item.date);
  const isSmallScreen = useMediaQuery("(max-width:750px)");
  const isMediumScreen = useMediaQuery("(max-width:1200px)");

  const dynamicFontSize = isSmallScreen ? "16px" : isMediumScreen ? "18px" : "20px";

  const contentTextStyles = {
    ...styles.contenttext,
    fontSize: dynamicFontSize
  };

  const { results, organizers, links,register_link } = item;

  const handleRegisterClick = (link) => {
    window.open(link, "_blank"); // Replace with your Google Form URL
  };

  return (
    <Box sx={styles.descriptionLayout}>
      <Box sx={styles.subHeading}>Description</Box>
      <Box sx={styles.descriptionMain}>
        <Box sx={styles.descriptionMain1}>
          <Typography sx={contentTextStyles}>{item.mainDescription}</Typography>
          <Box>
            <img
              src={item.images.descImageLeft}
              alt="Event"
              style={{
                width: "100%",
                height: "400px",
                borderRadius: "16.718px",
                boxShadow: "0px 0px 8.359px 1.672px #00B093"
              }}
            />
          </Box>
        </Box>
        {!isSmallScreen && (
          <Box>
            <img
              src={item.images.descImageRight}
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
        <Typography sx={contentTextStyles}>{item.secondaryDescription}</Typography>
        {item.images?.lastImage && (
          <Box>
            <img
              src={item.images.lastImage}
              alt="Winners"
              style={{
                width: "100%",
                height: "500px",
                borderRadius: "16.718px",
                boxShadow: "0px 0px 8.359px 1.672px #00B093",
                margin: "1%",
                objectFit:"cover"
              }}
            />
          </Box>
        )}
      </Box>
      {date.date || date.time || item.venue ? (
        <Box>
          <Typography
            sx={{
              ...styles.subHeading,
              color: "#C91C75",
              textAlign: "center",
              margin: "1%"
            }}
          >
            Event Details
          </Typography>
          <Box>
            {date.date && (
              <Typography sx={contentTextStyles}>Date: {date.date}</Typography>
            )}
            {date.time && (
              <Typography sx={contentTextStyles}>Time: {date.time}</Typography>
            )}
            {item.venue && (
              <Typography sx={contentTextStyles}>Venue: {item.venue}</Typography>
            )}
          </Box>
        </Box>
      ) : null}
      {results.length > 0 && (
        
        <Box>
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
          <Box>
            {results.map((result, index) => (
              <Typography key={index} sx={contentTextStyles}>
                {index + 1} Prize: {result}
              </Typography>
            ))}
          </Box>
        </Box>
        
      )}
      {organizers.length > 0 && (
        <Box>
          <Typography
            sx={{
              ...styles.subHeading,
              color: "#00B093",
              textAlign: "center",
              margin: "1%"
            }}
          >
            Organizers
          </Typography>
          <Box>
            {organizers.map((organizer, index) => (
              <Typography key={index} sx={contentTextStyles}>
                {organizer.name} - {organizer.mobile}
              </Typography>
            ))}
          </Box>
        </Box>
      )}
      <Box sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        {
          item.status!=="completed"?(<Button
            variant="contained"
            sx={styles.registerButton}
            onClick={()=>{handleRegisterClick(register_link)}}
          >
            Register
          </Button>):<></>

        }
        
      </Box>

      {links.length > 0 && (
        <Box>
          <Typography
            sx={{
              ...styles.subHeading,
              color: "#00B093",
              textAlign: "center",
              margin: "1%"
            }}
          >
            Links
          </Typography>
          <Box>
            {links.map((linkObj, index) => (
              <div key={index}>
                <a
                  href={linkObj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "#00B093" }}
                >
                  {linkObj.text}
                </a>
              </div>
            ))}
          </Box>
        </Box>
      )}

    </Box>
  );
}

export default Description;
