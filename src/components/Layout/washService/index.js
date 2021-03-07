import React from "react";
import { Col } from "reactstrap";
import "./index.css";

function WashService({ heading, imgSrc }) {
  return (
    <Col lg="4" md="12" className="mb-3 px-md-5">
      <img src={imgSrc} alt="wash service" />
      <div className="service__description">
        <h3>{heading}</h3>
        <p className="service__paragraph">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna
        </p>
      </div>
    </Col>
  );
}

export default WashService;
