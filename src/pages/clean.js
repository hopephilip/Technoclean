import React from 'react';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import PageHero from '../components/Hero/PageHero/PageHero';
import CleanContent from '../components/Content/cleanContent';

function Clean() {
  return (
    <div>
      <Header>
        <PageHero
          heading='Clean & Press'
          subHeading='Let us pick up your dirty laundry, sort it, pre-treat stains, wash, dry, fold and deliver back to you in one neat easy package'
        />
      </Header>
      <CleanContent />
      <Footer />
    </div>
  );
}

export default Clean;
