import React from 'react';
import { LinkContainer } from "react-router-bootstrap";

import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './product-card.styles.css';

const ProductCard = ({ product: { id, title, price, brand, image } }) => (
    
        <div className="product-card">
            <Card className="product-card" style={{ width: '12rem' }}>

                <LinkContainer to={`/eachine/${id}`}>
                    <Card.Img variant="top" src={image} />
                </LinkContainer>

                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text> <span className='product-card-page'>${price}</span></Card.Text>
                    <LinkContainer to={`/eachine/${id}`}>
                        <Button variant="primary">Details</Button>
                    </LinkContainer>
                </Card.Body>
            </Card>
        </div>
    );

ProductCard.defaultProps = {
    title: 'Product',
    price: 0,
    brand: 'Original',
    image: ''
}

ProductCard.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    brand: PropTypes.string,
    image: PropTypes.string.isRequired
}

export default ProductCard;

