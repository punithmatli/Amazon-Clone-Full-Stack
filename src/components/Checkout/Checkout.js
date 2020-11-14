import React from 'react';

import './Checkout.css'
import Subtotal from './Subtotal/Subtotal';

const Checkout = () => {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Gift_Cards/Diwali_1-Header-PC.jpg"
                />

                <h2 className="checkout__title">Your shopping cart</h2>
                {/* <BasketItem /> */}
                {/* <BasketItem /> */}
                {/* <BasketItem /> */}
                {/* <BasketItem /> */}
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout