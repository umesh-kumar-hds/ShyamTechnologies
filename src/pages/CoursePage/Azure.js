import React from "react";
import MobileMenu from "../../Components/MobileMenu";
import Navbar from "../../Components/NavComponent";
import PageContent from "../../Components/PageContent";
import FooterSection from "../../Components/FooterSection";
// import LoadingComponent from "../../Components/LoadingComponent";

const AzureCourse = ({ prop }) => {
  return (
    <div>
      {/* <MobileMenu /> */}
      <Navbar />
      <PageContent prop={prop} />
      <FooterSection />
      {/* <LoadingComponent /> */}
    </div>
  );
};

export default AzureCourse;
