import React from 'react';
import { Button } from 'reactstrap';
import './button.css';
function OrderButton() {
  return (
    <div>
      <Button id='order-btn' color='light'>
        Order via Whatsapp
      </Button>
    </div>
  );
}

export default OrderButton;
