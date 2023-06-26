import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import ServiceDetailsContent from "../components/Services/ServiceDetailsContent";

const ServiceDetails = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="Ortodoncia Invisible"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Ortodoncia Invisible"
        bgImage="page-title-one"
      />

      <ServiceDetailsContent />

      <Footer />
    </>
  );
};

export default ServiceDetails;
