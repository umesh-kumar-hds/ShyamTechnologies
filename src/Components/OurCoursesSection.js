import React from "react";
import { Link } from "react-router-dom";

const OurCoursesSection = () => {
  return (
    <div>
      <div className="untree_co-section " id="our-courses">
        <div className="container">
          <div className="row justify-content-center mb-3">
            <div
              className="col-lg-7 text-center"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <h2 className="line-bottom text-center mb-4">OUR COURSES</h2>
            </div>
          </div>
          <div className="row align-items-stretch">
            <div
              className="col-sm-6 col-md-6 col-lg-3 mb-4 tooltip-container"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <Link
                to="/python-course"
                className="category d-flex align-items-start h-100"
              >
                <div>
                  <i className="uil">
                    {" "}
                    <img
                      alt=""
                      src="images/python.png"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </i>
                </div>
                <div>
                  <h3>Python Programming</h3>
                  <span className="tooltip-text">
                    Learn the basics and advanced concepts of Python
                    programming.
                  </span>
                </div>
              </Link>
            </div>
            <div
              className="col-sm-6 col-md-6 col-lg-3 mb-4"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <Link
                to="/DataScience"
                className="category d-flex align-items-start h-100 tooltip-container"
              >
                <div>
                  <i className="uil">
                    {" "}
                    <img
                      alt=""
                      src="images/data-science (1).png"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </i>
                </div>

                <div className="">
                  <h3>Data Science With AI & ML</h3>{" "}
                  <span className="tooltip-text">
                    Learn the basics and advanced concepts of Data Science With
                    AI & ML
                  </span>
                </div>
              </Link>
            </div>
            <div
              className="col-sm-6 col-md-6 col-lg-3 mb-4"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <Link
                to="/DataAnalytics"
                className="category d-flex align-items-start h-100 tooltip-container"
              >
                <div>
                  <i className="uil">
                    {" "}
                    <img
                      alt=""
                      src="images/data analytics.png"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </i>
                </div>
                <div></div>
                <div>
                  <h3>Data Analytics</h3>
                  <span className="tooltip-text">
                    Learn the basics and advanced concepts of Data Analytics
                  </span>
                </div>
              </Link>
            </div>
            <div
              className="col-sm-6 col-md-6 col-lg-3 mb-4"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <Link
                to="/PowerBi"
                className="category d-flex align-items-start h-100 tooltip-container"
              >
                <div>
                  <i className="uil">
                    {" "}
                    <img
                      alt=""
                      src="images/icons8-power-bi-2021-500.png"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </i>
                </div>
                <div>
                  <h3 weight="bold">Power BI</h3>
                  <span className="tooltip-text">
                    Learn the basics and advanced concepts of Power BI.
                  </span>
                </div>
              </Link>
            </div>
            <div
              className="col-sm-6 col-md-6 col-lg-3 mb-4"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <Link
                to="/Informatica"
                className="category d-flex align-items-start h-100 tooltip-container"
              >
                <div>
                  <i className="uil">
                    {" "}
                    <img
                      alt=""
                      src="images/INFA-c4767c1c.png"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </i>
                </div>
                <div>
                  <h3>Informatica</h3>
                  <span className="tooltip-text">
                    Learn the basics and advanced concepts of Informatica.
                  </span>
                </div>
              </Link>
            </div>
            <div
              className="col-sm-6 col-md-6 col-lg-3 mb-4"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <Link
                to="/Aws"
                className="category d-flex align-items-start h-100 tooltip-container"
              >
                <div>
                  <i className="uil">
                    {" "}
                    <img
                      alt=""
                      src="images/icons8-amazon-web-services-480.png"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </i>
                </div>
                <div>
                  <h3>AWS Devops</h3>
                  <span className="tooltip-text">
                    Learn the basics and advanced concepts of AWS Devops.
                  </span>
                </div>
              </Link>
            </div>

            <div
              className="col-sm-6 col-md-6 col-lg-3 mb-4"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <Link
                to="/Azure"
                className="category d-flex align-items-start h-100 tooltip-container"
              >
                <div>
                  <i className="uil">
                    {" "}
                    <img
                      alt=""
                      src="images/icons8-azure-480.png"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </i>
                </div>
                <div>
                  <h3>AZURE Devops</h3>
                  <span className="tooltip-text">
                    Learn the basics and advanced concepts of AZURE Devops.
                  </span>
                </div>
              </Link>
            </div>
            <div
              className="col-sm-6 col-md-6 col-lg-3 mb-4"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <Link
                to="/Pega"
                className="category d-flex align-items-start h-100 tooltip-container"
              >
                <div>
                  <i className="uil">
                    {" "}
                    <img
                      alt=""
                      src="images/Pega_Logo.png"
                      style={{ width: "50px", height: "40px" }}
                    />
                  </i>
                </div>
                <div>
                  <h3>PEGA</h3>
                  <span className="tooltip-text">
                    Learn the basics and advanced concepts of PEGA.
                  </span>
                </div>
              </Link>
            </div>
            <div
              className="col-sm-6 col-md-6 col-lg-3 mb-4"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <Link
                to="/MicroSoft"
                className="category d-flex align-items-start h-100 tooltip-container"
              >
                <div>
                  <i className="uil">
                    {" "}
                    <img
                      alt=""
                      src="images/icons8-microsoft-500.png"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </i>
                </div>
                <div>
                  <h3>Microsoft Full Stack</h3>
                  <span className="tooltip-text">
                    Learn the basics and advanced concepts of Microsoft Full
                    Stack.
                  </span>
                </div>
              </Link>
            </div>
            <div
              className="col-sm-6 col-md-6 col-lg-3 mb-4"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <Link
                to="/Java"
                className="category d-flex align-items-start h-100 tooltip-container"
              >
                <div>
                  <i className="uil">
                    <img
                      alt=""
                      src="images/icons8-java-500.png"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </i>
                </div>
                <div>
                  <h3>JAVA Full Stack</h3>
                  <span className="tooltip-text">
                    Learn the basics and advanced concepts of JAVA Full Stack.
                  </span>
                </div>
              </Link>
            </div>
            <div
              className="col-sm-6 col-md-6 col-lg-3 mb-4"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <Link
                to="/Testing"
                className="category d-flex align-items-start h-100 tooltip-container"
              >
                <div>
                  <i className="uil">
                    {" "}
                    <img
                      alt=""
                      src="images/testing automation.png"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </i>
                </div>
                <div>
                  <h3>Testing Manual & Automation</h3>
                  <span className="tooltip-text">
                    Learn the basics and advanced concepts of Testing Manual &
                    Automation.
                  </span>
                </div>
              </Link>
            </div>
            <div
              className="col-sm-6 col-md-6 col-lg-3 mb-4"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <Link
                to="Sap"
                className="category d-flex align-items-start h-100 tooltip-container"
              >
                <div>
                  <i className="uil">
                    {" "}
                    <img
                      alt=""
                      src="images/icons8-sap-480.png"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </i>
                </div>
                <div>
                  <h3>SAP FICO with S4 HANA</h3>
                  <span className="tooltip-text">
                    Learn the basics and advanced concepts of SAP FICO with S4
                    HANA.
                  </span>
                </div>
              </Link>
            </div>
            <div
              className="col-sm-6 col-md-6 col-lg-3 mb-4"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <Link
                to="Tableau"
                className="category d-flex align-items-start h-100 tooltip-container"
              >
                <div>
                  <i className="uil">
                    {" "}
                    <img
                      alt=""
                      src="images/icons8-tableau-software-500.png"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </i>
                </div>
                <div>
                  <h3>Tableau</h3>
                  <span className="tooltip-text">
                    Learn the basics and advanced concepts of Tableau.
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCoursesSection;
