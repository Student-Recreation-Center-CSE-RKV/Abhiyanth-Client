import React, { useState } from "react";
import "../../styles/DeptWiseEvents.css"
import Carousel from "../general/Carousel.js";
import hackathon from "../../assets/images/hackathon.jpeg";
import enginix from "../../assets/images/enginix-2k24.jpg";
import pyWorkShop from "../../assets/images/python-workshop-src.jpg";
import srcEventManage from "../../assets/images/hackathon-src.jpg";
import DeptWiseCustomCard from "./DeptWiseCustomCard.js";
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import { getAllTechnicalEvents } from "../../api/technicalEvents.js";
import { Grid } from "@mui/material";
import TechnicalShimmer from "../admin/technical/technicalShimmer.js";

const DeptWiseEvents = () => {
  const carouselImages = [hackathon, enginix, pyWorkShop, srcEventManage];
  const { department } = useParams();
  const [loading,setLoading]=useState(false);
  const [events,setAllEvents]=useState([]);

  const fetchDepartmentEvents = async (dept) => {
    console.log(`Fetching events for department: ${dept}`);
    try {
    setLoading(true);
    const events =await getAllTechnicalEvents(dept);
    setAllEvents(events);
    } catch (error) {
      
    }finally{
    setLoading(false);
    }

  };


  useEffect(() => {
    if (department) {
      fetchDepartmentEvents(department);
    }
  }, [department]);


  if(loading)
  {
    return(
      <Grid container spacing={3} sx={{ marginTop: "20px",marginBottom:"40px",padding:"5px" }}>
						{[...Array(4)].map((_, index) => (
							<Grid item xs={12} sm={6} md={3} key={index}>
								<TechnicalShimmer/>
							</Grid>
						))}
					</Grid>
    )
  }

  return (
    <div className="deptwise-events-container">
      <div className="deptwise-events-heading">
        {department} Tech Events
      </div>

      <div className="deptwise-events-carousel">
        <Carousel images={carouselImages} />
      </div>

      <div className="deptwise-events-cards">
        {events.map((event, index) => (
          <DeptWiseCustomCard key={index} event={event} department={department}/>
        ))}
      </div>
    </div>
  );
};

export default DeptWiseEvents;
