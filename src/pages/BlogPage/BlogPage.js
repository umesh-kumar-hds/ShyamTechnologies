import React from "react";
import Navbar from "../../Components/NavComponent";
import FooterSection from "../../Components/FooterSection";
// import ComingSoonSection from "../../Components/ComingSoonSection";
import MobileMenu from "../../Components/MobileMenu";
import BlogPageContent from "../../Components/BlogPageComponent";
import GapComponent from "../../Components/GapComponent";
// import LoadingComponent from "../../Components/LoadingComponent";
// import { Helmet } from "react-helmet-async"; // Import Helmet

const BlogPage = () => {
  return (
    <div>
      {/* <MobileMenu /> */}
      <Navbar />

      <GapComponent />
      <BlogPageContent />
      {/* <ComingSoonSection /> */}
      <FooterSection />
      {/* <LoadingComponent /> */}
    </div>
  );
};

export default BlogPage;
