import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { fetchAllImages } from "../api/getAllGalleryImages";
import GalleryShimmer from "../components/gallery/GalleryShimmer";
import gallery_main1 from "../assets/images/gallery_main1.webp"
import gallery_main2 from "../assets/images/gallery_main2.webp"
import gallery_main3 from "../assets/images/hackathon.jpeg"
import gallery_main4 from "../assets/images/gallary_img2.jpeg"

function MomentsOfPreviousAbhiyath() {
  const [imageUrls, setImages] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (url) => {
    setSelectedImage(url);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage("");
  };

  useEffect(() => {
    const loadImages = async () => {
      try {
        const imageUrls = await fetchAllImages("gallery");
        const images=[gallery_main2,gallery_main1,gallery_main3,gallery_main4];
        setImages(images.concat(imageUrls));
      } catch (error) {
        console.error("Error loading images:", error);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  const styles = {
    container: {
      padding: "20px",
      textAlign: "center",
      paddingTop: "80px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "20px",
      justifyItems: "center",
    },
    gridItem: {
      width: "100%",
      cursor: "pointer",
      overflow: "hidden",
      borderRadius: "8px",
    },
    gridImage: {
      width: "300px",
      height: "200px",
      objectFit: "cover",
      opacity: 0,
      borderRadius: "15px",
      transition: "opacity 0.5s ease, transform 0.3s ease",
    },
    gridImageLoaded: {
      opacity: 1,
    },
    modal: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
    },
    modalContent: {
      maxWidth: "90%",
      maxHeight: "90%",
      backgroundColor: "#000",
      padding: "10px",
      borderRadius: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    modalImage: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      borderRadius: "10px",
    },
  };
  

  return (
    <div style={styles.container}>
      <Typography
        sx={{
          fontFamily: "Audiowide, sans-serif",
          fontWeight: "bold",
          marginBottom: "20px",
          color: "#FFFFFF",
          fontSize: {
            xs: "30px", // Extra small screens
            sm: "35px", // Small screens
            md: "40px", // Medium screens
            lg: "45px", // Large screens
          },
        }}
      >
        Moments of Previous Abhiyath
      </Typography>
      {isLoading ? (
        <div >
          
            <GalleryShimmer />
          
        </div>
      ) : (
        <div style={styles.grid}>
          {imageUrls.map((url, index) => (
            <div
              key={index}
              style={styles.gridItem}
              onClick={() => handleImageClick(url)}
            >
              <img
                src={url}
                alt={`Abhiyath Moment ${index + 1}`}
                style={
                  isLoading
                    ? styles.gridImage
                    : { ...styles.gridImage, ...styles.gridImageLoaded }
                }
                onLoad={(e) => (e.target.style.opacity = 1)}
                onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
              />
            </div>
          ))}
        </div>
      )}

{isModalOpen && (
  <div style={styles.modal} onClick={closeModal}>
    <div style={styles.modalContent}>
      <img
        src={selectedImage}
        alt="Full view"
        style={styles.modalImage}
      />
    </div>
  </div>
)}

    </div>
  );
}

export default MomentsOfPreviousAbhiyath;
