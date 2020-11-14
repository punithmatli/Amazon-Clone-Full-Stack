import React from 'react';
import CurrencyFormat from 'react-currency-format';

import './Subtotal.css'

const Subtotal = () => {
    return <div className="subtotal">
            <CurrencyFormat
            renderText={(value) => (
                <>
                    <div>
                        Subtotal (0 items): <strong>0</strong>
                    </div>
                    <small className="subtotal__gift">
                        <input type="checkbox" />
                          &nbsp;This order contains a gift
                    </small>
                </>
            )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"Rs."}
            />
<button>Proceed to Checkout</button>


            {/* <big>Subtotal ({3} items): <strong>Rs.{255}</strong></big>
            <br /><br />
            <p><input type="checkbox" /> This order contains a gift</p> */}
        </div>
    
}

export default Subtotal