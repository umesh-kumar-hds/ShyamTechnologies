import React from "react";
import MobileMenu from "../../Components/MobileMenu";
import Navbar from "../../Components/NavComponent";
import PageContent from "../../Components/PageContent";
import FooterSection from "../../Components/FooterSection";
import { Helmet } from "react-helmet-async"; // Import Helmet
import DataScienceAddon from "../../Components/AddonDs";

// import LoadingComponent from "../../Components/LoadingComponent";

const DataScienceCourse = ({ prop }) => {
  return (
    <div>
      <Helmet>
        <title>
          {" "}
          Artificial Intelligence training course ,best online artificiall
          Intelligence ,Data Science | Roadmap, Courses, Fees, Projects & More
        </title>
        <meta
          name="description"
          content="Explore Data Science course fees, syllabus, roadmap, projects, interview questions, and eligibility in one place."
        />
        <meta
          name="keywords"
          content="AI/ML TRAINING IN AMEERPET ,AI/ML TRAINING IN HYDERABAD,data science course, data science roadmap, data science projects, data science interview questions, data science fees, data science vs data analytics"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      {/* <MobileMenu /> */}
      <Navbar />
      <PageContent prop={prop} />
      <DataScienceAddon />
      <FooterSection />
      {/* <LoadingComponent /> */}
    </div>
  );
};

export default DataScienceCourse;
