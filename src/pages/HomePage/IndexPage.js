import React, { useEffect } from "react";
import MobileMenu from "../../Components/MobileMenu";
import Navbar from "../../Components/NavComponent";
import OwlCarousel from "../../Components/OwlCarousel";
import OurCoursesSection from "../../Components/OurCoursesSection";
import GetStartedSection from "../../Components/GetStartedSection";
import BestCoursesSection from "../../Components/BestCoursesSection";
import AboutUsSection from "../../Components/AboutUsSection";
import TestimonialsSection from "../../Components/TestimonialsSection";
import FooterSection from "../../Components/FooterSection";
import LoadingComponent from "../../Components/LoadingComponent";
import AOS from "aos";
import "aos/dist/aos.css";
import SlickCarousel from "../../Components/OwlCarousel";
import SwiperCarousel from "../../Components/SwiperCarousel";
import SlickTestimonialsSection from "../../Components/SlickTestimonial";
import CustomSlickCarousel from "../../Components/SwiperCarousel";
const IndexPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <MobileMenu />
      <Navbar />
      {/* <OwlCarousel /> */}
      {/* <SwiperCarousel /> */}
      <CustomSlickCarousel />

      <OurCoursesSection />
      <GetStartedSection />
      <BestCoursesSection />
      <AboutUsSection />
      {/* <TestimonialsSection /> */}
      <SlickTestimonialsSection />
      <FooterSection />
      {/* <LoadingComponent /> */}
    </div>
  );
};

export default IndexPage;
