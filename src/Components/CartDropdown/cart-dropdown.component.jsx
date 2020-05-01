import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import { Button } from 'react-bootstrap';

import ProductAddedToCart from '../ProductAddedToCart/product-added-to-cart.component';
import { selectCartProducts } from '../../redux/cart/cart.selectors';

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

const mapStateToProps = createStructuredSelector({
    cartProducts: selectCartProducts
})

export default connect(mapStateToProps)(CartDropdown);