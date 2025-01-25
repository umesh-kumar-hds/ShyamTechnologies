import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickTestimonialsSection = () => {
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

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="testimonials-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 text-center mx-auto">
            <h3 className="line-bottom mb-4">Testimonials</h3>
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index}>
                  <blockquote className="blockquote text-center">
                    <p className="mb-4">&ldquo;{testimonial.text}&rdquo;</p>
                    <div className="author">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="rounded-circle mb-3 responsive-margin-test"
                        style={{ width: "30%" }}
                      />
                      <h3>{testimonial.name}</h3>
                      <p className="text-muted">{testimonial.position}</p>
                    </div>
                  </blockquote>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlickTestimonialsSection;
