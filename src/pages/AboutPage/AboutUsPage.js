import React from "react";
import Navbar from "../../Components/NavComponent";
import FooterSection from "../../Components/FooterSection";
import ComingSoonSection from "../../Components/ComingSoonSection";
import MobileMenu from "../../Components/MobileMenu";
import BestCoursesSection from "../../Components/BestCoursesSection";
import OurCoursesSection from "../../Components/OurCoursesSection";
import AboutUsSection from "../../Components/AboutUsSection";
// import LoadingComponent from "../../Components/LoadingComponent";

const AboutUsPage = () => {
  return (
    <div>
      <MobileMenu />
      <Navbar />
      <hr></hr>
      <div style={{ marginTop: "60px", border: "1px solid #001a33" }}>
        <AboutUsSection /> <FooterSection />
      </div>

      {/* <LoadingComponent /> */}
    </div>
  );
};

export default AboutUsPage;
