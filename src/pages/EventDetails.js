import { useEffect, useState } from "react";
import { getEventById } from "../api/events";
import Description from "../components/eventDetails/Description";
import Top from "../components/eventDetails/Top";
import { Box, Typography, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

const styles = {
  container: {
    margin: "5% 1%",
    borderRadius: "25px",
    background: "rgba(0, 0, 0, 0.20)",
    boxShadow: "0px 0px 16.718px 0px #D9D9D9",
    padding: "5px",
  },
  subHeading: {
    color: "#00B093",
    fontFamily: "Audiowide",
    fontSize: "30px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  },
  loaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
};

function EventDetails() {
  const { id } = useParams();
  const [eventDetails, setEventDetails] = useState(null); // Event data
  const [loading, setLoading] = useState(true); // Loading state

  const getEventDetails = async () => {
    try {
      setLoading(true); // Set loading to true before fetching data
      const res = await getEventById(id);
      setEventDetails(res);
      
    } catch (error) {
      console.error("Error fetching event details:", error);
    } finally {
      setLoading(false); // Set loading to false after fetching is done
    }
  };

  useEffect(() => {
    getEventDetails();
  // eslint-disable-next-line
  }, []);

  if (loading) {
    return (
      <ErrorBoundary>
        <Box sx={styles.loaderContainer}>
        <CircularProgress />
      </Box>
      </ErrorBoundary>
      
    );
  }

  return (
    <ErrorBoundary>
      <div>
      <Box sx={styles.container}>
        <Box>
          <Top item={eventDetails} />
        </Box>
        <Box>
          <Description item={eventDetails} />
        </Box>
      </Box>

      <Box>
        <Typography
          sx={{ ...styles.subHeading, color: "#C91C75", textAlign: "center", margin: "2%" }}
        >
          <Link to="/events" style={{ color: "#C91C75", textDecoration: "none" }}>
            Go Back
          </Link>
        </Typography>
      </Box>
    </div>
    </ErrorBoundary>
    
  );
}

export default EventDetails;
