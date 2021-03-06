import React from 'react';
import { useStateValue } from '../../StateProvider/StateProvider';

import './CheckoutProduct.css'

const CheckoutProduct = ({title, image, id, price, rating}) => {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id
        })
    }

       return <div className="checkoutProduct">
            <img src={image} className="checkoutProduct__image" alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <div>&#x20B9;{price}</div>
                <div className="checkoutProduct__rating">{
                    Array(rating).fill().map((_,i) => <div>&#9733;</div>)
                }</div><br />
                <button className="checkoutProduct__button" onClick={removeFromBasket}>Remove from cart</button>    
            </div>
        </div>
}

export default CheckoutProduct