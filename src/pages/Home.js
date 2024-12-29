import React, { useState, useEffect, useRef } from "react";
import Sponsers from "../components/home/Sponsers";
import HomeStartingComponent from "../components/home/HomeStartingComponent";
import Extravaganza from "../components/home/Extravaganza";
import LaunchPage from "./LaunchPage";

export default function Home({ flag, setFlag }) {
  const canvasRef = useRef(null);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (flag) {
      setShowAnimation(true);

      const timer = setTimeout(() => {
        setShowAnimation(false);
      }, 650); 

      return () => clearTimeout(timer);
    }
  }, [flag]);

  useEffect(() => {
    if (showAnimation) {
      startConfettiAnimation();
    }
  }, [showAnimation]);

  const startConfettiAnimation = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const W = window.innerWidth;
    const H = window.innerHeight;
    const confetti = [];

    canvas.width = W;
    canvas.height = H;

    // Create a confetti particle
    function createConfetti() {
      this.x = W / 2; // Start from the center horizontally
      this.y = H; // Start from the bottom vertically
      this.radius = 5 + Math.random() * 5;
      this.vx = -2 + Math.random() * 4; // Random horizontal speed
      this.vy = -3 - Math.random() * 7; // Random vertical speed (moving upward)
      this.angle = Math.random() * 2 * Math.PI; // Random direction for explosion effect
      this.speed = 4 + Math.random() * 5; // Confetti blast speed
      this.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
      this.alpha = 0.7 + Math.random() * 0.3;
    }

    // Generate confetti particles
    for (let i = 0; i < 500; i++) {
      confetti.push(new createConfetti());
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H); // Clear canvas
      ctx.globalCompositeOperation = "source-over";

      // Draw each confetti particle
      for (let i = 0; i < confetti.length; i++) {
        const p = confetti[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        // Update particle position (move outward like a blast)
        p.x += p.speed * Math.cos(p.angle);
        p.y += p.speed * Math.sin(p.angle);
        p.alpha -= 0.01; // Fade out the confetti over time

        // Reset the particle if it becomes transparent
        if (p.alpha <= 0) {
          confetti[i] = new createConfetti();
        }
      }
    };

    const animate = () => {
      if (showAnimation) {
        requestAnimationFrame(animate);
        draw();
      }
    };

    animate();
  };

  return (
    <div>
      {showAnimation && (
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 9999,
            pointerEvents: "none", // To ensure it doesn't block interactions with other elements
          }}
        />
      )}

      <div
        style={{
          position: "relative",
          zIndex: 1, // Ensure the content is rendered on top of the canvas
        }}
      >
        <div>
          {flag ? (
            <div>
              <HomeStartingComponent />
              <Extravaganza />
              <Sponsers />
            </div>
          ) : (
            <LaunchPage setFlag={setFlag} />
          )}
        </div>
      </div>
    </div>
  );
}
