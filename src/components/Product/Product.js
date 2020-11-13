import React from 'react';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

import './Product.css'

const Product = ({title, image, price, rating}) => {
    return (
        <div className="product">
            <div className="product__info">
                <div>{title}</div>
                <div className="product__price">
                    <small>Rs.</small>
    <strong>{price}</strong>
                </div>
                <div className="product__rating">
                    {Array(rating).fill().map((_,i) => <div>&#9733;</div>)}
                </div>
            </div>
            <img className="product__img" src={image} alt="" /> <br />
            <Button className="product__button" variant="warning" size="sm">Add to cart</Button>
        </div>
    )
}

export default Product