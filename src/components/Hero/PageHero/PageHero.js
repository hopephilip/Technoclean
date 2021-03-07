import React from "react";
import "./PageHero.css";

function PageHero({ heading, subHeading }) {
  return (
    <div className="page-hero">
      <p className="page-hero__header">{heading}</p>
      {subHeading && <p className="page-hero__subheader">{subHeading}</p>}
    </div>
  );
}

export default PageHero;
