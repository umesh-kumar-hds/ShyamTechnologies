import React from "react";
import Navbar from "../../Components/NavComponent";
import FooterSection from "../../Components/FooterSection";
import MobileMenu from "../../Components/MobileMenu";
// import LoadingComponent from "../../Components/LoadingComponent";
import ContactMapSection from "../../Components/ContactMapSection";
import { Helmet } from "react-helmet-async"; // Import Helmet

const ContactPage = () => {
  return (
    <div>
      <Helmet></Helmet>
      {/* <MobileMenu /> */}
      <Navbar />
      <ContactMapSection />
      <FooterSection />
      {/* <LoadingComponent /> */}
    </div>
  );
};

export default ContactPage;
