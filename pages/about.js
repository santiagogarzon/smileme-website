import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import OurExpertise from "../components/HomeTwo/OurExpertise";
import Services from "../components/HomeOne/Services";
import TestimonialSlider from "../components/Common/TestimonialSlider";
import LatestBlogPost from "../components/Common/LatestBlogPost";
import FunFacts from "../components/Common/FunFacts";
import AboutContent from "../components/About/AboutContent";

const About = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="Quienes somos"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Quienes somos"
        bgImage="page-title-one"
      />

      <AboutContent />

      <Footer />
    </>
  );
};

export default About;
