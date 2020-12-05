import React from 'react';
import Button from 'react-bootstrap/Button'

import { useStateValue } from '../StateProvider/StateProvider'
import './Product.css'

const Product = ({ id, title, image, price, rating }) => {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id,
                title,
                image,
                price,
                rating
            }
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <div>{title}</div>
                <div className="product__price">
                    <small>&#x20B9;</small>
                    <strong>{price}</strong>
                </div>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => <div key={i}>&#9733;</div>)}
                </div>
            </div>
            <img className="product__img" src={image} alt="" /> <br />
            <Button onClick={addToBasket} className="product__button" variant="warning" size="sm">Add to cart</Button>
        </div>
    )
}

export default Product