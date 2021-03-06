import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './index.css';
function Details() {
  return (
    <Container>
      <Row className='mt-5 details__layout'>
        <Col lg='4' className='mb-3 px-md-5'>
          <h4>Personalised Experience</h4>
          <p>
            We take utmost care of your cloths, segregating based on the cloth
            type and giving you instant cloths to make a statement
          </p>
        </Col>
        <Col lg='4' className='mb-3 px-md-5'>
          <h4>Affordable Pricing</h4>
          <p>
            Prices that suits your pocket one of our goal. An option of choosing
            between our available prices
          </p>
        </Col>
        <Col lg='4' className='mb-3 px-md-5'>
          <h4>Convenience</h4>
          <p>
            With just a tap of a button your laundry gets done giving your
            leisure time to spend with family and friends
          </p>
        </Col>
        <Col lg='4' className='mb-3 px-md-5'>
          <h4>Quality</h4>
          <p>
            We use the best in class product. To assure that your favourite
            cloths are always there for you to wear.
          </p>
        </Col>
        <Col lg='4' className='mb-3 px-md-5'>
          <h4>Express Delivery</h4>
          <p>
            Forgot to wash your cloth for interview/business meeting never mind,
            with our super express delivery we would get your laundry done in
            less than fee hours
          </p>
        </Col>
        <Col lg='4' className='mb-3 px-md-5'>
          <h4>Instant Order Update</h4>
          <p>
            Regular updates of your oder to help you keep track of your laundry
            and plan according.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Details;
