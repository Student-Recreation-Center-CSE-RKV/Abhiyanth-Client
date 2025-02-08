import React  from "react";
import "../../styles/DeptWiseEvents.css"
import Carousel from "../general/Carousel.js";
import DeptWiseCustomCard from "./DeptWiseCustomCard.js";
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import { Grid } from "@mui/material";
import TechnicalShimmer from "./technicalShimmer.js";
import CarouselShimmer from "../gallery/CarouselShimmer.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchTechnicalEvents,fetchTechnicalCarousels } from "../../redux/slices/technicalEventsSlice.js";

const DeptWiseEvents = () => {
  const dispatch = useDispatch();
  const { events, loading, error,carousels,carouselLoading } = useSelector((state) => state.technicalEvents);

  const { department } = useParams();

  const fetchDepartmentEvents = async (dept) => {
    
    try {
      
      dispatch(fetchTechnicalCarousels(dept))
      if (!carouselLoading) {
        
        dispatch(fetchTechnicalEvents(dept));
      }
    } catch (error) {
    } 

  };


  useEffect(() => {
    if (department) {
      fetchDepartmentEvents(department);
    }
    // eslint-disable-next-line
  }, [department]);

  return (
    <div className="deptwise-events-container">
      <div className="deptwise-events-heading">
        {department} Tech Events
      </div>
      {
        carouselLoading ? <CarouselShimmer /> : (<div className="deptwise-events-carousel">
          <Carousel images={carousels[department]} />
        </div>)
      }
      {
        loading ? (
          <Grid container spacing={3} sx={{ marginTop: "20px", marginBottom: "40px", padding: "5px" }}>
            {[...Array(4)].map((_, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <TechnicalShimmer />
              </Grid>
            ))}
          </Grid>
        ) : (<div className="deptwise-events-cards">
          {events[department].length > 0 && events[department].map((event, index) => (
            <DeptWiseCustomCard key={index} event={event} department={department} />
          ))}
        </div>)
      }
      {
        events[department].length === 0 && (<div className="deptwise-events-heading" >
          
          Events Coming Soon
          
          
        </div>)
      }
      {
        error && (<div className="deptwise-events-heading" sx={{ paddingTop: "80px" }}>Network Error</div>)
      }
    </div>
  );
};

export default DeptWiseEvents;
