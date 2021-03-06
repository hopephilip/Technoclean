import React from 'react';
import clean from '../../../assets/images/cleaning.png';
import iron from '../../../assets/images/iron.png';
import wash from '../../../assets/images/wash.png';
import './service.css';
import { Row, Col } from 'reactstrap';
function Service() {
  return (
    <Row className='service__content'>
      <Col lg='4' md='12' className='mb-3 px-md-5'>
        <img src={wash} alt='wash' />
        <div className='service__description'>
          <h3>Wash and Fold</h3>
          <p className='service__paragraph'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna
          </p>
        </div>
      </Col>
      <Col lg='4' md='12' className='mb-3 px-md-5'>
        <img src={wash} alt='iron' />
        <div className='service__description'>
          <h3>Wash and Fold</h3>
          <p className='service__paragraph'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna
          </p>
        </div>
      </Col>
      <Col lg='4' md='12' className='mb-3 px-md-5'>
        <img src={wash} alt='clean' />
        <div className='service__description'>
          <h3>Wash and Fold</h3>
          <p className='service__paragraph'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna
          </p>
        </div>
      </Col>
    </Row>
  );
}

export default Service;
