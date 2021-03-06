import React from 'react';
import About from '../../Layout/about/about';
import Values from '../../Layout/values';
import './index.css';
import ClothImage from '../../../assets/images/about-cloth.png';
import jeans from '../../../assets/images/jeans.png';
function AboutContent() {
  return (
    <div className='about-content'>
      <Values
        about='Our Mission and Vision'
        heading='We are driven by our values'
        imgSrc={ClothImage}
      />
      <About
        style={{
          backgroundImage: `url(${jeans})`,
        }}
      />
    </div>
  );
}

export default AboutContent;
