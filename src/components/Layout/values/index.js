import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../about/about.css";
import "./index.css";
import ClothImage from "../../../assets/images/about-cloth.png";

function Values({}) {
  return (
    <Container>
      <Row className="about__content">
        <Col lg="6" xs="6">
          <div className="about__description">
            <p className="about__paragraph">Our Mission and Vision</p>
            <h1 className="about__heading">We are driven by our values</h1>
            <p className="about__info">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo.
            </p>
          </div>
        </Col>
        <Col lg="5" xs="6" className="offset-md-1">
          <div className="values__image">
            <img src={ClothImage} alt="image of clothes" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Values;
