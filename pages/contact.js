import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";
import GoogleMap from "../components/Contact/GoogleMap";
import Footer from "../components/_App/Footer";

const Contact = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="Contactanos"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contactanos"
        bgImage="page-title-one"
      />

      <ContactInfo />

      <ContactForm />

      <Footer />
    </>
  );
};

export default Contact;
