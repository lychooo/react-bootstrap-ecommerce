import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartProducts, selectCartTotal } from '../../redux/cart/cart.selectors';

import ProductCheckout from '../../Components/ProductCheckout/product-checkout.component';

import './checkout.styles.css';

const Checkout = ({ cartProducts, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>

        {cartProducts.map(cartProduct => 
            <ProductCheckout key={cartProduct.id} cartProduct={cartProduct} />
            )}

        <div className='total'>
            <span>TOTAL: US${total}</span>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartProducts: selectCartProducts,
    total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);