import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./about.css";
import check from "../../../assets/images/check.png";
import BookButton from "../../Button/bookButton";

function About({}) {
  return (
    <Container>
      <Row className="about__content">
        <Col lg="5" xs="6" className="">
          <div className="about__body">
            <div className="about__body-description">
              <h3 className="about__body-heading">
                Proudly served 100+ client so far
              </h3>
            </div>
          </div>
        </Col>
        <Col lg="6" xs="6" className="offset-md-1">
          <div className="about__description">
            <p className="about__paragraph">About</p>
            <h1 className="about__heading">
              We are Different in Cleaning Industry
            </h1>
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
            <Row>
              <Col lg="6" className="mb-3">
                <img src={check} className="pr-2" />
                Cost Effective
              </Col>
              <Col lg="6" className="mb-3">
                <img src={check} className="pr-2" />
                Insured and Bonded
              </Col>
              <Col lg="6" className="mb-3">
                <img src={check} className="pr-2" />
                100% Satisfaction
              </Col>
              <Col lg="6" className="mb-3">
                <img src={check} className="pr-2" />
                Quality Services
              </Col>
            </Row>
            <BookButton
              style={{
                backgroundColor: "var(--main-primary)",
                color: "var(--main-light)",
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
