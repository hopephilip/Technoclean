import React from 'react';
import { Button } from 'reactstrap';

function bookButton({ style }) {
  return (
    <Button style={style} color='light' className='pl-5 pr-5'>
      Book
    </Button>
  );
}

export default bookButton;
