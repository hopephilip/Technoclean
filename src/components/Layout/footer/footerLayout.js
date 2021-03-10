import React from 'react';
import { Col, Row } from 'reactstrap';
import './footerLayout.css';
import logo from '../../../assets/images/logo.png';
function FooterLayout() {
  return (
    <div className='container'>
      <Row className='pt-5 pb-5'>
        <Col lg='5' className='px-md-5'>
          <div>
            <img src={logo} />
            <p className='pt-4 footer__description'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore.
            </p>
          </div>
          <div>
            <h5 className='footer__heading'>Address:</h5>
            <p className='footer__description'>
              246 obi wali Rumuigbo PH Rivers State
            </p>
          </div>
          <div>
            <h5 className='footer__heading'>Contact Info</h5>
            <p className='footer__description'>
              08109208353 <br /> info@ technoclean{' '}
            </p>
          </div>
        </Col>
        <Col lg='7' className='px-md-5'>
          <Row className='pt-2'>
            <Col>
              <div className='pb-4'>
                <h5 className='footer__heading'> Useful Links</h5>
              </div>
              <div>
                <p className='footer__description'>
                  About us <br /> Service
                </p>
              </div>
            </Col>
            <Col>
              <div className='pb-4'>
                <h5 className='footer__heading'> Useful Links</h5>
              </div>
              <div>
                <p className='footer__description'>
                  Wash & Fold <br /> Pressing <br />
                  Iron
                </p>
              </div>
            </Col>
            <Col>
              <div className='pb-4'>
                <h5 className='footer__heading'> Useful Links</h5>
              </div>
              <div>
                <p className='footer__description'>
                  Contact <br /> Privacy Policy <br />
                  Terms of Service
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default FooterLayout;
