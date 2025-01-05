import { Box, Typography } from "@mui/material";
import { dummyImage } from "../../assets/images/index";
import { useMediaQuery } from "@mui/material";

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
  }
};

function Description({ item }) {
  const isSmallScreen = useMediaQuery('(max-width:750px)');
  const isMediumScreen = useMediaQuery('(max-width:1200px)');

  const dynamicFontSize = isSmallScreen ? "16px" : isMediumScreen ? "18px" : "20px";

  const contentTextStyles = {
    ...styles.contenttext,
    fontSize: dynamicFontSize
  };

  const { results = [], organizers = [], links = [] } = item;

  return (
    <Box sx={styles.descriptionLayout}>
      <Box sx={styles.subHeading}>Description</Box>
      <Box sx={styles.descriptionMain}>
        <Box sx={styles.descriptionMain1}>
          <Typography sx={contentTextStyles}>{item.mainDescription}</Typography>
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
        <Typography sx={contentTextStyles}>{item.secondaryDescription}</Typography>
        {item.images?.winnersImage && (
          <Box>
            <img
              src={dummyImage}
              alt="Winners"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "16.718px",
                boxShadow: "0px 0px 8.359px 1.672px #00B093",
                margin: "1%"
              }}
            />
          </Box>
        )}
      </Box>
      {item.date || item.time || item.venue ? (
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
            {item.date && (
              <Typography sx={contentTextStyles}>Date: {item.date}</Typography>
            )}
            {item.time && (
              <Typography sx={contentTextStyles}>Time: {item.time}</Typography>
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