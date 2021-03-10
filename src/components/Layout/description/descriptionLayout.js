import React from 'react';
import { Col, Row } from 'reactstrap';

function DescriptionLayout() {
  return (
    <div className='pt-5 mt-5 mb-5 text-left'>
      <Row>
        <Col lg='4' className='pb-3'>
          <div>
            <h5>Highly Rated & Esteemed</h5>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor
            </p>
          </div>
        </Col>
        <Col lg='4' className='pb-3'>
          <div>
            <h5>Insured & Bonded</h5>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor
            </p>
          </div>
        </Col>
        <Col lg='4' className='pb-3'>
          <div>
            <h5>Trusted Proffessionals</h5>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor
            </p>
          </div>
        </Col>
        <Col lg='4' className='pb-3'>
          <div>
            <h5>Cost Effective</h5>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default DescriptionLayout;
