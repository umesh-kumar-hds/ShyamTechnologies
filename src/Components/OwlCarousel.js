import React from "react";
import backgroundBanner1 from "../Banner_01_01.jpg";
import backgroundBanner2 from "../Banner_02.jpg";
import backgroundBanner3 from "../Banner_03-NEW.jpg";
const OwlCarousel = () => {
  const backgroundStyle1 = {
    backgroundImage: `url(${backgroundBanner1})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };
  const backgroundStyle2 = {
    backgroundImage: `url(${backgroundBanner2})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };
  const backgroundStyle3 = {
    backgroundImage: `url(${backgroundBanner3})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };
  return (
    <div>
      <div className="owl-carousel owl-theme">
        <div className="untree_co-hero " style={backgroundStyle3}>
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-12">
                <div className="row justify-content-center">
                  <div className="col-lg-6 text-center">
                    <h2
                      className="mb-4 heading text-white"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      Data science isn’t about finding answers; it’s about
                      finding the right questions.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="untree_co-hero " style={backgroundStyle2}>
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-12">
                <div className="row justify-content-center">
                  <div className="col-lg-6 text-center">
                    <h2
                      className="mb-4 heading text-white"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      In the world of artificial intelligence, data is the
                      language, algorithms are the grammar, and predictions are
                      the stories we tell.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="untree_co-hero " style={backgroundStyle1}>
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-12">
                <div className="row justify-content-center">
                  <div className="col-lg-6 text-center">
                    <h2
                      className="mb-4 heading text-white"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      Machine learning isn’t just about predicting the
                      future—it’s about uncovering the hidden patterns that
                      shape tomorrow’s decisions.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwlCarousel;
