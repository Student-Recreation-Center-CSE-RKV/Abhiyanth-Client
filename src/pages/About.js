
import React from "react";
import "../styles/about.css";  // Make sure this is the correct path
import PreEventsCard from '../components/about/preEvents';
import StatsComponent from "../components/about/StatsComponent"
import DeptEvents from "../components/about/deptEvents";

export default function About() {
  return (
    <div className="gif-background">
      <StatsComponent/>
      <PreEventsCard />
	  <DeptEvents/>
      
    </div>
  );
}


