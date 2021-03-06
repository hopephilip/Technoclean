import React from "react";
import "./PageHero.css";

function PageHero({ heading }) {
  return (
    <div className="page-hero">
      <p className="page-hero__header">{heading}</p>
    </div>
  );
}

export default PageHero;
