import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../Reducer/reducer';
import { useStateValue } from '../../StateProvider/StateProvider';

import './Subtotal.css'

const Subtotal = () => {
    const [{ basket }, dispatch] = useStateValue();
    const rupee = <div>&#x20B9;</div>

    return <div className="subtotal">
        <CurrencyFormat
            renderText={(value) => (
                <>
                    <div>
                        Subtotal ({basket.length} items): <strong>{value}</strong>
                    </div>
                    <small className="subtotal__gift">
                        <input type="checkbox" />
                          &nbsp;This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={rupee.props.children}
        />
        <button>Proceed to Checkout</button>


        {/* <big>Subtotal ({3} items): <strong>Rs.{255}</strong></big>
            <br /><br />
            <p><input type="checkbox" /> This order contains a gift</p> */}
    </div>

}

export default Subtotal