import React from 'react';
import HomeHero from '../Hero/homeHero';
import Example from '../Nav';
import './header.css';
function Header() {
  return (
    <div className='header'>
      <Example />
      <HomeHero />
    </div>
  );
}

export default Header;
