import React from 'react';
import { Card, Img, Body, Title, Text, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './product-card.css'

class ProductCard extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { product } = this.props;

        return (
            <Card style={{ width: '12rem' }}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        <p className="product-price">
                            Price: 
                            <span> ${product.price}</span>
                        </p>
                    </Card.Text>
                    <Button variant="primary">Show More</Button>
                </Card.Body>
            </Card>
        )
    }
}

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

