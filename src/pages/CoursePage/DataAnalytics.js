import React from "react";
import MobileMenu from "../../Components/MobileMenu";
import Navbar from "../../Components/NavComponent";
import PageContent from "../../Components/PageContent";
import FooterSection from "../../Components/FooterSection";
import { Helmet } from "react-helmet-async"; // Import Helmet

// import LoadingComponent from "../../Components/LoadingComponent";

const DataAnalyticsCourse = ({ prop }) => {
  return (
    <div>
      <Helmet>
        <title>
          Data Analytics Training Course ,best online data analytics course,
          Tools, Projects, Roadmap, Courses & More
        </title>
        <meta
          name="description"
          content="Learn about Data Analytics tools, projects, roadmap, free courses, syllabus, internship, and certification programs."
        />
        <meta
          name="keywords"
          content="Data Analytics Training in AMEERPET,data analytics tools, data analytics projects, data analytics roadmap, free data analytics courses, data analytics syllabus, data analytics internship, python for data analytics, google data analytics certification"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      {/* <MobileMenu /> */}
      <Navbar />
      <PageContent prop={prop} />
      <FooterSection />
      {/* <LoadingComponent /> */}
    </div>
  );
};

export default DataAnalyticsCourse;
