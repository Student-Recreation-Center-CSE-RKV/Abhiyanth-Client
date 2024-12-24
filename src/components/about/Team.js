import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BlinkingHeading() {
  const navigate = useNavigate();

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          color: "#FFFFFF",
          animation: "blinkingText 1.5s infinite",
          cursor: "pointer",
          fontFamily:"AudioWide"
        }}
        onClick={() => navigate("/ourTeam")}
      >
        Our Team -&gt;
      </h1>
      <style>
        {`
          @keyframes blinkingText {
            0% { opacity: 1; }
            50% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}
