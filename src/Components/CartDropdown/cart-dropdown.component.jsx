import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom'

import { Button } from 'react-bootstrap';

import ProductAddedToCart from '../ProductAddedToCart/product-added-to-cart.component';
import { selectCartProducts } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.css';

const CartDropdown = ({ cartProducts, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-products' />

        {cartProducts.length ? (
            cartProducts.map(cartProduct =>
                <ProductAddedToCart key={cartProduct.id} product={cartProduct} />)
        ) : (
                <span className='empty-message'>Your cart is empty</span>
            )}

        <Button variant="primary" type='submit' onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
            }}>
            Go to Checkout
        </Button>

    </div>
);

const mapStateToProps = createStructuredSelector({
    cartProducts: selectCartProducts
})

export default withRouter(connect(mapStateToProps)(CartDropdown));