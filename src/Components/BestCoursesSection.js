// import axios from "axios";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet-async"; // Import Helmet

// const BestCoursesSection = () => {
//   const [showWhoShouldEnroll, setShowWhoShouldEnroll] = useState(false);
//   const [showWhyChooseUs, setShowWhyChooseUs] = useState(false);

//   const [showModal, setShowModal] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     course: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submissionStatus, setSubmissionStatus] = useState("");
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent the default form submission behavior
//     setIsSubmitting(true);
//     setSubmissionStatus("");

//     try {
//       // Send the form data as a form-encoded POST request
//       const response = await axios.post(
//         "https://shyamtechnologies.in/sendEmail.php", // Replace with the actual path to your PHP file
//         formData,
//         {
//           headers: {
//             "Content-Type": "application/json", // Use JSON format for the PHP backend
//           },
//         }
//       );

//       // Check the PHP script's response
//       if (response.data.status === "success") {
//         setSubmissionStatus("Form submitted successfully!");
//         setShowModal(false); // Close modal on success
//       } else {
//         setSubmissionStatus(response.data.message || "Error submitting form.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setSubmissionStatus("Network error. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };
//   return (
//     <div>
//       <div className="untree_co-section" id="bestCourses">
//         <Helmet>
//           <title>
//             Enhance your skills with our expertly curated courses in technology,
//             business, design, and more. Learn from industry professionals and
//             gain real-world experience.
//           </title>
//           <meta
//             name="description"
//             content="Discover insights in AI, Machine Learning, and Data Science with our interactive carousel."
//           />
//           <meta
//             name="keywords"
//             content="AI, Machine Learning, Data Science, Predictive Analytics, Artificial Intelligence"
//           />
//         </Helmet>
//         <div className="container">
//           <div className="mb-5 row justify-content-center">
//             <div
//               className="text-center col-lg-7"
//               data-aos="fade-up"
//               data-aos-delay="0"
//             >
//               <h2 className="mb-4 text-center line-bottom">
//                 Explore Our Top-Rated Online Courses
//               </h2>
//               <p>
//                 Enhance your skills with our expertly curated courses in
//                 technology, business, design, and more. Learn from industry
//                 professionals and gain real-world experience.
//               </p>
//             </div>
//           </div>
//           <div className="row">
//             <div
//               className="col-sm-12 col-md-6 col-lg-4"
//               data-aos="fade-up"
//               data-aos-delay="100"
//             >
//               <div className="text-left feature">
//                 <div className="twoButtons">
//                   <i className="uil">
//                     <img
//                       alt="Python Programming Course"
//                       src="images/python.png"
//                       style={{ width: "30px", height: "30px" }}
//                     />
//                   </i>
//                   <h3 style={{ marginLeft: "10px", marginTop: "5px" }}>
//                     Python Programming Course
//                   </h3>
//                 </div>
//                 {/* <p className="course-description"> */}
//                 {/* Learn **Python from scratch** and master the most
//                   **in-demand** programming language for **web development, data
//                   science, AI, and automation**. This course is designed for
//                   **beginners and professionals** who want to **enhance their
//                   coding skills** and work on **real-world projects**.
//                 </p> */}
//                 <ul>
//                   <li>
//                     <strong>Introduction to Python:</strong> Basics,
//                     Installation, First Program
//                   </li>
//                   <li>
//                     <strong>Data Types and Variables:</strong> Strings, Lists,
//                     Tuples, Dictionaries
//                   </li>
//                   <li>
//                     <strong>Functions and Loops:</strong> Defining Functions,
//                     For & While Loops
//                   </li>
//                   <li>
//                     <strong>Object-Oriented Programming (OOP):</strong> Classes,
//                     Objects, Inheritance
//                   </li>
//                   <li>
//                     <strong>Python Modules:</strong> Built-in & Custom Modules,
//                     File Handling
//                   </li>
//                   <li>
//                     <strong>Error and Exception Handling:</strong> Try, Except,
//                     Debugging Best Practices
//                   </li>
//                 </ul>

//                 {/* 🎯 Who Should Enroll Section */}
//                 <div className="enrollment-section">
//                   <h4
//                     onClick={() => setShowWhoShouldEnroll(!showWhoShouldEnroll)}
//                     style={{ cursor: "pointer", color: "#007bff" }}
//                   >
//                     🎯 Who Should Enroll? {showWhoShouldEnroll ? "▲" : "▼"}
//                   </h4>
//                   {showWhoShouldEnroll && (
//                     <ul>
//                       <li>✅ Beginners with No Prior Programming Experience</li>
//                       <li>
//                         ✅ Students & Professionals Looking to Upskill in Python
//                       </li>
//                       <li>
//                         ✅ Data Scientists & AI Enthusiasts Exploring Python for
//                         ML & AI
//                       </li>
//                       <li>
//                         ✅ Web Developers Who Want to Build Full-Stack
//                         Applications
//                       </li>
//                       <li>✅ Anyone Interested in Automation & Scripting</li>
//                     </ul>
//                   )}
//                 </div>

//                 {/* 🚀 Why Choose Us Section */}
//                 <div className="why-choose-us">
//                   <h4
//                     onClick={() => setShowWhyChooseUs(!showWhyChooseUs)}
//                     style={{ cursor: "pointer", color: "#007bff" }}
//                   >
//                     🚀 Why Choose Our Python Training?{" "}
//                     {showWhyChooseUs ? "▲" : "▼"}
//                   </h4>
//                   {showWhyChooseUs && (
//                     <ul>
//                       <li>
//                         ✅ Live Project-Based Learning – Work on Real-World
//                         Python Applications
//                       </li>
//                       <li>
//                         ✅ 100% Practical Training – Hands-on Coding Exercises
//                       </li>
//                       <li>
//                         ✅ Job-Oriented Curriculum – Covers Python for Web, Data
//                         Science, & Automation
//                       </li>
//                       <li>✅ Industry-Recognized Certification</li>
//                       <li>✅ Career Guidance & Interview Prep</li>
//                     </ul>
//                   )}
//                 </div>

