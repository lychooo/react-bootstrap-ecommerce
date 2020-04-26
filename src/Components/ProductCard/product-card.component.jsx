import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './product-card.styles.css'
import { LinkContainer } from "react-router-bootstrap";

class ProductCard extends React.Component {

    render() {
        const { product } = this.props;

        return (
            <div className="product-card">
                <Card className="product-card" style={{ width: '12rem' }}>
                    <LinkContainer to={`/eachine/${product.id}`}>
                        <Card.Img variant="top" src={product.image} />
                    </LinkContainer>
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>Price: <span> ${product.price}</span></Card.Text>
                        <LinkContainer to={`/eachine/${product.id}`}>
                            <Button variant="primary">Buy Now</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </div>
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

