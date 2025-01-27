import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const BestCoursesSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setIsSubmitting(true);
    setSubmissionStatus("");

    try {
      // Send the form data as a form-encoded POST request
      const response = await axios.post(
        "https://shyamtechnologies.in/sendEmail.php", // Replace with the actual path to your PHP file
        formData,
        {
          headers: {
            "Content-Type": "application/json", // Use JSON format for the PHP backend
          },
        }
      );

      // Check the PHP script's response
      if (response.data.status === "success") {
        setSubmissionStatus("Form submitted successfully!");
        setShowModal(false); // Close modal on success
      } else {
        setSubmissionStatus(response.data.message || "Error submitting form.");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmissionStatus("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div>
      <div className="untree_co-section" id="bestCourses">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div
              className="col-lg-7 text-center"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <h2 className="line-bottom text-center mb-4">
                We Have Best Courses
              </h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
          <div className="row">
            <div
              className=" col-sm-12 col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="feature text-left">
                <div className="twoButtons">
                  <i className="uil ">
                    {" "}
                    <img
                      alt=""
                      src="images/python.png"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </i>
                  <h3 style={{ marginLeft: "10px", marginTop: "5px" }}>
                    Python Programming
                  </h3>
                </div>
                <p>
                  <li>Basics Of Python</li>
                  <li>Data Types</li>
                  <li>Functions</li>
                  <li>OOPs</li>
                  <li>Modules</li>
                  <li>Errors And Exception Handling</li>
                </p>
                <div className="twoButtons">
                  <p>
                    <Link
                      to="/"
                      className="btn btn-secondary mr-2"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowModal(true); // Open the modal when link is clicked
                      }}
                    >
                      Enroll Now
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/python-course"
                      className="btn btn-primary"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      style={{ backgroundColor: "#001a33", border: "none" }}
                    >
                      More Details
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div
              className=" col-sm-12 col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="feature text-left">
                <div className="twoButtons">
                  <i className="uil ">
                    {" "}
                    <img
                      alt=""
                      src="images/data-science (1).png"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </i>
                  <h3 style={{ marginLeft: "10px", marginTop: "5px" }}>
                    Data Science with AI and ML
                  </h3>
                </div>
                <p>
                  <li>Introduction To Data Science</li>
                  <li>Business Statistics</li>
                  <li>Introduction To Data Science</li>
                  <li>Introduction To Machine Learning</li>
                  <li>ML -Statistical Modelling</li>
                  <li>Forecasting Analysis</li>
                </p>
                <div className="twoButtons">
                  <p>
                    <Link
                      to="/"
                      className="btn btn-secondary mr-2"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowModal(true); // Open the modal when link is clicked
                      }}
                    >
                      Enroll Now
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/DataScience"
                      className="btn btn-primary"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      style={{ backgroundColor: "#001a33", border: "none" }}
                    >
                      More Details
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div
              className=" col-sm-6 col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="feature text-left">
                <div className="twoButtons">
                  <i className="uil ">
                    {" "}
                    <img
                      alt=""
                      src="images/data analytics.png"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </i>
                  <h3 style={{ marginLeft: "10px", marginTop: "5px" }}>
                    Data Analytics
                  </h3>
                </div>
                <p>
                  <li>Introductio To Data Analytics</li>
                  <li>Data Analytics Using Excel</li>
                  <li>Python Basics</li>
                  <li>SQL Basics</li>
                  <li>Power BI</li>
                  <li>Tableau</li>
                </p>
                <div className="twoButtons">
                  <p>
                    <Link
                      to="/"
                      className="btn btn-secondary mr-2"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowModal(true); // Open the modal when link is clicked
                      }}
                    >
                      Enroll Now
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/DataAnalytics"
                      className="btn btn-primary"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      style={{ backgroundColor: "#001a33", border: "none" }}
                    >
                      More Details
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className=" col-sm-6 col-md-6 col-lg-4" data-aos="fade-up">
              <div className="feature text-left">
                <div className="twoButtons">
                  <i className="uil ">
                    {" "}
                    <img
                      alt=""
                      src="images/INFA-c4767c1c.png"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </i>
                  <h3 style={{ marginLeft: "10px", marginTop: "5px" }}>
                    Informatica
                  </h3>
                </div>
                <p>
                  <li>Introduction to Data Warehousing</li>
                  <li>Informatica PowerCenter Basics</li>
                  <li>Informatica PowerCenter Designer</li>
                  <li>Transformations in Informatica</li>
                  <li>Workflows and Sessions</li>
                  <li>Advanced Transformations and Techniques</li>
                </p>
                <div className="twoButtons">
                  <p>
                    <Link
                      to="/"
                      className="btn btn-secondary mr-2"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowModal(true); // Open the modal when link is clicked
                      }}
                    >
                      Enroll Now
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/Informatica"
                      className="btn btn-primary"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      style={{ backgroundColor: "#001a33", border: "none" }}
                    >
                      More Details
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div
              className=" col-sm-6 col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="feature text-left">
                <div className="twoButtons">
                  <i className="uil ">
                    {" "}
                    <img
                      alt=""
                      src="images/icons8-power-bi-2021-500.png"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </i>
                  <h3 style={{ marginLeft: "10px", marginTop: "5px" }}>
                    Power BI
                  </h3>
                </div>
                <p>
                  <li>Introduction to Power BI</li>
                  <li>Get Data From Different Data SourcesPreview</li>
                  <li>Profile The DataPreview</li>
                  <li>Clean Transform and Load the DataPreview</li>
                  <li>Design a Data ModelPreview</li>
                  <li>Develop a Data ModelPreview</li>
                </p>
                <div className="twoButtons">
                  <p>
                    <Link
                      to="/"
                      className="btn btn-secondary mr-2"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowModal(true); // Open the modal when link is clicked
                      }}
                    >
                      Enroll Now
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/PowerBi"
                      className="btn btn-primary"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      style={{ backgroundColor: "#001a33", border: "none" }}
                    >
                      More Details
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="feature text-left">
                <div className="twoButtons">
                  <i className="uil ">
                    {" "}
                    <img
                      alt=""
                      src="images/icons8-amazon-web-services-480.png"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </i>
                  <h3 style={{ marginLeft: "10px", marginTop: "5px" }}>
                    AWS Devops
                  </h3>
                </div>
                <p>
                  <li>Introduction to Power BI</li>
                  <li>Get Data From Different Data SourcesPreview</li>
                  <li>Profile The DataPreview</li>
                  <li>Clean Transform and Load the DataPreview</li>
                  <li>Design a Data ModelPreview</li>
                  <li>Develop a Data ModelPreview</li>
                </p>
                <div className="twoButtons">
                  <p>
                    <Link
                      to="/"
                      className="btn btn-secondary mr-2"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowModal(true); // Open the modal when link is clicked
                      }}
                    >
                      Enroll Now
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/Aws"
                      className="btn btn-primary"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      style={{ backgroundColor: "#001a33", border: "none" }}
                    >
                      More Details
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            {/* new courses */}
            <div
              className="col-sm-12 col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="feature text-left">
                <div className="twoButtons">
                  <i className="uil">
                    <img
                      alt=""
                      src="images/icons8-azure-480.png"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </i>
                  <h3 style={{ marginLeft: "10px", marginTop: "5px" }}>
                    Azure DevOps
                  </h3>
                </div>
                <p>
                  <li>DevOps Fundamentals</li>
                  <li>Azure Pipelines</li>
                  <li>Infrastructure as Code</li>
                  <li>Deployment Strategies</li>
                  <li>CI/CD Implementation</li>
                  <li>Monitoring & Security</li>
                </p>
                <div className="twoButtons">
                  <p>
                    <Link
                      to="/"
                      className="btn btn-secondary mr-2"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowModal(true);
                      }}
                    >
                      Enroll Now
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/Azure"
                      className="btn btn-primary"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      style={{ backgroundColor: "#001a33", border: "none" }}
                    >
                      More Details
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-sm-12 col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="feature text-left">
                <div className="twoButtons">
                  <i className="uil">
                    <img
                      alt=""
                      src="images/Pega_Logo.png"
                      style={{
                        width: "50px",
                        height: "30px",
                      }}
                    />
                  </i>
                  <h3 style={{ marginLeft: "5px", marginTop: "5px" }}>
                    Pega Course
                  </h3>
                </div>
                <p>
                  <li>Introduction to Pega</li>
                  <li>Case Management</li>
                  <li>Data Modeling</li>
                  <li>UI Design</li>
                  <li>Integration with APIs</li>
                  <li>Application Development</li>
                </p>
                <div className="twoButtons">
                  <p>
                    <Link
                      to="/"
                      className="btn btn-secondary mr-2"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowModal(true);
                      }}
                    >
                      Enroll Now
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/Pega"
                      className="btn btn-primary"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      style={{ backgroundColor: "#001a33", border: "none" }}
                    >
                      More Details
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-sm-12 col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="feature text-left">
                <div className="twoButtons">
                  <i className="uil">
                    <img
                      alt=""
                      src="images/icons8-microsoft-500.png"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </i>
                  <h3 style={{ marginLeft: "10px", marginTop: "5px" }}>
                    Microsoft Full Stack
                  </h3>
                </div>
                <p>
                  <li>HTML, CSS, JavaScript</li>
                  <li>React & Angular</li>
                  <li>ASP.NET Core</li>
                  <li>SQL Server</li>
                  <li>Cloud Deployment</li>
                  <li>Microservices</li>
                </p>
                <div className="twoButtons">
                  <p>
                    <Link
                      to="/"
                      className="btn btn-secondary mr-2"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowModal(true);
                      }}
                    >
                      Enroll Now
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/MicroSoft"
                      className="btn btn-primary"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      style={{ backgroundColor: "#001a33", border: "none" }}
                    >
                      More Details
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-sm-12 col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="feature text-left">
                <div className="twoButtons">
                  <i className="uil">
                    <img
                      alt=""
                      src="images/icons8-java-500.png"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </i>
                  <h3 style={{ marginLeft: "10px", marginTop: "5px" }}>
                    Java Full Stack
                  </h3>
                </div>
                <p>
                  <li>Java Basics</li>
                  <li>Spring Framework</li>
                  <li>Hibernate</li>
                  <li>REST APIs</li>
                  <li>Angular & React</li>
                  <li>Database Management</li>
                </p>
                <div className="twoButtons">
                  <p>
                    <Link
                      to="/"
                      className="btn btn-secondary mr-2"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowModal(true);
                      }}
                    >
                      Enroll Now
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/Java"
                      className="btn btn-primary"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      style={{ backgroundColor: "#001a33", border: "none" }}
                    >
                      More Details
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-sm-12 col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <div className="feature text-left">
                <div className="twoButtons">
                  <i className="uil">
                    <img
                      alt=""
                      src="images/testing automation.png"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </i>
                  <h3 style={{ marginLeft: "10px", marginTop: "5px" }}>
                    Testing Manual & Automation
                  </h3>
                </div>
                <p>
                  <li>Manual Testing</li>
                  <li>Automation Testing with Selenium</li>
                  <li>Test Case Design</li>
                  <li>Bug Tracking</li>
                  <li>CI/CD Pipeline for Testing</li>
                  <li>Performance Testing</li>
                </p>
                <div className="twoButtons">
                  <p>
                    <Link
                      to="/"
                      className="btn btn-secondary mr-2"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowModal(true);
                      }}
                    >
                      Enroll Now
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/Testing"
                      className="btn btn-primary"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      style={{ backgroundColor: "#001a33", border: "none" }}
                    >
                      More Details
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-sm-12 col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="900"
            >
              <div className="feature text-left">
                <div className="twoButtons">
                  <i className="uil">
                    <img
                      alt=""
                      src="images/icons8-sap-480.png"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </i>
                  <h3 style={{ marginLeft: "10px", marginTop: "5px" }}>
                    SAP FICO with S/4 HANA
                  </h3>
                </div>
                <p>
                  <li>Introduction to SAP FICO</li>
                  <li>General Ledger</li>
                  <li>Accounts Payable/Receivable</li>
                  <li>Asset Accounting</li>
                  <li>Bank Accounting</li>
                  <li>Integration with SAP S/4 HANA</li>
                </p>
                <div className="twoButtons">
                  <p>
                    <Link
                      to="/"
                      className="btn btn-secondary mr-2"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowModal(true);
                      }}
                    >
                      Enroll Now
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/Sap"
                      className="btn btn-primary"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      style={{ backgroundColor: "#001a33", border: "none" }}
                    >
                      More Details
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-sm-12 col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              <div className="feature text-left">
                <div className="twoButtons">
                  <i className="uil">
                    <img
                      alt=""
                      src="images/icons8-tableau-software-500.png"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </i>
                  <h3 style={{ marginLeft: "10px", marginTop: "5px" }}>
                    Tableau
                  </h3>
                </div>
                <p>
                  <li>Data Visualization Basics</li>
                  <li>Working with Data Sources</li>
                  <li>Creating Dashboards</li>
                  <li>Advanced Tableau Features</li>
                  <li>Data Analytics</li>
                  <li>Publishing Reports</li>
                </p>
                <div className="twoButtons">
                  <p>
                    <Link
                      to="/"
                      className="btn btn-secondary mr-2"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowModal(true);
                      }}
                    >
                      Enroll Now
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/Tableau"
                      className="btn btn-primary"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      style={{ backgroundColor: "#001a33", border: "none" }}
                    >
                      More Details
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-sm-12 col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="1100"
            >
              <div className="feature text-left">
                <div className="twoButtons">
                  <i className="uil">
                    <img
                      alt=""
                      src="images/sql-server (1).png"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </i>
                  <h3 style={{ marginLeft: "10px", marginTop: "5px" }}>SQL</h3>
                </div>
                <p>
                  <li>Basic SQL Queries</li>
                  <li>Joins and Subqueries</li>
                  <li>Database Design</li>
                  <li>Normalization</li>
                  <li>Stored Procedures</li>
                  <li>Database Optimization</li>
                </p>
                <div className="twoButtons">
                  <p>
                    <Link
                      to="/"
                      className="btn btn-secondary mr-2"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowModal(true);
                      }}
                    >
                      Enroll Now
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/Sql"
                      className="btn btn-primary"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      style={{ backgroundColor: "#001a33", border: "none" }}
                    >
                      More Details
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setShowModal(false)}>
              &times;
            </button>
            <h2>Enroll in a Course</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="course">Course Name:</label>
                <input
                  type="text"
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                style={{ marginTop: "10px" }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
            {submissionStatus && <p>{submissionStatus}</p>}
          </div>
        </div>
      )}
      <style>
        {`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
          }
          .modal-content {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            width: 400px;
            max-width: 90%;
            position: relative;
          }
          .close-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            background: none;
            color:black;
            border: none;
            font-size: 24px;
            cursor: pointer;
          }
          // .close-btn:hover {
          //   color: green;
          // }
          form div {
            margin-bottom: 15px;
          }
          input {
            width: 100%;
            padding: 8px;
            margin-top: 5px;
            border: 1px solid #ccc;
            border-radius: 4px;
          }
          button {
            padding: 10px 15px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
          button:hover {
            background-color: #0056b3;
          }
        `}
      </style>
    </div>
  );
};

export default BestCoursesSection;
