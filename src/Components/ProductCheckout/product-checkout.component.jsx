import React from 'react';
import { connect } from 'react-redux';

import { removeProduct, addProduct, decreaseProduct } from '../../redux/cart/cart.actions';
import './product-checkout.style.css';

const ProductCheckout = ({ cartProduct, removeProduct, addProduct, decreaseProduct }) => {
    const { title, image, quantity, price } = cartProduct;
    return (
        <div className='product-checkout'>
            <div className='image-container'>
                <img className='product-checkout-img' src={image} alt="product" />
            </div>
            <span className='product-checkout-title'>{title}</span>

            <span className='product-checkout-quantity'>
                <div className='cart-arrow' onClick={() => decreaseProduct(cartProduct)}>&#10094;</div>
                <span className='cart-value'>{quantity}</span>
                <div className='cart-arrow' onClick={() => addProduct(cartProduct)}>&#10095;</div>
            </span>

            <span className='product-checkout-price'>{price}</span>
            <div className='product-checkout-remove-button' onClick={() => removeProduct(cartProduct)}>
                &#10005;
            </div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    removeProduct: product => dispatch(removeProduct(product)),
    addProduct: product => dispatch(addProduct(product)),
    decreaseProduct: product => dispatch(decreaseProduct(product))
})

export default connect(null, mapDispatchToProps)(ProductCheckout);