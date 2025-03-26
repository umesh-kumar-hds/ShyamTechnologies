import React from "react";
import Navbar from "../../Components/NavComponent";
import FooterSection from "../../Components/FooterSection";
// import ComingSoonSection from "../../Components/ComingSoonSection";
import MobileMenu from "../../Components/MobileMenu";
// import BestCoursesSection from "../../Components/BestCoursesSection";
import OurCoursesSection from "../../Components/OurCoursesSection";
// import LoadingComponent from "../../Components/LoadingComponent";

const OurCoursesPage = () => {
  return (
    <div>
      {/* <MobileMenu /> */}
      <Navbar />
      <hr></hr>
      <div style={{ marginTop: "60px" }}>
        <OurCoursesSection /> <FooterSection />
      </div>

      {/* <LoadingComponent /> */}
    </div>
  );
};

export default OurCoursesPage;
