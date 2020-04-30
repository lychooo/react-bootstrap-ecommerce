import React from 'react';
import { Link } from "react-router-dom";

import { Button } from 'react-bootstrap';

import './cart-dropdown.styles.css';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'/>
        <Link to='/'>
            <Button variant="primary" type="submit">Go to Checkout</Button>
        </Link>
    </div>
);

export default CartDropdown;