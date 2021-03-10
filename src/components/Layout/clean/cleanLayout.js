import React from 'react';
import { Col, Row } from 'reactstrap';
import hangedCloth from '../../../assets/images/hanged-cloth.png';
import guarantee from '../../../assets/images/guarantee.png';
import affordable from '../../../assets/images/affordable.png';
function CleanLayout() {
  return (
    <div>
      <Row className='mt-5 pt-5 mb-5 pb-2'>
        <Col lg='5'>
          <img src={hangedCloth} />
        </Col>
        <Col lg='7'>
          <Row>
            <Col lg='6' className='px-md-5'>
              <img src={guarantee} />
              <div>
                <h4 className='pb-2'>Clean</h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor
                </p>
              </div>
            </Col>
            <Col lg='6' className='px-md-5'>
              <img src={guarantee} />
              <div>
                <h4 className='pb-2'>Clean</h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default CleanLayout;
