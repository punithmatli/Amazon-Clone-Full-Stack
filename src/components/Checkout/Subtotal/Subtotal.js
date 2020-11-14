import React from 'react';
import { Button } from 'react-bootstrap';

import './Subtotal.css'

const Subtotal = () => {
    return <div className="subtotal">
            <big>Subtotal ({3} items): <strong>Rs.{255}</strong></big>
            <br /><br />
            <p><input type="checkbox" /> This order contains a gift</p>
            <Button variant="warning" block className="checkout__button">Proceed to Checkout</Button>
        </div>
    
}

export default Subtotal