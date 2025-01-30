import React from "react";
import Sponsers from "../components/home/Sponsers";
import HomeStartingComponent from "../components/home/HomeStartingComponent";
import HomeCards from "../components/home/homeCards";
import ErrorBoundary from "./ErrorBoundary";


export default function Home() {
  return (
    <ErrorBoundary>
      <div>
      <div
        style={{
          position: "relative",
          zIndex: 1, // Ensure the content is rendered on top of the canvas
        }}
      >
        <div>
          <HomeStartingComponent />
          {/* <Extravaganza /> */}
          <HomeCards/>
          <Sponsers />
        </div>
      </div>
    </div>
    </ErrorBoundary>
  );
}
