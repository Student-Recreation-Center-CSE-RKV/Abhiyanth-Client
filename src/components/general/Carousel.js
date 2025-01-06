import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ImageCarousel = ({ images }) => {
  if (!images || images.length === 0) {
    return <p>No images to display</p>;
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
        marginTop:"75px",
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            style={{
              width: "100%",
              height: "70vh",
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
