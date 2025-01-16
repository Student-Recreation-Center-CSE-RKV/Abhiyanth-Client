import React, { useState } from "react";
import "../../styles/DeptWiseEvents.css"
import Carousel from "../general/Carousel.js";
import DeptWiseCustomCard from "./DeptWiseCustomCard.js";
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import { getAllTechnicalEvents,getDepartmentCarousels } from "../../api/technicalEvents.js";
import { Grid } from "@mui/material";
import TechnicalShimmer from "../admin/technical/technicalShimmer.js";
import CarouselShimmer from "../gallery/CarouselShimmer.js";

const DeptWiseEvents = () => {
  
  const { department } = useParams();
  const [loading,setLoading]=useState(false);
  const [events,setAllEvents]=useState([]);
  const [carousels,setCarousels]=useState([]);
  const [carouselLoading,setCarouselLoading]=useState(false);

  const fetchDepartmentEvents = async (dept) => {
    console.log(`Fetching events for department: ${dept}`);
    try {
      setCarouselLoading(true);
      const car= await getDepartmentCarousels(dept);
      setCarousels(car.images);
      // console.log(car)
      setCarouselLoading(false);
      if(!carouselLoading)
      {
        setLoading(true);
    const events =await getAllTechnicalEvents(dept);
    setAllEvents(events);
      }
    
    } catch (error) {
      
    }finally{
    setLoading(false);
    setCarouselLoading(false);
    }

  };


  useEffect(() => {
    if (department) {
      fetchDepartmentEvents(department);
    }
  }, [department]);


  

 

  return (
    <div className="deptwise-events-container">
      <div className="deptwise-events-heading">
        {department} Tech Events
      </div>
      {
        carouselLoading ? <CarouselShimmer/> : (<div className="deptwise-events-carousel">
          <Carousel images={carousels} />
        </div>)
      }
      {
        loading ? (
          <Grid container spacing={3} sx={{ marginTop: "20px",marginBottom:"40px",padding:"5px" }}>
                {[...Array(4)].map((_, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <TechnicalShimmer/>
                  </Grid>
                ))}
              </Grid>
        ): (<div className="deptwise-events-cards">
          {events.map((event, index) => (
            <DeptWiseCustomCard key={index} event={event} department={department}/>
          ))}
        </div>)
      }
      {
        events.length==0 && (<div className="deptwise-events-heading">
          Events Coming Soon
        </div>)
      }

      
    </div>
  );
};

export default DeptWiseEvents;
