import React from 'react';

import { FiFacebook, FiInstagram, FiYoutube } from 'react-icons/fi';

import './footer.styles.css';

const Footer = () => (
    <div className='footer'>
        <div className='footer-text'>
            <p>React Ecommerce App</p>
        </div>
        <div className='footer-icons'>
            <FiFacebook className='footer-icon' />
            <FiInstagram className='footer-icon' />
            <FiYoutube className='footer-icon' />
        </div>
    </div>
);

export default Footer;