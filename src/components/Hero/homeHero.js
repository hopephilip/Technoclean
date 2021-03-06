import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import cloth from '../../assets/images/cloth.png';
import BookButton from '../Button/bookButton';
import './hero.css';
function HomeHero() {
  return (
    <Container>
      <Row className='hero__content mt-5'>
        <Col lg='6' md='12' className='home__text'>
          <h1 className='home__heading'>
            we offer quality dry Cleaning at competitive
          </h1>
          <p className='home__pararaph pt-3 pb-3'>
            Laundry and Dry Cleaning Services with Delivery 24hr
          </p>
          <BookButton
            style={{
              backgroundColor: 'var(--main-light)',
              color: 'var(--main-primary)',
            }}
          />
        </Col>
        <Col lg='5' md='12' className='offset-md-1'>
          <div className='home__body'>
            <img src={cloth} className='hero__img' />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeHero;
