import React from 'react';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

import './Product.css'

const Product = () => {
    return (
        <div className="product">
            <Col xs={1} md={1}>
            <div className="product__info">
                <div>The Lean Startup</div>
                <div className="product__price">
                    <small>$</small>
                    <strong>19.99</strong>
                </div>
                <div className="product__rating">
                    &#9733;&#9733;&#9733;&#9733;
                </div>
            </div>
            <img className="product__img" src="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" alt="" /> <br />
            <Button variant="warning" size="sm">Add to cart</Button>
            </Col>
        </div>
    )
}

export default Product