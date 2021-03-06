import React from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import PageHero from "../components/Hero/PageHero/PageHero";
import About from "../components/Layout/about/about";
import Values from "../components/Layout/values";

function AboutPage() {
  return (
    <div>
      <Header>
        <PageHero heading="Delivering Clean Clothes & Peace of Mind" />
      </Header>
      <div className="mb-5">
        <Values />
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;
