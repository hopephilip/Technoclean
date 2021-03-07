import React from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import PageHero from "../components/Hero/PageHero/PageHero";
import WashContent from "../components/Content/washContent";

function Wash() {
  return (
    <div>
      <Header>
        <PageHero heading="Wash & Fold" subHeading="Services you will love" />
      </Header>
      <WashContent />
      <Footer />
    </div>
  );
}

export default Wash;
