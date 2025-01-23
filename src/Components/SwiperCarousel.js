import React, { useEffect, useMemo } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../CustomCarousel.module.css"; // Import the CSS module
import backgroundBanner1 from "../Banner_01_01.jpg";
import backgroundBanner2 from "../Banner_02.jpg";
import backgroundBanner3 from "../Banner_03-NEW.jpg";

const CustomBootstrapCarousel = () => {
  const slides = [
    {
      image: backgroundBanner1,
      text: "Machine learning isn’t just about predicting the future—it’s about uncovering the hidden patterns that shape tomorrow’s decisions.",
    },
    {
      image: backgroundBanner2,
      text: "In the world of artificial intelligence, data is the language, algorithms are the grammar, and predictions are the stories we tell.",
    },
    {
      image: backgroundBanner3,
      text: "Data science isn’t about finding answers; it’s about finding the right questions.",
    },
  ];
  // useEffect(() => {
  //   // Preload images
  //   slides.forEach((slide) => {
  //     const img = new Image();
  //     img.src = slide.image;
  //   });
  // }, [slides]);
  return (
    <Carousel className={styles.customCarousel}>
      {slides.map((slide, index) => (
        <Carousel.Item key={index} style={{ height: "100vh" }}>
          <div
            className={styles.carouselBg}
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <Carousel.Caption className={styles.customCaption}>
              <h2>{slide.text}</h2>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      ))}

      {/* Custom buttons can also be styled */}
      {/* <div className={styles.customCarouselControls}>
        <button
          className="carousel-control-prev"
          data-bs-target=".custom-carousel"
          data-bs-slide="prev"
        >
          Prev
        </button>
        <button
          className="carousel-control-next"
          data-bs-target=".custom-carousel"
          data-bs-slide="next"
        >
          Next
        </button>
      </div> */}
    </Carousel>
  );
};

export default CustomBootstrapCarousel;
