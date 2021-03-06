import React from "react";
import Header from "../components/Header/header";
import HomeContent from "../components/Content/homeContent";
import Footer from "../components/Footer/footer";
import HomeHero from "../components/Hero/homeHero";

function Home() {
  return (
    <div>
      <Header home>
        <HomeHero />
      </Header>
      <HomeContent />
      <Footer />
    </div>
  );
}

export default Home;
