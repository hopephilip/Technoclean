import React from 'react';
import { Button } from 'reactstrap';

function PhoneButton() {
  return (
    <Button className='phone-btn pl-4 pr-4 mb-4 mt-5' outline color='light'>
      <i className='fa fa-mobile pr-2 pl-1'></i>
      <span>08109208353</span>
    </Button>
  );
}

export default PhoneButton;
