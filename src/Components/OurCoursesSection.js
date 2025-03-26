import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // Import Helmet

const OurCoursesSection = () => {
  return (
    <div>
      <div className="untree_co-section" id="our-courses">
        {/* Dynamic SEO for the Our Courses */}
        <Helmet>
          <title>
            Explore Our Career-Boosting Tech Courses | Shyam Technologies
          </title>
          <meta
            name="description"
            content="Boost your career with industry-focused courses in AI, Data Science, Python, Full Stack Development, Cloud Computing, and more at Shyam Technologies."
          />
          <meta
            name="keywords"
            content="AI, Machine Learning, Data Science, Python, Full Stack Development, Cloud Computing, AWS, Azure, SQL, Tableau, Power BI"
          />
          <meta name="author" content="Shyam Technologies" />
          <meta
            property="og:title"
            content="Best IT Courses | AI, ML, Data Science, Cloud & More"
          />
          <meta
            property="og:description"
            content="Join our top-rated training programs in AI, Data Science, Full Stack, and Cloud Technologies. Learn from industry experts and gain hands-on experience!"
          />
          <meta property="og:image" content="images/course-banner.jpg" />
          <meta property="og:type" content="website" />
        </Helmet>

        <div className="container">
          <div className="mb-3 row justify-content-center">
            <div
              className="text-center col-lg-7"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <h2 className="mb-4 text-center line-bottom" lang="en">
                Our Professional Courses
              </h2>
              <p className="lead">
                Enroll in our expert-designed courses and gain **real-world
                skills** to accelerate your career in the **tech industry**. Our
                industry-focused curriculum ensures you stay ahead in fields
                like **AI, Data Science, Full Stack Development, Cloud
                Computing, and more**.
              </p>
            </div>
          </div>

          <div className="row align-items-stretch">
            {[
              {
                link: "/python-training-in-hyderabad",
                icon: "images/python.png",
                alt: "Python Programming Icon",
                title: "Python Programming",
                description:
                  "Master Python programming with hands-on projects in data analysis, automation, and web development.",
              },
              {
                link: "/DATASCIENCE-AI-ML-TRAINING-IN-HYDERABAD",
                icon: "images/data-science (1).png",
                alt: "Data Science with AI & ML Icon",
                title: "Data Science With AI & ML",
                description:
                  "Learn Data Science, AI, and ML concepts with real-world datasets, predictive analytics, and deep learning models.",
              },
              {
                link: "/DataAnalytics-training-in-hyderabad",
                icon: "images/data analytics.png",
                alt: "Data Analytics Icon",
                title: "Data Analytics",
                description:
                  "Become an expert in Data Analytics with SQL, Power BI, Tableau, and Python for data-driven decision-making.",
              },
              {
                link: "/PowerBi",
                icon: "images/icons8-power-bi-2021-500.png",
                alt: "Power BI Icon",
                title: "Power BI",
                description:
                  "Visualize and analyze data effectively using Power BI with industry-standard dashboards and reports.",
              },
              {
                link: "/Informatica",
                icon: "images/INFA-c4767c1c.png",
                alt: "Informatica Icon",
                title: "Informatica",
                description:
                  "Learn data integration, ETL processes, and Informatica PowerCenter for enterprise data management.",
              },
              {
                link: "/Aws",
                icon: "images/icons8-amazon-web-services-480.png",
                alt: "AWS DevOps Icon",
                title: "AWS DevOps",
                description:
                  "Master cloud computing with AWS, covering EC2, S3, Lambda, and DevOps practices.",
              },
              {
                link: "/Azure",
                icon: "images/icons8-azure-480.png",
                alt: "AZURE DevOps Icon",
                title: "AZURE DevOps",
                description:
                  "Learn Azure DevOps, CI/CD pipelines, and cloud infrastructure management.",
              },
              {
                link: "/Pega",
                icon: "images/Pega_Logo.png",
                alt: "PEGA Icon",
                title: "PEGA",
                description:
                  "Gain expertise in PEGA BPM, case management, and workflow automation.",
              },
              {
                link: "/MicroSoft",
                icon: "images/icons8-microsoft-500.png",
                alt: "Microsoft Full Stack Icon",
                title: "Microsoft Full Stack",
                description:
                  "Learn .NET, C#, SQL Server, and Azure to become a Microsoft Full Stack Developer.",
              },
              {
                link: "/Java",
                icon: "images/icons8-java-500.png",
                alt: "Java Full Stack Icon",
                title: "JAVA Full Stack",
                description:
                  "Build end-to-end applications with Java, Spring Boot, Hibernate, and Angular/React.",
              },
              {
                link: "/Testing",
                icon: "images/testing automation.png",
                alt: "Testing Manual & Automation Icon",
                title: "Testing Manual & Automation",
                description:
                  "Learn software testing with Selenium, JUnit, and test automation frameworks.",
              },
              {
                link: "/Sap",
                icon: "images/icons8-sap-480.png",
                alt: "SAP FICO with S4 HANA Icon",
                title: "SAP FICO with S4 HANA",
                description:
                  "Gain proficiency in SAP Financial Accounting and S/4 HANA modules.",
              },
              {
                link: "/Tableau",
                icon: "images/icons8-tableau-software-500.png",
                alt: "Tableau Icon",
                title: "Tableau",
                description:
                  "Create powerful data visualizations using Tableau dashboards and interactive reports.",
              },
              {
                link: "/Sql",
                icon: "images/sql-server (1).png",
                alt: "SQL Icon",
                title: "SQL",
                description:
                  "Learn SQL, database management, and query optimization techniques.",
              },
            ].map((course, index) => (
              <div
                key={index}
                className="mb-4 col-sm-6 col-md-6 col-lg-3 tooltip-container"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <Link
                  to={course.link}
                  className="category d-flex align-items-start h-100"
                  title={course.description}
                >
                  <div>
                    <i className="uil">
                      <img
                        alt={course.alt}
                        src={course.icon}
                        style={{ width: "30px", height: "30px" }}
                      />
                    </i>
                  </div>
                  <div>
                    <h3>{course.title}</h3>
                    <span className="tooltip-text">{course.description}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCoursesSection;
