import React from 'react';

import './CheckoutProduct.css'

const CheckoutProduct = ({title, image, id, price, rating}) => 
        <div className="checkoutProduct">
            <img src={image} className="checkoutProduct__image" alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <div>&#x20B9;{price}</div>
                <div className="checkoutProduct__rating">{
                    Array(rating).fill().map((_,i) => <div>&#9733;</div>)
                }</div><br />
                <button className="checkoutProduct__button">Remove from cart</button>    
            </div>
        </div>

export default CheckoutProduct