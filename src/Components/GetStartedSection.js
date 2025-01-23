import React from "react";
import { Link } from "react-router-dom";

const GetStartedSection = () => {
  return (
    <div>
      <div className="services-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div
                className="section-title mb-3"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <h2 className="line-bottom mb-4">
                  Are you willing to join us and teach ?
                </h2>
              </div>

              <p data-aos="fade-up" data-aos-delay="100">
                We believe that teaching is not just about imparting
                knowledge—it's about sparking curiosity, encouraging growth, and
                fostering a lifelong love of learning. Our mission is to create
                a supportive and dynamic learning environment where both
                educators and students thrive.
              </p>
              <p>
                <b>What We Offer:</b>
              </p>
              <ul
                className="ul-check list-unstyled mb-5 primary"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <li>A collaborative and innovative teaching environment.</li>
                <li>
                  The opportunity to make a lasting impact on students' lives.
                </li>
                <li>Professional development and training opportunities.</li>
                <li>Competitive compensation and benefits.</li>
                <li>A positive and inclusive community.</li>
              </ul>
              <p>What We're Looking For:</p>
              <ul
                className="ul-check list-unstyled mb-5 primary"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <li>
                  {" "}
                  Passionate, dedicated educators with a love for teaching.
                </li>
                <li>
                  Individuals who are motivated to inspire and empower students.
                </li>
                <li>
                  A commitment to fostering an inclusive, engaging, and dynamic
                  learning space.
                </li>
                <li>
                  A willingness to grow professionally and Contribute to our
                  collective success.
                </li>
              </ul>
              <p data-aos="fade-up" data-aos-delay="300">
                <Link to="/contact" className="btn btn-primary">
                  Get Started
                </Link>
              </p>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="0">
              <figure className="img-wrap-2">
                <img
                  src="images/two-portaits.png"
                  alt=""
                  className="img-fluid"
                />
                <div className="dotted"></div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedSection;
