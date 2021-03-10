import React from 'react';
import { Col, Row } from 'reactstrap';
import woman from '../../../assets/images/woman.png';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';
function priceLayout() {
  return (
    <div className='container mt-5'>
      <Row>
        <Col lg='4'>
          <img src={woman} alt='woman' />
        </Col>
        <Col lg='8' className='px-md-5 mt-5 pt-5 '>
          <h2 className='mb-5'>Price List</h2>
          <div>
            <Row>
              <Col lg='4' className='mb-4'>
                <Card body className='border-0'>
                  <CardText tag='p'>12 CLOTHES</CardText>
                  <CardTitle tag='h5'>Wash & Fold</CardTitle>
                  <CardText>
                    <p> Wash & Fold - $ 50</p>
                    <p> Comforters – $30</p>
                    <p> Blnkets – $15</p>
                  </CardText>
                  <CardText color='primary'>$1900</CardText>
                </Card>
              </Col>
              <Col lg='4' className='mb-4'>
                <Card body className='border-0'>
                  <CardText tag='p'>6 CLOTHES</CardText>
                  <CardTitle tag='h5'>Dry Cleaning / Launder & Press</CardTitle>
                  <CardText>
                    <p> Shirts – $2.50</p>
                    <p> Pants – $7</p>
                    <p> Blouses – $7</p>
                  </CardText>
                  <CardText color='primary'>$900</CardText>
                </Card>
              </Col>
              <Col lg='4' className='mb-4'>
                <Card body className='border-0'>
                  <CardText tag='p'>20 CLOTHES</CardText>
                  <CardTitle tag='h5'>Hang Dry</CardTitle>
                  <CardText>
                    <p> Undergarments – $1</p>
                    <p> Synthetics – $2.50</p>
                    <p> Sweaters – $7</p>
                  </CardText>
                  <CardText color='primary'>$2900</CardText>
                </Card>
              </Col>
              <Col lg='4' className='mb-4'>
                <Card body className='border-0'>
                  <CardText tag='p'>12 CLOTHES</CardText>
                  <CardTitle tag='h5'>Wash & Fold</CardTitle>
                  <CardText>
                    <p> Wash & Fold - $ 50</p>
                    <p> Comforters – $30</p>
                    <p> Blnkets – $15</p>
                  </CardText>
                  <CardText color='primary'>$1900</CardText>
                </Card>
              </Col>
              <Col lg='4' className='mb-4'>
                <Card body className='border-0'>
                  <CardText tag='p'>6 CLOTHES</CardText>
                  <CardTitle tag='h5'>Dry Cleaning / Launder & Press</CardTitle>
                  <CardText>
                    <p> Shirts – $2.50</p>
                    <p> Pants – $7</p>
                    <p> Blouses – $7</p>
                  </CardText>
                  <CardText color='primary'>$900</CardText>
                </Card>
              </Col>
              <Col lg='4' className='mb-4'>
                <Card body className='border-0'>
                  <CardText tag='p'>20 CLOTHES</CardText>
                  <CardTitle tag='h5'>Hang Dry</CardTitle>
                  <CardText>
                    <p> Undergarments – $1</p>
                    <p> Synthetics – $2.50</p>
                    <p> Sweaters – $7</p>
                  </CardText>
                  <CardText color='primary'>$2900</CardText>
                </Card>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default priceLayout;
