import React from "react";
import styles from "../TestimonialsSection.module.css"; // Import CSS Module
import "bootstrap/dist/css/bootstrap.min.css";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      image: "images/person_1.jpg",
      name: "John Doe",
      position: "CEO, Founder",
    },
    {
      text: "When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove.",
      image: "images/person_2.jpg",
      name: "James Woodland",
      position: "Designer at Facebook",
    },
    {
      text: "She continued her way, pityful a rhetoric question ran over her cheek, then she continued her way.",
      image: "images/person_3.jpg",
      name: "Rob Smith",
      position: "Product Designer at Twitter",
    },
  ];

  return (
    <div className={styles.testimonialsSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 text-center mx-auto">
            <h3 className={`${styles.lineBottom} mb-4`}>Testimonials</h3>
            <div
              id="testimonialCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <blockquote className={`${styles.blockquote} text-center`}>
                      <p className="mb-4">&ldquo;{testimonial.text}&rdquo;</p>
                      <div className={styles.author}>
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className={`${styles.image} rounded-circle mb-3`}
                        />
                        <h3>{testimonial.name}</h3>
                        <p className={`${styles.position} text-muted`}>
                          {testimonial.position}
                        </p>
                      </div>
                    </blockquote>
                  </div>
                ))}
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
