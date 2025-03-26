import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AboutUsSection = memo(() => {
  return (
    <section className="untree_co-section" id="about-section">
      {/* SEO Optimization */}
      <Helmet>
        <title>
          Preparing and Training Individuals in Emerging Technologies for GLOBAL
          TECH CAREERS
        </title>
        <meta
          name="description"
          content="Shyam Technologies trains students & professionals in AI, Machine Learning, Data Science, DevOps, AWS, and more for global tech careers."
        />
        <meta
          name="keywords"
          content="AI, Machine Learning, Data Science, DevOps, AWS, Python, Tech Careers"
        />
        <link rel="preload" as="image" href="images/ammai.png" />
      </Helmet>

      <div className="container">
        <div className="row justify-content-between">
          {/* Left Content */}
          <div className="col-lg-5 mb-5">
            <h2 className="line-bottom mb-4" data-aos="fade-up">
              About Shyam Technologies
            </h2>
            <p data-aos="fade-up" data-aos-delay="100">
              Preparing and training individuals in emerging technologies for
              their GLOBAL TECH CAREERS.
            </p>
            <p data-aos="fade-up" data-aos-delay="200">
              Shyam Technologies is a leading EdTech organization focused on
              equipping students and professionals with industry-ready skills.
              Our outcome-based experiential learning covers technologies such
              as Machine Learning, Data Science, AI, DevOps, .Net, Python, AWS,
              and more.
            </p>
            <p data-aos="fade-up" data-aos-delay="300">
              Our programs help entry-level engineers and professionals
              transition into new roles and technologies for career growth.
            </p>
          </div>

          {/* Right Image */}
          <div
            className="col-lg-6 text-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Link
              to="#"
              aria-label="Watch our video to learn more about Shyam Technologies"
            >
              <img
                src="images/ammai.png"
                alt="Shyam Technologies Video Introduction"
                className="img-fluid rounded"
                loading="lazy"
                width="600"
                height="400"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutUsSection;
