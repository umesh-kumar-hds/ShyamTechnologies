import React from "react";
import MobileMenu from "../../Components/MobileMenu";
import Navbar from "../../Components/NavComponent";
import PageContent from "../../Components/PageContent";
import FooterSection from "../../Components/FooterSection";
// import LoadingComponent from "../../Components/LoadingComponent";
import { Helmet } from "react-helmet-async"; // Import Helmet
import DataScienceSchedule from "../../Components/AddonDataScienePython";

const PythonCourse = ({ prop }) => {
  return (
    <div>
      <Helmet>
        <title>
          {" "}
          python training course ,best online python course , Roadmap, Courses,
          Fees, Projects & More
        </title>
        <meta
          name="description"
          content="Explore python course fees, syllabus, roadmap, projects, interview questions, and eligibility in one place."
        />
        <meta
          name="keywords"
          content="Best Python TRAINING IN AMEERPET ,Python TRAINING IN Hyderabad,python course, python roadmap, python projects, python interview questions,python fees, python training in ameerpet"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      {/* <MobileMenu /> */}
      <Navbar />
      <PageContent prop={prop} />
      <DataScienceSchedule />
      <FooterSection />
      {/* <LoadingComponent /> */}
    </div>
  );
};

export default PythonCourse;
