import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const GetStartedSection = memo(() => {
  return (
    <section className="services-section">
      {/* SEO Optimization */}
      <Helmet>
        <title>Join Our Teaching Community | Teach with Us</title>
        <meta
          name="description"
          content="Passionate about teaching? Join our vibrant educator community and inspire students worldwide. We offer professional growth, competitive pay, and a positive environment."
        />
        <meta
          name="keywords"
          content="teach online, educator jobs, teaching opportunities, education careers, online teaching, instructor roles"
        />
        <meta name="robots" content="index, follow" />
        <link rel="preload" as="image" href="images/two-portaits.png" />
      </Helmet>

      <div className="container">
        <div className="row justify-content-between">
          {/* Left Content */}
          <article className="col-lg-6 mb-5 mb-lg-0">
            <header className="section-title mb-3" data-aos="fade-up">
              <h1 className="line-bottom mb-4">
                Are you willing to join us and teach?
              </h1>
            </header>

            <p data-aos="fade-up" data-aos-delay="100">
              Teaching is about sparking curiosity, encouraging growth, and
              fostering a lifelong love of learning. Our mission is to create a
              dynamic environment where educators and students thrive.
            </p>

            <h2 className="mt-4">What We Offer:</h2>
            <ul
              className="ul-check list-unstyled mb-4 primary"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <li>A collaborative and innovative teaching environment.</li>
              <li>Make a lasting impact on students' lives.</li>
              <li>Professional development and training opportunities.</li>
              <li>Competitive compensation and benefits.</li>
              <li>A positive and inclusive community.</li>
            </ul>

            <h2 className="mt-4">What We're Looking For:</h2>
            <ul
              className="ul-check list-unstyled mb-4 primary"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <li>Passionate educators with a love for teaching.</li>
              <li>Motivated individuals eager to inspire students.</li>
              <li>
                Commitment to fostering an inclusive, engaging learning space.
              </li>
              <li>
                Willingness to grow professionally and contribute to success.
              </li>
            </ul>

            <p data-aos="fade-up" data-aos-delay="300">
              <Link to="/contact" className="btn btn-primary">
                Get Started
              </Link>
            </p>
          </article>

          {/* Right Image */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="0">
            <figure className="img-wrap-2">
              <img
                src="images/two-portaits.png"
                alt="Join our educator community"
                className="img-fluid"
                loading="lazy"
                width="600"
                height="400"
              />
              <div className="dotted"></div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
});

export default GetStartedSection;
