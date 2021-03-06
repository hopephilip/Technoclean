import React from 'react';
import { Col, Row } from 'reactstrap';

function Work() {
  return (
    <div className='container mt-5 pt-2'>
      <Row>
        <Col lg='4' className='mb-3 px-md-4'>
          <h2>Book Online</h2>
          <p className='pt-3'>
            Lorem ipsum dolor sit amet, consetetur sadipscingelitr, sed diam
            nonumy eirmod tempor invidunt ut abore et dolore magna aliquyam
            erat, sed diam voluptua. At
          </p>
        </Col>
        <Col lg='4' className='mb-3 px-md-4'>
          <h2>We Clean</h2>
          <p className='pt-3'>
            Lorem ipsum dolor sit amet, consetetur sadipscingelitr, sed diam
            nonumy eirmod tempor invidunt ut abore et dolore magna aliquyam
            erat, sed diam voluptua. At
          </p>
        </Col>
        <Col lg='4' className='mb-3 px-md-4'>
          <h2>You Relax</h2>
          <p className='pt-3'>
            Lorem ipsum dolor sit amet, consetetur sadipscingelitr, sed diam
            nonumy eirmod tempor invidunt ut abore et dolore magna aliquyam
            erat, sed diam voluptua. At
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Work;
