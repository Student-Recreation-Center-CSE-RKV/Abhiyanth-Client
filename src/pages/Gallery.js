import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { fetchAllImages } from "../api/getAllGalleryImages";
import GalleryShimmer from "../components/gallery/GalleryShimmer";
import gallery_main1 from "../assets/images/gallery_main1.webp";
import gallery_main2 from "../assets/images/gallery_main2.webp";
import gallery_main3 from "../assets/images/hackathon.jpeg";
import gallery_main4 from "../assets/images/gallary_img2.jpeg";
import ImageCarousel from "../components/general/Carousel";
import CarouselShimmer from "../components/gallery/CarouselShimmer";
import { fetchFirebaseDoc } from "../api/general";
import ErrorBoundary from "./ErrorBoundary";

function MomentsOfPreviousAbhiyath() {
  
  const [imageUrls, setImages] = useState([]);
  const [galleryCarousels, setCarouselImages] = useState([]);
  const [isLoadingCarousels, setLoadingCarousels] = useState(true);
  const [isLoadingGallery, setLoadingGallery] = useState(true);
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

  // Utility function to preload images
  const preloadImages = async (urls) => {
    return Promise.all(
      urls.map(
        (url) =>
          new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = resolve;
            img.onerror = reject;
          })
      )
    );
  };

  useEffect(() => {
    const loadCarouselImages = async () => {
      const CONSTANTS_COLLECTION = "constants";
      const CACHE_DOC = "cache";
      const LOCAL_STORAGE_KEY = "galleryCarousels";
    
      try {
        // Step 1: Fetch the version constant from Firebase
        const cacheDoc = await fetchFirebaseDoc(CONSTANTS_COLLECTION, CACHE_DOC);
        const firebaseVersion = cacheDoc?.galleryCarousels || 1; // Fallback to version 1 if undefined
    
        // Step 2: Check if galleryCarousels exists in localStorage
        const localCache = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        const localVersion = localCache?.version || 0;
    
        if (localVersion < firebaseVersion) {
          // Step 3: Fetch new images from Firebase if the version is outdated or missing
          const fetchedCarouselImages = await fetchAllImages("galleryCarousel");
    
          // Step 4: Preload images and update state
          await preloadImages(fetchedCarouselImages);
          setCarouselImages(fetchedCarouselImages);
    
          // Step 5: Update localStorage with the new version and images
          localStorage.setItem(
            LOCAL_STORAGE_KEY,
            JSON.stringify({
              version: firebaseVersion,
              images: fetchedCarouselImages,
            })
          );
        } else {
          // Step 6: Use cached images from localStorage
          const cachedImages = localCache.images || [];
          setCarouselImages(cachedImages);
        }
      } catch (error) {
        console.error("Error loading carousel images:", error);
      } finally {
        setLoadingCarousels(false);
      }
    };
    

    const loadGalleryImages = async () => {
      const CONSTANTS_COLLECTION = "constants";
      const CACHE_DOC = "cache";
      const LOCAL_STORAGE_KEY = "galleryImages";
    
      const localImages = [
        gallery_main2,
        gallery_main1,
        gallery_main3,
        gallery_main4,
      ];
    
      try {
        // Step 1: Fetch the version constant from Firebase
        const cacheDoc = await fetchFirebaseDoc(CONSTANTS_COLLECTION, CACHE_DOC);
        const firebaseVersion = cacheDoc?.galleryImages || 1; // Fallback to version 1 if undefined
    
        // Step 2: Check if galleryImages exists in localStorage
        const localCache = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        const localVersion = localCache?.version || 0;
    
        if (localVersion < firebaseVersion) {
          console.log("Fetching new gallery images from Firebase...");
    
          // Step 3: Fetch new images from Firebase if the version is outdated or missing
          const fetchedImageUrls = await fetchAllImages("gallery");
    
          // Step 4: Preload images and update state
          await preloadImages(fetchedImageUrls);
          setImages(localImages.concat(fetchedImageUrls));
    
          // Step 5: Update localStorage with the new version and images
          localStorage.setItem(
            LOCAL_STORAGE_KEY,
            JSON.stringify({
              version: firebaseVersion,
              images: fetchedImageUrls,
            })
          );
        } else {
          console.log("Using cached gallery images from localStorage...");
    
          // Step 6: Use cached images from localStorage
          const cachedImages = localCache.images || [];
          setImages(localImages.concat(cachedImages));
        }
      } catch (error) {
        console.error("Error loading gallery images:", error);
      } finally {
        setLoadingGallery(false);
      }
    };
    

    // First load and handle carousel images, then fetch gallery images
    const initialize = async () => {
      await loadCarouselImages();
      loadGalleryImages(); // Start loading gallery images after carousel
    };

    initialize();
  }, []);

  const styles = {
    container: {
      padding: "20px",
      textAlign: "center",
      paddingTop: "30px",
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
    <ErrorBoundary>
      <>
      {isLoadingCarousels ? (
        <div style={{marginTop:"60px"}}>
          <CarouselShimmer/>
        </div>
        
      ) : (
        <ImageCarousel images={galleryCarousels} />
      )}
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
        {isLoadingGallery ? (
          <div>
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
                  loading="lazy"
                  style={{
                    ...styles.gridImage,
                    ...(isLoadingGallery ? {} : styles.gridImageLoaded),
                  }}
                  onLoad={(e) => (e.target.style.opacity = 1)}
                  onMouseOver={(e) =>
                    (e.target.style.transform = "scale(1.1)")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.transform = "scale(1)")
                  }
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
    </>
    </ErrorBoundary>
  );
}

export default MomentsOfPreviousAbhiyath;


