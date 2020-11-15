import React from 'react';
import { useStateValue } from '../StateProvider/StateProvider';

import './Checkout.css'
import CheckoutProduct from './CheckoutProduct/CheckoutProduct';
import Subtotal from './Subtotal/Subtotal';

const Checkout = () => {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Gift_Cards/Diwali_1-Header-PC.jpg"
                    alt=""
                />

                <h3 className="checkout__title">Your shopping cart</h3>
                <CheckoutProduct
                    id={2}
                    key={2}
                    title={"lorem ipsum lorem ipsum lorem ipsum lorem ipsumkjsanfoasiofjioasjfioja"}
                    image={"https://images-na.ssl-images-amazon.com/images/I/81s6DUyQCZL.jpg"}
                    rating={4}
                    price={1999}
                />
                {basket.map((item) =>
                    <CheckoutProduct
                        id={item.id}
                        key={item.id}
                        title={item.title}
                        image={item.image}
                        rating={item.rating}
                        price={item.price}
                    />)
                }
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout