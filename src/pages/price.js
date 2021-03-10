import React from 'react';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import PageHero from '../components/Hero/PageHero/PageHero';
import PriceContent from '../components/Content/priceContent';

function Price() {
  return (
    <div>
      <Header>
        <PageHero
          heading='Affordable Pricing'
          subHeading='Prices that suits your pocket one of our goal. An option of choosing between our available prices'
        />
      </Header>
      <PriceContent />
      <Footer />
    </div>
  );
}

export default Price;
