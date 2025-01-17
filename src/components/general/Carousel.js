import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTheme,useMediaQuery } from "@mui/material";

const ImageCarousel = ({ images }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // xs and sm screens
  if (!images || images.length === 0) {
    return <p></p>;
  }

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      style={{
        width: "100%",
        height: "auto",
        marginTop:"60px",
      }}
    >
      {images.length>0 && images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            style={{
              padding:"10px",
              width: "100%",
              height: isSmallScreen ? "37vh" : "80vh",
              borderRadius: "8px",
              objectFit: "cover",
              
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;
