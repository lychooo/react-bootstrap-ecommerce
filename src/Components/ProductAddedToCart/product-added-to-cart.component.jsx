import React from 'react';

import './product-added-to-cart.styles.css';

const ProductAddedToCart = ({ product: { title, price, image, quantity } }) => (
    <div className='product-added-to-cart'>
        <img className='product-cart-img' src={image}/>
        <div className='product-cart-details'>
            <span className='product-cart-title'>{title}</span>
            <span className='product-cart-price'>
                {quantity} x {price}
            </span>
        </div>
    </div>
);

export default ProductAddedToCart;