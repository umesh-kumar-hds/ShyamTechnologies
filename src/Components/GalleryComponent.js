import React from "react";

const GalleryComponent = () => {
  return (
    <div>
      <div className="untree_co-section" style={{ marginTop: "30px" }}>
        <hr></hr>
        <h1
          style={{
            marginLeft: "20px",
            marginBottom: "20px",
            color: "blue",
          }}
          className="text-center"
        >
          Our Gallery{" "}
        </h1>
        <div className="container">
          <div className="row">
            {/* <div className="col-md-2 col-lg-2 item"></div> */}

            <div className="col-md-3 col-lg-3 item">
              <a
                href="images/shyam1.jpg"
                className="item-wrap fancybox mb-4"
                data-fancybox="gal"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <span className="icon-search2"></span>
                <img className="img-fluid" src="images/shyam1.jpg" alt="" />
              </a>
              <a
                href="images/shyam3.jpg"
                className="item-wrap fancybox mb-4"
                data-fancybox="gal"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <span className="icon-search2"></span>
                <img className="img-fluid" src="images/shyam3.jpg" alt="" />
              </a>
            </div>
            {/* <div className="col-md-1 col-lg-1 item"></div> */}
            <div className="col-md-3 col-lg-3 item">
              <a
                href="images/shyam2.jpg"
                className="item-wrap fancybox mb-4"
                data-fancybox="gal"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <span className="icon-search2"></span>
                <img alt="" className="img-fluid" src="images/shyam2.jpg" />
              </a>
              <a
                href="images/shyam4.jpg"
                className="item-wrap fancybox mb-4"
                data-fancybox="gal"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <span className="icon-search2"></span>
                <img alt="" className="img-fluid" src="images/shyam4.jpg" />
              </a>
            </div>
            {/* <div className="col-md-1 col-lg-1 item"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryComponent;
