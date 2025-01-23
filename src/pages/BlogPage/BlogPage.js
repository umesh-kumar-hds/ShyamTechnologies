import React from "react";
import Navbar from "../../Components/NavComponent";
import FooterSection from "../../Components/FooterSection";
import ComingSoonSection from "../../Components/ComingSoonSection";
import MobileMenu from "../../Components/MobileMenu";
// import LoadingComponent from "../../Components/LoadingComponent";

const BlogPage = () => {
  return (
    <div>
      <MobileMenu />
      <Navbar />
      <ComingSoonSection />
      <FooterSection />
      {/* <LoadingComponent /> */}
    </div>
  );
};

export default BlogPage;
