import React from "react";
import GalleryComponent from "../../Components/GalleryComponent";
import Navbar from "../../Components/NavComponent";
import FooterSection from "../../Components/FooterSection";
import LoadingComponent from "../../Components/LoadingComponent";
import MobileMenu from "../../Components/MobileMenu";

const GalleryPage = () => {
  return (
    <div>
      <MobileMenu />
      <Navbar />
      <GalleryComponent />
      <FooterSection />
      {/* <LoadingComponent /> */}
    </div>
  );
};

export default GalleryPage;
