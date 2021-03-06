import React from "react";
import About from "../../Layout/about/about";
import Values from "../../Layout/values";
import "./index.css";

function AboutContent() {
  return (
    <div className="about-content">
      <Values />
      <About />
    </div>
  );
}

export default AboutContent;
