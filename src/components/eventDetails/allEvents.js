
import React, { useEffect, useState } from "react";
import CustomCard from "./eventCustomCard";
import HorizontalScrollBox from "./HorizontalScrollBox";
import { Grid } from "@mui/material"; 
import "../../styles/allEvents.css";
import { getAllEvents,addEvent } from "../../api/events";
import ShimmerCard from "./Shimmer"; 


const AllEvents = () => {
  const [events, setEvents] = useState({
    completed: [],
    ongoing: [],
    upcoming: []
  });
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    setIsLoading(true);
    const res = await getAllEvents();
    setEvents(res);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="alleventscontainer">
      <div className="header">
        <h2>All Events</h2>
      </div>

      {isLoading ? (
        
        <Grid container spacing={3}>
          {[...Array(8)].map((_, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}> 
              <ShimmerCard />
            </Grid>
          ))}
        </Grid>
      ) : (
        <>
          
          {events.ongoing.length > 0 && (
            <div className="eventsContainer">
              <h3 className="alleventstopHeading">ONGOING</h3>
              <HorizontalScrollBox
                items={events.ongoing}
                renderCard={(item, index) => <CustomCard key={index} item={item} />}
              />
            </div>
          )}

          
          {events.upcoming.length > 0 && (
            <div className="eventsContainer">
              <h3 className="alleventstopHeading">UPCOMING</h3>
              <HorizontalScrollBox
                items={events.upcoming}
                renderCard={(item, index) => <CustomCard key={index} item={item} />}
              />
            </div>
          )}

          
          {(events.ongoing.length > 0 || events.upcoming.length > 0) && (
            <div className="alleventstext1 eventsContainer">
              <a href="#" style={{ textDecoration: "none", color: "white" }}>
                FULL SCHEDULE -&gt;
              </a>
            </div>
          )}

          
          {events.completed.length > 0 && (
            <div className="eventsContainer">
              <h3 className="alleventstopHeading">COMPLETED</h3>
              <HorizontalScrollBox
                items={events.completed}
                renderCard={(item, index) => <CustomCard key={index} item={item} />}
              />
            </div>
          )}

          
          {events.completed.length > 0 && (
            <div className="alleventstext2 eventsContainer" style={{ marginBlock: "2rem" }}>
              <a href="#" style={{ textDecoration: "none", color: "white" }}>
                ANIMATIONS -&gt;
              </a>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AllEvents;
