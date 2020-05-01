import React from 'react';

import './product-checkout.style.css';

const ProductCheckout = ({ cartProduct: { title, image, quantity, price } }) => (
    <div className='product-checkout'>
        <div className='image-container'>
            <img className='product-checkout-img' src={image} alt="product" />
        </div>
        <span className='product-checkout-title'>{title}</span>
        <span className='product-checkout-quantity'>{quantity}</span>
        <span className='product-checkout-price'>{price}</span>
        <div className='product-checkout-remove-button'>&#10005;</div>
    </div>
);

export default ProductCheckout;