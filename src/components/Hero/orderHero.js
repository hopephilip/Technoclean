import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import OrderButton from '../Button/orderButton';
import polygon from '../../assets/images/polygon.png';
import PhoneButton from '../Button/phoneButton';
function OrderHero() {
  return (
    <div className='order__hero mt-5'>
      <Container>
        <Row>
          <Col lg='7' className='px-md-5'>
            <h1>Get your cloth cleaned It’s simple and affordable</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet leo tris commodo leo sed, scelerisque turpis. Ut in finibus
              tellus.
            </p>
          </Col>
          <Col lg='5' className='px-md-3'>
            <Row>
              <Col lg='3'>
                <div className='order__hero-line'></div>
                <img className='order__img' src={polygon} />
              </Col>
              <Col lg='6'>
                <PhoneButton />
                <OrderButton />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default OrderHero;
