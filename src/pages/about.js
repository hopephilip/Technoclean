import React from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import PageHero from "../components/Hero/PageHero/PageHero";
import AboutContent from "../components/Content/aboutContent";

function AboutPage() {
  return (
    <div>
      <Header>
        <PageHero heading="Delivering Clean Clothes & Peace of Mind" />
      </Header>
      <AboutContent />
      <Footer />
    </div>
  );
}

export default AboutPage;
