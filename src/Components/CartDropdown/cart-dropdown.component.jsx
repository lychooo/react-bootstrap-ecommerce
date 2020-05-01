import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

import { Button } from 'react-bootstrap';

import ProductAddedToCart from '../ProductAddedToCart/product-added-to-cart.component';

import './cart-dropdown.styles.css';

const CartDropdown = ({ cartProducts }) => (
    <div className='cart-dropdown'>
        <div className='cart-products' />
        {cartProducts.map(cartProduct => 
            <ProductAddedToCart key={cartProduct.id} product={cartProduct} />)}
        <Link to='/'>
            <Button variant="primary" type="submit">Go to Checkout</Button>
        </Link>
    </div>
);

const mapStateToProps = ({ cart: { cartProducts } }) => ({
    cartProducts
})

export default connect(mapStateToProps)(CartDropdown);