import React from "react";
import MobileMenu from "../../Components/MobileMenu";
import Navbar from "../../Components/NavComponent";
import PageContent from "../../Components/PageContent";
import FooterSection from "../../Components/FooterSection";
// import LoadingComponent from "../../Components/LoadingComponent";
import { Helmet } from "react-helmet-async"; // Import Helmet

const SapCourse = ({ prop }) => {
  return (
    <div>
      <Helmet>
        {/* Page Title */}
        <title>
          BEST SAP S/4 HANA FICO TRAINING ,SAP Course ,BEST ONLINE SAP WITH S4
          HANA COURSE| Syllabus, Career, and Interview Questions
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Learn SAP S/4HANA FICO: course details, syllabus, career opportunities, and key differences from ECC. Get answers to interview questions and syllabus PDFs."
        />

        {/* Keywords for SEO */}
        <meta
          name="keywords"
          content="BEST SAP S/4HANA FICO TRAINING I AMEERPET, SAP S/4HANA vs ECC, SAP FICO S/4HANA syllabus, SAP FICO S/4HANA course, SAP FICO interview questions, SAP FICO career, SAP S/4HANA PDF"
        />

        {/* Canonical URL (Best for SEO) */}
        <link rel="canonical" href="https://yourwebsite.com/sap-s4-hana-fico" />

        {/* Open Graph for Social Media */}
        <meta
          property="og:title"
          content="SAP S/4HANA FICO Course | Learn Syllabus, Career, and More"
        />
        <meta
          property="og:description"
          content="Complete SAP S/4HANA FICO guide with syllabus, career insights, and interview questions. Know the difference between ECC and S/4HANA."
        />
        <meta
          property="og:url"
          content="https://yourwebsite.com/sap-s4-hana-fico"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card for better sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="SAP S/4HANA FICO Course | Learn Syllabus, Career, and More"
        />
        <meta
          name="twitter:description"
          content="Complete SAP S/4HANA FICO guide with syllabus, career insights, and interview questions. Know the difference between ECC and S/4HANA."
        />
      </Helmet>
      {/* <MobileMenu /> */}
      <Navbar />
      <PageContent prop={prop} />
      <FooterSection />
      {/* <LoadingComponent /> */}
    </div>
  );
};

export default SapCourse;
