import React, { memo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickTestimonialsSection = memo(() => {
  const testimonials = [
    {
      text: "I had the privilege of taking a Data Science course at Shyam Technologies, and I can confidently say it was an incredible learning experience. A special mention to Deepika madam, who was incredibly friendly, supportive, and always approachable for any doubts or guidance.",
      image: "images/test01.jpg",
      name: "VINAY VEERAGANI",
      position: "Student",
    },
    {
      text: "I truly enjoyed Deepika ma’am's Python classes throughout my course of study. She is an amazing teacher, and her teaching style is both unique and engaging. Thank you so much for making learning such a wonderful experience!",
      image: "images/2.jpg",
      name: "Alok Singh",
      position: "Student",
    },
    {
      text: "Excellent experience! Deepika ma’am provided the best examples in a very professional way, ensuring we learned from scratch. A special thanks to her for the dedication and effort in making learning enjoyable.",
      image: "images/girl03.jpg",
      name: "Ramya Sri Kalipindi",
      position: "Student",
    },
  ];

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 400, // Faster transition
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // Smoother experience
    lazyLoad: "ondemand", // Optimized image loading
    adaptiveHeight: true, // Adjust height dynamically
  };

  return (
    <section
      className="testimonials-section"
      aria-labelledby="testimonials-heading"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7 text-center mx-auto">
            <h2 id="testimonials-heading" className="line-bottom mb-4">
              Testimonials from Shyam Technologies Alumni
            </h2>
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-slide">
                  <blockquote className="blockquote text-center">
                    <p className="mb-4">&ldquo;{testimonial.text}&rdquo;</p>
                    <div className="author">
                      <img
                        src={testimonial.image}
                        alt={`Testimonial from ${testimonial.name}, ${testimonial.position}`}
                        className="rounded-circle mb-3 testimonial-image responsive-margin-test"
                        loading="lazy"
                        style={{ width: "40%" }}
                      />
                      <h4 className="testimonial-name">{testimonial.name}</h4>
                      <p className="text-muted">{testimonial.position}</p>
                    </div>
                  </blockquote>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
});

export default SlickTestimonialsSection;