//                 {/* 📌 Call to Action */}
//                 <div className="call-to-action">
//                   <h4>📌 Start Your Python Journey Today!</h4>
//                   <p>
//                     📅 <strong>Next Batch Starts Soon</strong> | 💻 Online &
//                     Offline Training Available
//                   </p>
//                   <p>
//                     📞 <strong>Contact Us Now for Free Demo:</strong> +91
//                     9346593339
//                   </p>
//                 </div>

//                 <div className="twoButtons">
//                   <p>
//                     <Link
//                       to="/"
//                       className="mr-2 btn btn-secondary"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         setShowModal(true);
//                       }}
//                     >
//                       Enroll Now
//                     </Link>
//                   </p>
//                   <p>
//                     <Link
//                       to="/python-training"
//                       className="btn btn-primary"
//                       style={{ backgroundColor: "#001a33", border: "none" }}
//                     >
//                       More Details
//                     </Link>
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Data Science with AI & ML */}
//             <div
//               className="col-sm-12 col-md-6 col-lg-4"
//               data-aos="fade-up"
//               data-aos-delay="200"
//             >
//               <div className="text-left feature">
//                 <div className="twoButtons">
//                   <i className="uil">
//                     <img
//                       alt="Data Science with AI and Machine Learning Course"
//                       src="images/data-science.png"
//                       style={{ width: "30px", height: "30px" }}
//                     />
//                   </i>
//                   <h3 style={{ marginLeft: "10px", marginTop: "5px" }}>
//                     Data Science with AI & ML
//                   </h3>
//                 </div>
//                 <ul>
//                   <li>Introduction to Data Science</li>
//                   <li>Business Statistics</li>
//                   <li>Data Preprocessing Techniques</li>
//                   <li>Introduction to Machine Learning</li>
//                   <li>ML - Statistical Modeling</li>
//                   <li>Forecasting & Predictive Analysis</li>
//                 </ul>
//                 <div className="twoButtons">
//                   <p>
//                     <Link
//                       to="/"
//                       className="mr-2 btn btn-secondary"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         setShowModal(true);
//                       }}
//                     >
//                       Enroll Now
//                     </Link>
//                   </p>
//                   <p>
//                     <Link
//                       to="/DATASCIENCE-AI-ML-TRAINING-IN-HYDERABAD"
//                       className="btn btn-primary"
//                       style={{ backgroundColor: "#001a33", border: "none" }}
//                     >
//                       More Details
//                     </Link>
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Data Analytics Course */}
//             <div
//               className="col-sm-12 col-md-6 col-lg-4"
//               data-aos="fade-up"
//               data-aos-delay="300"
//             >
//               <div className="text-left feature">
//                 <div className="twoButtons">
//                   <i className="uil">
//                     <img
//                       alt="Data Analytics Course"
//                       src="images/data analytics.png"
//                       style={{ width: "30px", height: "30px" }}
//                     />
//                   </i>
//                   <h3 style={{ marginLeft: "10px", marginTop: "5px" }}>
//                     Data Analytics
//                   </h3>
//                 </div>
//                 <ul>
//                   <li>Introduction to Data Analytics</li>
//                   <li>Data Analysis Using Excel</li>
//                   <li>Python for Data Analysis</li>
//                   <li>SQL for Data Science</li>
//                   <li>Power BI & Data Visualization</li>
//                   <li>Tableau for Business Intelligence</li>
//                 </ul>
//                 <div className="twoButtons">
//                   <p>
//                     <Link
//                       to="/"
//                       className="mr-2 btn btn-secondary"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         setShowModal(true);
//                       }}
//                     >
//                       Enroll Now
//                     </Link>
//                   </p>
//                   <p>
//                     <Link
//                       to="/DataAnalytics"
//                       className="btn btn-primary"
//                       style={{ backgroundColor: "#001a33", border: "none" }}
//                     >
//                       More Details
//                     </Link>
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="col-sm-6 col-md-6 col-lg-4" data-aos="fade-up">
//               <div className="text-left feature">
//                 <div className="twoButtons">
//                   <i className="uil">
//                     <img
//                       src="images/INFA-c4767c1c.png"
//                       alt="Informatica PowerCenter Course"
//                       style={{ width: "30px", height: "30px" }}
//                     />
//                   </i>
//                   <h3 className="ml-2 course-title">
//                     Informatica PowerCenter Training
//                   </h3>
//                 </div>
//                 <ul className="course-list">
//                   <li>Introduction to Data Warehousing</li>
//                   <li>Informatica PowerCenter Basics</li>
//                   <li>Designer & Workflow Manager</li>
//                   <li>Advanced Transformations</li>
//                   <li>Sessions & Performance Tuning</li>
//                 </ul>
//                 <div className="twoButtons">
//                   <Link
//                     to="/"
//                     className="mr-2 btn btn-secondary"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       setShowModal(true);
//                     }}
//                   >
//                     Enroll Now
//                   </Link>
//                   <Link
//                     to="/Informatica"
//                     className="btn btn-primary"
//                     data-aos="fade-up"
//                     style={{ backgroundColor: "#001a33", border: "none" }}
//                   >
//                     More Details
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             <div
//               className="col-sm-6 col-md-6 col-lg-4"
//               data-aos="fade-up"
//               data-aos-delay="200"
//             >
//               <div className="text-left feature">
//                 <div className="twoButtons">
//                   <i className="uil">
//                     <img
//                       src="images/icons8-power-bi-2021-500.png"
//                       alt="Power BI Course"
//                       style={{ width: "30px", height: "30px" }}
//                     />
//                   </i>
//                   <h3 className="ml-2 course-title">
//                     Power BI Training & Certification
//                   </h3>
//                 </div>
//                 <ul className="course-list">
//                   <li>Introduction to Power BI</li>
//                   <li>Data Extraction from Multiple Sources</li>
//                   <li>Data Cleaning & Transformation</li>
//                   <li>Building Data Models</li>
//                   <li>Interactive Dashboards & Reports</li>
//                 </ul>
//                 <div className="twoButtons">
//                   <Link
//                     to="/"
//                     className="mr-2 btn btn-secondary"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       setShowModal(true);
//                     }}
//                   >
//                     Enroll Now
//                   </Link>
//                   <Link
//                     to="/PowerBi"
//                     className="btn btn-primary"
//                     data-aos="fade-up"
//                     style={{ backgroundColor: "#001a33", border: "none" }}
//                   >
//                     More Details
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             <div
//               className="col-sm-6 col-md-6 col-lg-4"
//               data-aos="fade-up"
//               data-aos-delay="300"
//             >
//               <div className="text-left feature">
//                 <div className="twoButtons">
//                   <i className="uil">
//                     <img
//                       src="images/icons8-amazon-web-services-480.png"
//                       alt="AWS DevOps Course"
//                       style={{ width: "30px", height: "30px" }}
//                     />
//                   </i>
//                   <h3 className="ml-2 course-title">
//                     AWS DevOps Training & Certification
//                   </h3>
//                 </div>
//                 <ul className="course-list">
//                   <li>Introduction to AWS & Cloud Computing</li>
//                   <li>Continuous Integration & Deployment</li>
//                   <li>Infrastructure as Code (IaC)</li>
//                   <li>Security Best Practices</li>
//                   <li>Monitoring & Logging</li>
//                 </ul>
//                 <div className="twoButtons">
//                   <Link
//                     to="/"
//                     className="mr-2 btn btn-secondary"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       setShowModal(true);
//                     }}
//                   >
//                     Enroll Now
//                   </Link>
//                   <Link
//                     to="/Aws"
//                     className="btn btn-primary"
//                     data-aos="fade-up"
//                     style={{ backgroundColor: "#001a33", border: "none" }}
//                   >
//                     More Details
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             {/* new courses */}
//             <div
//               className="col-sm-12 col-md-6 col-lg-4"
//               data-aos="fade-up"
//               data-aos-delay="400"
//             >
//               <div className="text-left feature">
//                 <div className="twoButtons">
//                   <i className="uil">
//                     <img
//                       alt="Azure DevOps Logo"
//                       src="images/icons8-azure-480.png"
//                       width="30"
//                       height="30"
//                     />
//                   </i>
//                   <h3 style={{ marginLeft: "10px", marginTop: "5px" }}>
//                     Azure DevOps Certification Training
//                   </h3>
//                 </div>
//                 <ul>
//                   <li>DevOps Fundamentals</li>
//                   <li>Azure Pipelines</li>
//                   <li>Infrastructure as Code (IaC)</li>
//                   <li>Deployment Strategies</li>
//                   <li>CI/CD Implementation</li>
//                   <li>Monitoring & Security</li>
//                 </ul>
//                 <div className="twoButtons">
//                   <p>
//                     <Link
//                       to="/"
//                       className="mr-2 btn btn-secondary"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         setShowModal(true);
//                       }}
//                     >
//                       Enroll Now
//                     </Link>
//                   </p>
//                   <p>
//                     <Link
//                       to="/Azure"
//                       className="btn btn-primary"
//                       data-aos="fade-up"
//                       data-aos-delay="200"
//                       style={{ backgroundColor: "#001a33", border: "none" }}
//                     >
//                       More Details
//                     </Link>
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div
//               className="col-sm-12 col-md-6 col-lg-4"
//               data-aos="fade-up"
//               data-aos-delay="500"
//             >
//               <div className="text-left feature">
//                 <div className="twoButtons">
//                   <i className="uil">
//                     <img
//                       alt="Pega Course Logo"
//                       src="images/Pega_Logo.png"
//                       width="50"
//                       height="30"
//                     />
//                   </i>
//                   <h3 style={{ marginLeft: "5px", marginTop: "5px" }}>
//                     Pega Developer Training
//                   </h3>
//                 </div>
//                 <ul>
//                   <li>Introduction to Pega</li>
//                   <li>Case Management</li>
//                   <li>Data Modeling</li>
//                   <li>UI Design Best Practices</li>
//                   <li>API Integration</li>
//                   <li>Application Development</li>
//                 </ul>
//                 <div className="twoButtons">
//                   <p>
//                     <Link
//                       to="/"
//                       className="mr-2 btn btn-secondary"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         setShowModal(true);
//                       }}
//                     >
//                       Enroll Now
//                     </Link>
//                   </p>
//                   <p>
//                     <Link
//                       to="/Pega"
//                       className="btn btn-primary"
//                       data-aos="fade-up"
//                       data-aos-delay="200"
//                       style={{ backgroundColor: "#001a33", border: "none" }}
//                     >
//                       More Details
//                     </Link>
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div
//               className="col-sm-12 col-md-6 col-lg-4"
//               data-aos="fade-up"
//               data-aos-delay="600"
//             >
//               <div className="text-left feature">
//                 <div className="twoButtons">
//                   <i className="uil">
//                     <img
//                       alt="Microsoft Full Stack Logo"
//                       src="images/icons8-microsoft-500.png"
//                       width="30"
//                       height="30"
//                     />
//                   </i>
//                   <h3 style={{ marginLeft: "10px", marginTop: "5px" }}>
//                     Microsoft Full Stack Developer Course
//                   </h3>
//                 </div>
//                 <ul>
//                   <li>
//                     Front-end Development (HTML, CSS, JavaScript, React,
//                     Angular)
//                   </li>
//                   <li>ASP.NET Core Framework</li>
//                   <li>Database Management with SQL Server</li>
//                   <li>Cloud Deployment with Microsoft Azure</li>
//                   <li>Building Scalable Microservices</li>
//                 </ul>
//                 <div className="twoButtons">
//                   <p>
//                     <Link
//                       to="/"
//                       className="mr-2 btn btn-secondary"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         setShowModal(true);
//                       }}
//                     >
//                       Enroll Now
//                     </Link>
//                   </p>
//                   <p>
//                     <Link
//                       to="/Microsoft"
//                       className="btn btn-primary"
//                       data-aos="fade-up"
//                       data-aos-delay="200"
//                       style={{ backgroundColor: "#001a33", border: "none" }}
//                     >
//                       More Details
//                     </Link>
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div
//               className="col-sm-12 col-md-6 col-lg-4"
//               data-aos="fade-up"
//               data-aos-delay="700"
//             >
//               <div className="text-left feature">
//                 <div className="twoButtons">
//                   <i className="uil">
//                     <img
//                       alt="Java Full Stack Course"
//                       src="images/icons8-java-500.png"
//                       width="30"
//                       height="30"
//                     />
//                   </i>
//                   <h3 style={{ marginLeft: "10px", marginTop: "5px" }}>
//                     Java Full Stack Developer Course
//                   </h3>
//                 </div>
//                 <ul>
//                   <li>Core Java & Advanced Java</li>
//                   <li>Spring Boot & Microservices</li>
//                   <li>Hibernate ORM Framework</li>
//                   <li>REST API Development</li>
//                   <li>Frontend with Angular & React</li>
//                   <li>Database Management & SQL</li>
//                 </ul>
//                 <div className="twoButtons">
//                   <p>
//                     <Link
//                       to="/"
//                       className="mr-2 btn btn-secondary"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         setShowModal(true);
//                       }}
//                     >
//                       Enroll Now
//                     </Link>
//                   </p>
//                   <p>
//                     <Link
//                       to="/Java"
//                       className="btn btn-primary"
//                       data-aos="fade-up"
//                       data-aos-delay="200"
//                       style={{ backgroundColor: "#001a33", border: "none" }}
//                     >
//                       More Details
//                     </Link>
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div
//               className="col-sm-12 col-md-6 col-lg-4"
//               data-aos="fade-up"
//               data-aos-delay="800"
//             >
//               <div className="text-left feature">
//                 <div className="twoButtons">
//                   <i className="uil">
//                     <img
//                       alt="Testing Automation Course"
//                       src="images/testing automation.png"
//                       width="30"
//                       height="30"
//                     />
//                   </i>
//                   <h3 style={{ marginLeft: "10px", marginTop: "5px" }}>
//                     Software Testing: Manual & Automation
//                   </h3>
//                 </div>
//                 <ul>
//                   <li>Manual Testing Fundamentals</li>
//                   <li>Automation Testing with Selenium</li>
//                   <li>Test Case Design & Execution</li>
//                   <li>Defect Tracking & Bug Reporting</li>
//                   <li>CI/CD Pipeline for Automated Testing</li>
//                   <li>Performance & Load Testing</li>
//                 </ul>
//                 <div className="twoButtons">
//                   <p>
//                     <Link
//                       to="/"
//                       className="mr-2 btn btn-secondary"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         setShowModal(true);
//                       }}
//                     >
//                       Enroll Now
//                     </Link>
//                   </p>
//                   <p>
//                     <Link
//                       to="/Testing"
//                       className="btn btn-primary"
//                       data-aos="fade-up"
//                       data-aos-delay="200"
//                       style={{ backgroundColor: "#001a33", border: "none" }}
//                     >
//                       More Details
//                     </Link>
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div
//               className="col-sm-12 col-md-6 col-lg-4"
//               data-aos="fade-up"
//               data-aos-delay="900"
//             >
//               <div className="text-left feature">
//                 <div className="twoButtons">
//                   <i className="uil">
//                     <img
//                       alt="SAP FICO Course"
//                       src="images/icons8-sap-480.png"
//                       width="30"
//                       height="30"
//                     />
//                   </i>
//                   <h3 style={{ marginLeft: "10px", marginTop: "5px" }}>
//                     SAP FICO with S/4HANA Certification
//                   </h3>
//                 </div>
//                 <ul>
//                   <li>Introduction to SAP FICO & ERP</li>
//                   <li>General Ledger & Financial Accounting</li>
//                   <li>Accounts Payable & Receivable</li>
//                   <li>Asset Accounting & Bank Accounting</li>
//                   <li>Integration with SAP S/4HANA</li>
//                   <li>Real-world Financial Reporting & Analysis</li>
//                 </ul>
//                 <div className="twoButtons">
//                   <p>
//                     <Link
//                       to="/"
//                       className="mr-2 btn btn-secondary"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         setShowModal(true);
//                       }}
//                     >
//                       Enroll Now
//                     </Link>
//                   </p>
//                   <p>
//                     <Link
//                       to="/Sap"
//                       className="btn btn-primary"
//                       data-aos="fade-up"
//                       data-aos-delay="200"
//                       style={{ backgroundColor: "#001a33", border: "none" }}
//                     >
//                       More Details
//                     </Link>
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div
//               className="col-sm-12 col-md-6 col-lg-4"
//               data-aos="fade-up"
//               data-aos-delay="1000"
//             >
//               <div className="text-left feature">
//                 <div className="twoButtons">
//                   <i className="uil">
//                     <img
//                       alt="Tableau Data Visualization Icon"
//                       src="images/icons8-tableau-software-500.png"
//                       style={{ width: "30px", height: "30px" }}
//                     />
//                   </i>
//                   <h3 style={{ marginLeft: "10px", marginTop: "5px" }}>
//                     Tableau Course
//                   </h3>
//                 </div>
//                 <ul>
//                   <li>Data Visualization Basics</li>
//                   <li>Working with Data Sources</li>
//                   <li>Creating Dashboards</li>
//                   <li>Advanced Tableau Features</li>
//                   <li>Data Analytics</li>
//                   <li>Publishing Reports</li>
//                 </ul>
//                 <div className="twoButtons">
//                   <p>
//                     <Link
//                       to="/"
//                       className="mr-2 btn btn-secondary"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         setShowModal(true);
//                       }}
//                     >
//                       Enroll Now
//                     </Link>
//                   </p>
//                   <p>
//                     <Link
//                       to="/Tableau"
//                       className="btn btn-primary"
//                       data-aos="fade-up"
//                       data-aos-delay="200"
//                       style={{ backgroundColor: "#001a33", border: "none" }}
//                     >
//                       More Details
//                     </Link>
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div
//               className="col-sm-12 col-md-6 col-lg-4"
//               data-aos="fade-up"
//               data-aos-delay="1100"
//             >
//               <div className="text-left feature">
//                 <div className="twoButtons">
//                   <i className="uil">
//                     <img
//                       alt="SQL Server Icon"
//                       src="images/sql-server (1).png"
//                       style={{ width: "30px", height: "30px" }}
//                     />
//                   </i>
//                   <h3 style={{ marginLeft: "10px", marginTop: "5px" }}>
//                     SQL Course
//                   </h3>
//                 </div>
//                 <ul>
//                   <li>Basic SQL Queries</li>
//                   <li>Joins and Subqueries</li>
//                   <li>Database Design</li>
//                   <li>Normalization</li>
//                   <li>Stored Procedures</li>
//                   <li>Database Optimization</li>
//                 </ul>
//                 <div className="twoButtons">
//                   <p>
//                     <Link
//                       to="/"
//                       className="mr-2 btn btn-secondary"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         setShowModal(true);
//                       }}
//                     >
//                       Enroll Now
//                     </Link>
//                   </p>
//                   <p>
//                     <Link
//                       to="/Sql"
//                       className="btn btn-primary"
//                       data-aos="fade-up"
//                       data-aos-delay="200"
//                       style={{ backgroundColor: "#001a33", border: "none" }}
//                     >
//                       More Details
//                     </Link>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {showModal && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             <button className="close-btn" onClick={() => setShowModal(false)}>
//               &times;
//             </button>
//             <h2>Enroll in a Course</h2>
//             <form onSubmit={handleSubmit}>
//               <div>
//                 <label htmlFor="name">Name:</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email">Email:</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="phone">Phone Number:</label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="course">Course Name:</label>
//                 <input
//                   type="text"
//                   id="course"
//                   name="course"
//                   value={formData.course}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <button
//                 type="submit"
//                 style={{ marginTop: "10px" }}
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? "Submitting..." : "Submit"}
//               </button>
//             </form>
//             {submissionStatus && <p>{submissionStatus}</p>}
//           </div>
//         </div>
//       )}
//       <style>
//         {`
//           .modal-overlay {
//             position: fixed;
//             top: 0;
//             left: 0;
//             width: 100%;
//             height: 100%;
//             background-color: rgba(0, 0, 0, 0.5);
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             z-index: 10000;
//           }
//           .modal-content {
//             background-color: white;
//             padding: 20px;
//             border-radius: 8px;
//             width: 400px;
//             max-width: 90%;
//             position: relative;
//           }
//           .close-btn {
//             position: absolute;
//             top: 10px;
//             right: 10px;
//             background: none;
//             color:black;
//             border: none;
//             font-size: 24px;
//             cursor: pointer;
//           }
//           // .close-btn:hover {
//           //   color: green;
//           // }
//           form div {
//             margin-bottom: 15px;
//           }
//           input {
//             width: 100%;
//             padding: 8px;
//             margin-top: 5px;
//             border: 1px solid #ccc;
//             border-radius: 4px;
//           }
//           button {
//             padding: 10px 15px;
//             background-color: #007bff;
//             color: white;
//             border: none;
//             border-radius: 4px;
//             cursor: pointer;
//           }
//           button:hover {
//             background-color: #0056b3;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default BestCoursesSection;
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // Import Helmet

