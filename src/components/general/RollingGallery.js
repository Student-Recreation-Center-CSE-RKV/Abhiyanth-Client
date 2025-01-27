import { useEffect, useRef } from "react";
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";
import "../../styles/RollingGallery.css";

const RollingGallery = ({ autoplay = true, images = [] }) => {
  const controls = useAnimation();
  const rotation = useMotionValue(0);
  const autoplayRef = useRef();
  const faceCount = images.length;

  // Cylinder settings
  const cylinderWidth = 1800; // Adjust for your design
  const radius = cylinderWidth / (2 * Math.PI);
  const faceWidth = cylinderWidth / faceCount;

  const transform = useTransform(rotation, (value) => `rotate3d(0, 1, 0, ${value}deg)`);

  // Autoplay effect
  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        controls.start({
          rotateY: rotation.get() - 0.5, // Smooth continuous rotation
          transition: { duration: 0.02, ease: "linear" },
        });
        rotation.set(rotation.get() - 0.5);
      }, 16); // ~60fps

      return () => clearInterval(autoplayRef.current);
    }
  }, [autoplay, rotation, controls]);

  return (
    <div className="gallery-container">
      <div className="gallery-content">
        <motion.div
          className="gallery-track"
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          animate={controls}
        >
          {images.map((url, i) => (
            <div
              key={i}
              className="gallery-item"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`,
              }}
            >
              <img src={url} alt="gallery" className="gallery-img" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;
