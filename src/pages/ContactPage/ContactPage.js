import React from "react";
import Navbar from "../../Components/NavComponent";
import FooterSection from "../../Components/FooterSection";
import MobileMenu from "../../Components/MobileMenu";
import LoadingComponent from "../../Components/LoadingComponent";
import ContactMapSection from "../../Components/ContactMapSection";

const ContactPage = () => {
  return (
    <div>
      <MobileMenu />
      <Navbar />
      <ContactMapSection />
      <FooterSection />
      {/* <LoadingComponent /> */}
    </div>
  );
};

export default ContactPage;