const BestCoursesSection = () => {
  const [showWhoShouldEnroll, setShowWhoShouldEnroll] = useState(false);
  const [showWhyChooseUs, setShowWhyChooseUs] = useState(false);

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
        <Helmet>
          <title>
            Enhance your skills with our expertly curated courses in technology,
            business, design, and more. Learn from industry professionals and
            gain real-world experience.
          </title>
          <meta
            name="description"
            content="Discover insights in AI, Machine Learning, and Data Science with our interactive carousel."
          />
          <meta
            name="keywords"
            content="AI, Machine Learning, Data Science, Predictive Analytics, Artificial Intelligence"
          />
        </Helmet>
        <div className="container">
          <div className="mb-5 row justify-content-center">
            <div
              className="text-center col-lg-7"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <h2 className="mb-4 text-center line-bottom">
                Explore Our Top-Rated Online Courses
              </h2>
              <p>
                Enhance your skills with our expertly curated courses in
                technology, business, design, and more. Learn from industry
                professionals and gain real-world experience.
              </p>
            </div>
          </div>
          <div className="row">
            <div
              className="col-sm-12 col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="text-left feature">
                <div className="twoButtons">
                  <i className="uil">
                    <img
                      alt="Python Programming Course"
                      src="images/python.png"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </i>
                  <h3 style={{ marginLeft: "10px", marginTop: "5px" }}>
                    Python Programming Course
                  </h3>
                </div>
                {/* <p className="course-description"> */}
                {/* Learn **Python from scratch** and master the most
                  **in-demand** programming language for **web development, data
                  science, AI, and automation**. This course is designed for
                  **beginners and professionals** who want to **enhance their
                  coding skills** and work on **real-world projects**.
                </p> */}
                <ul>
                  <li>
                    <strong>Introduction to Python:</strong> Basics,
                    Installation, First Program
                  </li>
                  <li>
                    <strong>Data Types and Variables:</strong> Strings, Lists,
                    Tuples, Dictionaries
                  </li>
                  <li>
                    <strong>Functions and Loops:</strong> Defining Functions,
                    For & While Loops
                  </li>
                  <li>
                    <strong>Object-Oriented Programming (OOP):</strong> Classes,
                    Objects, Inheritance
                  </li>
                  <li>
                    <strong>Python Modules:</strong> Built-in & Custom Modules,
                    File Handling
                  </li>
                  <li>
                    <strong>Error and Exception Handling:</strong> Try, Except,
                    Debugging Best Practices
                  </li>
                </ul>

                {/* 🎯 Who Should Enroll Section */}
                <div className="enrollment-section">
                  <h4
                    onClick={() => setShowWhoShouldEnroll(!showWhoShouldEnroll)}
                    style={{ cursor: "pointer", color: "#007bff" }}
                  >
                    🎯 Who Should Enroll? {showWhoShouldEnroll ? "▲" : "▼"}
                  </h4>
                  {showWhoShouldEnroll && (
                    <ul>
                      <li>✅ Beginners with No Prior Programming Experience</li>
                      <li>
                        ✅ Students & Professionals Looking to Upskill in Python
                      </li>
                      <li>
                        ✅ Data Scientists & AI Enthusiasts Exploring Python for
                        ML & AI
                      </li>
                      <li>
                        ✅ Web Developers Who Want to Build Full-Stack
                        Applications
                      </li>
                      <li>✅ Anyone Interested in Automation & Scripting</li>
                    </ul>
                  )}
                </div>

                {/* 🚀 Why Choose Us Section */}
                <div className="why-choose-us">
                  <h4
                    onClick={() => setShowWhyChooseUs(!showWhyChooseUs)}
                    style={{ cursor: "pointer", color: "#007bff" }}
                  >
                    🚀 Why Choose Our Python Training?{" "}
                    {showWhyChooseUs ? "▲" : "▼"}
                  </h4>
                  {showWhyChooseUs && (
                    <ul>
                      <li>
                        ✅ Live Project-Based Learning – Work on Real-World
                        Python Applications
                      </li>
                      <li>
                        ✅ 100% Practical Training – Hands-on Coding Exercises
                      </li>
                      <li>
                        ✅ Job-Oriented Curriculum – Covers Python for Web, Data
                        Science, & Automation
                      </li>
                      <li>✅ Industry-Recognized Certification</li>
                      <li>✅ Career Guidance & Interview Prep</li>
                    </ul>
                  )}
                </div>

                {/* 📌 Call to Action */}
                <div className="call-to-action">
                  <h4>📌 Start Your Python Journey Today!</h4>
                  <p>
                    📅 <strong>Next Batch Starts Soon</strong> | 💻 Online &
                    Offline Training Available
                  </p>
                  <p>
                    📞 <strong>Contact Us Now for Free Demo:</strong> +91
                    9346593339
                  </p>
                </div>

                <div className="twoButtons">
                  <p>
                    <Link
                      to="/"
                      className="mr-2 btn btn-secondary"
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
                      to="/python-training-in-hyderabad"
                      className="btn btn-primary"
                      style={{ backgroundColor: "#001a33", border: "none" }}
                    >
                      More Details
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            {/* Data Science with AI & ML */}
            <div
              className="col-sm-12 col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="text-left feature">
                <div className="twoButtons">
                  <i className="uil">
                    <img
                      alt="Data Science with AI and Machine Learning Course"
                      src="images/data-science.png"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </i>
                  <h3 style={{ marginLeft: "10px", marginTop: "5px" }}>
                    Data Science with AI & ML
                  </h3>
                </div>
                <ul>
                  <li>Introduction to Data Science</li>
                  <li>Business Statistics</li>
                  <li>Data Preprocessing Techniques</li>
                  <li>Introduction to Machine Learning</li>
                  <li>ML - Statistical Modeling</li>
                  <li>Forecasting & Predictive Analysis</li>
                </ul>
                <div className="twoButtons">
                  <p>
                    <Link
                      to="/"
                      className="mr-2 btn btn-secondary"
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
                      to="/DATASCIENCE-AI-ML-TRAINING-IN-HYDERABAD"
                      className="btn btn-primary"
                      style={{ backgroundColor: "#001a33", border: "none" }}
                    >
                      More Details
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            {/* Data Analytics Course */}
            <div
              className="col-sm-12 col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="text-left feature">
                <div className="twoButtons">
                  <i className="uil">
                    <img
                      alt="Data Analytics Course"
                      src="images/data analytics.png"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </i>
                  <h3 style={{ marginLeft: "10px", marginTop: "5px" }}>
                    Data Analytics
                  </h3>
                </div>
                <ul>
                  <li>Introduction to Data Analytics</li>
                  <li>Data Analysis Using Excel</li>
                  <li>Python for Data Analysis</li>
                  <li>SQL for Data Science</li>
                  <li>Power BI & Data Visualization</li>
                  <li>Tableau for Business Intelligence</li>
                </ul>
                <div className="twoButtons">
                  <p>
                    <Link
                      to="/"
                      className="mr-2 btn btn-secondary"
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
                      to="/DataAnalytics-Training-in-hyderabad"
                      className="btn btn-primary"
                      style={{ backgroundColor: "#001a33", border: "none" }}
                    >
                      More Details
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-4" data-aos="fade-up">
              <div className="text-left feature">
                <div className="twoButtons">
                  <i className="uil">
                    <img
                      src="images/INFA-c4767c1c.png"
                      alt="Informatica PowerCenter Course"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </i>
                  <h3 className="ml-2 course-title">
                    Informatica PowerCenter Training
                  </h3>
                </div>
                <ul className="course-list">
                  <li>Introduction to Data Warehousing</li>
                  <li>Informatica PowerCenter Basics</li>
                  <li>Designer & Workflow Manager</li>
                  <li>Advanced Transformations</li>
                  <li>Sessions & Performance Tuning</li>
                </ul>
                <div className="twoButtons">
                  <Link
                    to="/"
                    className="mr-2 btn btn-secondary"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowModal(true);
                    }}
                  >
                    Enroll Now
                  </Link>
                  <Link
                    to="/Informatica"
                    className="btn btn-primary"
                    data-aos="fade-up"
                    style={{ backgroundColor: "#001a33", border: "none" }}
                  >
                    More Details
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-sm-6 col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="text-left feature">
                <div className="twoButtons">
                  <i className="uil">
                    <img
                      src="images/icons8-power-bi-2021-500.png"
                      alt="Power BI Course"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </i>
                  <h3 className="ml-2 course-title">
                    Power BI Training & Certification
                  </h3>
                </div>
                <ul className="course-list">
                  <li>Introduction to Power BI</li>
                  <li>Data Extraction from Multiple Sources</li>
                  <li>Data Cleaning & Transformation</li>
                  <li>Building Data Models</li>
                  <li>Interactive Dashboards & Reports</li>
                </ul>
                <div className="twoButtons">
                  <Link
                    to="/"
                    className="mr-2 btn btn-secondary"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowModal(true);
                    }}
                  >
                    Enroll Now
                  </Link>
                  <Link
                    to="/PowerBi"
                    className="btn btn-primary"
                    data-aos="fade-up"
                    style={{ backgroundColor: "#001a33", border: "none" }}
                  >
                    More Details
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-sm-6 col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="text-left feature">
                <div className="twoButtons">
                  <i className="uil">
                    <img
                      src="images/icons8-amazon-web-services-480.png"
                      alt="AWS DevOps Course"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </i>
                  <h3 className="ml-2 course-title">
                    AWS DevOps Training & Certification
                  </h3>
                </div>
                <ul className="course-list">
                  <li>Introduction to AWS & Cloud Computing</li>
                  <li>Continuous Integration & Deployment</li>
                  <li>Infrastructure as Code (IaC)</li>
                  <li>Security Best Practices</li>
                  <li>Monitoring & Logging</li>
                </ul>
                <div className="twoButtons">
                  <Link
                    to="/"
                    className="mr-2 btn btn-secondary"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowModal(true);
                    }}
                  >
                    Enroll Now
                  </Link>
                  <Link
                    to="/Aws"
                    className="btn btn-primary"
                    data-aos="fade-up"
                    style={{ backgroundColor: "#001a33", border: "none" }}
                  >
                    More Details
                  </Link>
                </div>
              </div>
            </div>

            {/* new courses */}
            <div
              className="col-sm-12 col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="text-left feature">
                <div className="twoButtons">
                  <i className="uil">
                    <img
                      alt="Azure DevOps Logo"
                      src="images/icons8-azure-480.png"
                      width="30"
                      height="30"
                    />
                  </i>
                  <h3 style={{ marginLeft: "10px", marginTop: "5px" }}>
                    Azure DevOps Certification Training
                  </h3>
                </div>
                <ul>
                  <li>DevOps Fundamentals</li>
                  <li>Azure Pipelines</li>
                  <li>Infrastructure as Code (IaC)</li>
                  <li>Deployment Strategies</li>
                  <li>CI/CD Implementation</li>
                  <li>Monitoring & Security</li>
                </ul>
                <div className="twoButtons">
                  <p>
                    <Link
                      to="/"
                      className="mr-2 btn btn-secondary"
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
              <div className="text-left feature">
                <div className="twoButtons">
                  <i className="uil">
                    <img
                      alt="Pega Course Logo"
                      src="images/Pega_Logo.png"
                      width="50"
                      height="30"
                    />
                  </i>
                  <h3 style={{ marginLeft: "5px", marginTop: "5px" }}>
                    Pega Developer Training
                  </h3>
                </div>
                <ul>
                  <li>Introduction to Pega</li>
                  <li>Case Management</li>
                  <li>Data Modeling</li>
                  <li>UI Design Best Practices</li>
                  <li>API Integration</li>
                  <li>Application Development</li>
                </ul>
                <div className="twoButtons">
                  <p>
                    <Link
                      to="/"
                      className="mr-2 btn btn-secondary"
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
              <div className="text-left feature">
                <div className="twoButtons">
                  <i className="uil">
                    <img
                      alt="Microsoft Full Stack Logo"
                      src="images/icons8-microsoft-500.png"
                      width="30"
                      height="30"
                    />
                  </i>
                  <h3 style={{ marginLeft: "10px", marginTop: "5px" }}>
                    Microsoft Full Stack Developer Course
                  </h3>
                </div>
                <ul>
                  <li>
                    Front-end Development (HTML, CSS, JavaScript, React,
                    Angular)
                  </li>
                  <li>ASP.NET Core Framework</li>
                  <li>Database Management with SQL Server</li>
                  <li>Cloud Deployment with Microsoft Azure</li>
                  <li>Building Scalable Microservices</li>
                </ul>
                <div className="twoButtons">
                  <p>
                    <Link
                      to="/"
                      className="mr-2 btn btn-secondary"
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
                      to="/Microsoft"
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
              <div className="text-left feature">
                <div className="twoButtons">
                  <i className="uil">
                    <img
                      alt="Java Full Stack Course"
                      src="images/icons8-java-500.png"
                      width="30"
                      height="30"
                    />
                  </i>
                  <h3 style={{ marginLeft: "10px", marginTop: "5px" }}>
                    Java Full Stack Developer Course
                  </h3>
                </div>
                <ul>
                  <li>Core Java & Advanced Java</li>
                  <li>Spring Boot & Microservices</li>
                  <li>Hibernate ORM Framework</li>
                  <li>REST API Development</li>
                  <li>Frontend with Angular & React</li>
                  <li>Database Management & SQL</li>
                </ul>
                <div className="twoButtons">
                  <p>
                    <Link
                      to="/"
                      className="mr-2 btn btn-secondary"
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
              <div className="text-left feature">
                <div className="twoButtons">
                  <i className="uil">
                    <img
                      alt="Testing Automation Course"
                      src="images/testing automation.png"
                      width="30"
                      height="30"
                    />
                  </i>
                  <h3 style={{ marginLeft: "10px", marginTop: "5px" }}>
                    Software Testing: Manual & Automation
                  </h3>
                </div>
                <ul>
                  <li>Manual Testing Fundamentals</li>
                  <li>Automation Testing with Selenium</li>
                  <li>Test Case Design & Execution</li>
                  <li>Defect Tracking & Bug Reporting</li>
                  <li>CI/CD Pipeline for Automated Testing</li>
                  <li>Performance & Load Testing</li>
                </ul>
                <div className="twoButtons">
                  <p>
                    <Link
                      to="/"
                      className="mr-2 btn btn-secondary"
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
              <div className="text-left feature">
                <div className="twoButtons">
                  <i className="uil">
                    <img
                      alt="SAP FICO Course"
                      src="images/icons8-sap-480.png"
                      width="30"
                      height="30"
                    />
                  </i>
                  <h3 style={{ marginLeft: "10px", marginTop: "5px" }}>
                    SAP FICO with S/4HANA Certification
                  </h3>
                </div>
                <ul>
                  <li>Introduction to SAP FICO & ERP</li>
                  <li>General Ledger & Financial Accounting</li>
                  <li>Accounts Payable & Receivable</li>
                  <li>Asset Accounting & Bank Accounting</li>
                  <li>Integration with SAP S/4HANA</li>
                  <li>Real-world Financial Reporting & Analysis</li>
                </ul>
                <div className="twoButtons">
                  <p>
                    <Link
                      to="/"
                      className="mr-2 btn btn-secondary"
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
              <div className="text-left feature">
                <div className="twoButtons">
                  <i className="uil">
                    <img
                      alt="Tableau Data Visualization Icon"
                      src="images/icons8-tableau-software-500.png"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </i>
                  <h3 style={{ marginLeft: "10px", marginTop: "5px" }}>
                    Tableau Course
                  </h3>
                </div>
                <ul>
                  <li>Data Visualization Basics</li>
                  <li>Working with Data Sources</li>
                  <li>Creating Dashboards</li>
                  <li>Advanced Tableau Features</li>
                  <li>Data Analytics</li>
                  <li>Publishing Reports</li>
                </ul>
                <div className="twoButtons">
                  <p>
                    <Link
                      to="/"
                      className="mr-2 btn btn-secondary"
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
              <div className="text-left feature">
                <div className="twoButtons">
                  <i className="uil">
                    <img
                      alt="SQL Server Icon"
                      src="images/sql-server (1).png"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </i>
                  <h3 style={{ marginLeft: "10px", marginTop: "5px" }}>
                    SQL Course
                  </h3>
                </div>
                <ul>
                  <li>Basic SQL Queries</li>
                  <li>Joins and Subqueries</li>
                  <li>Database Design</li>
                  <li>Normalization</li>
                  <li>Stored Procedures</li>
                  <li>Database Optimization</li>
                </ul>
                <div className="twoButtons">
                  <p>
                    <Link
                      to="/"
                      className="mr-2 btn btn-secondary"
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
