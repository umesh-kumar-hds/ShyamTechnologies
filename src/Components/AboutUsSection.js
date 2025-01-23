import React from "react";

const AboutUsSection = () => {
  return (
    <div>
      <div className="untree_co-section " id="about-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5 mb-5">
              <h2
                className="line-bottom mb-4"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                About Us
              </h2>
              <p data-aos="fade-up" data-aos-delay="100">
                Preparing and Training the individuals in emerging technologies
                for their GLOBAL TECH - CAREERS
                <br />
                Shyam Technologies is an edTech organization with a motive to
                train the students as well as corporates in academia as well as
                in industry in 360 degree approach. Our outcome-based
                experiential learning programs on emerging technologies like
                Machine Learning, Data Science, Artificial Intelligence, Devops,
                .Net, Python, R, Informatica, AWS are building skilled entry for
                entry level engineers, and professionals who are aspiring to
                learn new technologies for a change or a better Growth in their
                career.
              </p>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
              <a
                href="https://vimeo.com/342333493"
                data-fancybox
                className="video-wrap"
              >
                <img
                  src="images/ammai.png"
                  alt=""
                  className="img-fluid rounded"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
