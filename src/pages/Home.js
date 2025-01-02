import React from "react";
import Sponsers from "../components/home/Sponsers";
import HomeStartingComponent from "../components/home/HomeStartingComponent";
import Extravaganza from "../components/home/Extravaganza";


export default function Home() {
  return (
    <div>
      <div
        style={{
          position: "relative",
          zIndex: 1, // Ensure the content is rendered on top of the canvas
        }}
      >
        <div>
          <HomeStartingComponent />
          <Extravaganza />
          <Sponsers />
        </div>
      </div>
    </div>
  );
}
