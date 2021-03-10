import React from 'react';
import OrderHero from '../../Hero/orderHero';
import About from '../../Layout/about/about';
import Details from '../../Layout/details/details';
import Service from '../../Layout/service/service';
import Work from '../../Layout/work';
import jeans from '../../../assets/images/jeans.png';
import './index.css';
function HomeContent() {
  return (
    <div>
      <div className='container home__content mt-5'>
        <div className='home__description'>
          <p className='home__description-paragraph'>services</p>
          <h2 className='home__description-heading'>
            Affordable and Reliable Laundry services
          </h2>
        </div>
        <Service />
        <About
          style={{
            backgroundImage: `url(${jeans})`,
          }}
        />
        <div className='home__details'>
          <h2 className='details-heading'>Why choose us</h2>
          <div className='details__line'></div>
          <Details />
        </div>
      </div>
      <OrderHero />
      <div className='home__details'>
        <h5>How we work</h5>
        <h1>How ‘Technoclean’ Works</h1>
        <Work />
      </div>
    </div>
  );
}

export default HomeContent;
