import React from "react";
import "../styles/about.css";  // Make sure this is the correct path
import PreEventsCard from '../components/about/preEvents';

export default function About() {
  return (
    <div className="gif-background">
      <p style={{ fontSize: "2rem", color: "pink" }}>About</p>
      <PreEventsCard />
    </div>
  );
}


