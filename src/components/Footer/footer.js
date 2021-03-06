import React from 'react';
import { Col, Row } from 'reactstrap';
import './footer.css';
import logo from '../../assets/images/logo.png';
function Footer() {
  return (
    <footer className='mt-4'>
      <div className='container'>
        <Row className='pt-5'>
          <Col lg='5'>
            <div>
              <img src={logo} />
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore.
              </p>
            </div>
            <div>
              <h5>Address:</h5>
              <p>246 obi wali Rumuigbo PH Rivers State</p>
            </div>
            <div>
              <h5>Contact Info</h5>
              <p>08109208353 </p>
              <span>info@ technoclean</span>
            </div>
          </Col>
          <Col lg='7'></Col>
        </Row>
      </div>
    </footer>
  );
}

export default Footer;
