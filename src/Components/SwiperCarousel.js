import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../CustomCarousel.module.css";

// Slide Data
const slides = [
  {
    image:
      "https://res.cloudinary.com/dok6lc2s2/image/upload/v1740395255/opdhohuvl6ydfpadezka.webp",
    text: "Machine learning isn’t just about predicting the future—it’s about uncovering the hidden patterns that shape tomorrow’s decisions.",
    keywords: "Machine Learning, AI predictions, Data Science",
  },
  {
    image:
      "https://res.cloudinary.com/dok6lc2s2/image/upload/v1740395255/euqpfwzn17p4ksjkpt3i.webp",
    text: "In the world of artificial intelligence, data is the language, algorithms are the grammar, and predictions are the stories we tell.",
    keywords: "Artificial Intelligence, Data Analysis, Predictive Modeling",
  },
  {
    image:
      "https://res.cloudinary.com/dok6lc2s2/image/upload/v1740395255/e7kxj9nx9ylhxlnotdm7.webp",
    text: "Data science isn’t about finding answers; it’s about finding the right questions.",
    keywords: "Data Science, Big Data, Analytics",
  },
];

const CustomBootstrapCarousel = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      await Promise.all(
        slides.map((slide) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = slide.image;
            img.onload = resolve;
          });
        })
      );
      setImagesLoaded(true);
    };

    loadImages();
  }, []);

  return (
    <div className="container-fluid p-0">
      {/* SEO Optimization */}
      <Helmet>
        <title>
          Explore AI, Machine Learning & Data Science - Shyam Technologies
        </title>
        <meta
          name="description"
          content="Discover insights in AI, Machine Learning, and Data Science with our interactive carousel."
        />
        <meta
          name="keywords"
          content="AI, Machine Learning, Data Science, Predictive Analytics, Artificial Intelligence"
        />
        {/* Preload First Image */}
        <link rel="preload" as="image" href={slides[0].image} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "AI & Machine Learning Insights",
            description:
              "Explore AI, Machine Learning, and Data Science insights.",
            image: slides.map((slide) => slide.image),
          })}
        </script>
      </Helmet>

      {/* Show Spinner if Images Are Loading */}
      {!imagesLoaded && (
        <div className="min-vh-100 bg-dark d-flex align-items-center justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {/* Carousel (LCP Optimized) */}
      {imagesLoaded && (
        <Carousel
          fade
          interval={5000}
          controls
          indicators
          className={styles.customCarousel}
        >
          {slides.map((slide, index) => (
            <Carousel.Item key={index} style={{ height: "100vh" }}>
              {/* Prioritize first image */}
              <img
                src={slide.image}
                alt="AI Insights"
                className="d-block w-100"
                style={{ objectFit: "cover", height: "100vh" }}
                loading={index === 0 ? "eager" : "lazy"} // First image loads faster
              />
              <Carousel.Caption
                className={styles.customCaption}
                style={{ minHeight: "120px" }} // Prevent layout shift
              >
                <h2>{slide.text}</h2>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default CustomBootstrapCarousel;
