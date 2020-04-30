import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { FiShoppingCart, FiUser, FiHeart } from 'react-icons/fi';

import './navbar-icons.styles.css';

const NavbarIcons = ({ toggleCartHidden }) => (
    <div className='navbar-icons'>
        <FiUser className='navbar-icon' />
        <FiHeart className='navbar-icon' />
        <div className='cart-icon' onClick={toggleCartHidden}>
            <span className='cart-count'>0</span>
            <FiShoppingCart className='navbar-icon navbar-icon-cart' />
        </div>
    </div>
);

const mapDispathcToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispathcToProps)(NavbarIcons);