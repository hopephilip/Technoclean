import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./index.css";
import "../about/about.css";
import check from "../../../assets/images/check.png";
import LaundryImage from "../../../assets/images/laundry.png";
import BookButton from "../../Button/bookButton";

function Wash() {
  return (
    <Container>
      <Row className="about__content">
        <Col lg="6" xs="6">
          <div className="about__description">
            <p className="about__paragraph">Why choose us</p>
            <h1 className="about__heading">Your Happiness Is Our Priority</h1>
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
                <span className="font-weight-bold m-0">Cost Effective</span>
                <p className="wash__paragraph">
                  Lorem ipsum dolor sit amet, conse
                </p>
              </Col>
              <Col lg="6" className="mb-3">
                <img src={check} className="pr-2" />
                <span className="font-weight-bold m-0">Insured and Bonded</span>
                <p className="wash__paragraph">
                  Lorem ipsum dolor sit amet, conse
                </p>
              </Col>
              <Col lg="6" className="mb-3">
                <img src={check} className="pr-2" />
                <span className="font-weight-bold m-0">100% Satisfaction</span>
                <p className="wash__paragraph">
                  Lorem ipsum dolor sit amet, conse
                </p>
              </Col>
              <Col lg="6" className="mb-3">
                <img src={check} className="pr-2" />
                <span className="font-weight-bold m-0">Quality Services</span>
                <p className="wash__paragraph">
                  Lorem ipsum dolor sit amet, conse
                </p>
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
        <Col lg="5" xs="6" className="offset-md-1">
          <div className="values__image">
            <img src={LaundryImage} alt="image of clothes" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Wash;
