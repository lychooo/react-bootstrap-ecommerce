import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartProductCount } from '../../redux/cart/cart.selectors';

import { FiShoppingCart, FiUser, FiHeart } from 'react-icons/fi';

import './navbar-icons.styles.css';

const NavbarIcons = ({ toggleCartHidden, productCount }) => (
    <div className='navbar-icons'>
        <FiUser className='navbar-icon' />
        <FiHeart className='navbar-icon' />
        <div className='cart-icon' onClick={toggleCartHidden}>
            <span className='cart-count'>{productCount}</span>
            <FiShoppingCart className='navbar-icon navbar-icon-cart' />
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    productCount: selectCartProductCount
});

const mapDispathcToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispathcToProps)(NavbarIcons);