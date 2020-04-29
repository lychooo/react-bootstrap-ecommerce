import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

import Image from 'react-bootstrap/Image'
import imgPageNotFound from '../../Data/img-services/new404.png'

import './page-404.styles.css'

const Page404 = () => (
    <div className="page-not-found">

        <div className='img-not-found'>
            <Image src={imgPageNotFound} rounded />
        </div>
        <div className='txt-page-not-found'>
            <h3>Ooops! Page Not Found!</h3>
        </div>

        <Link to='/'>
            <Button variant="primary" type="submit">Go to Home Page</Button>
        </Link>
    </div>
)

export default Page404;