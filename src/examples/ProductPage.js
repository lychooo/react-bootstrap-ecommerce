import React from 'react';
import { Card, Button, Carousel } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './product-page.css';
import data from '../data';

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { LinkContainer } from "react-router-bootstrap";

const renderGallery = (gallery) => {
    return gallery.map(image => {
        return (
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image}
                    alt="Third slide"
                />
            </Carousel.Item>
        )
    })
}

class ProductPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const product = data.filter(item => {
            return item.id === this.props.match.params.id
        })[0];

        return (
            <div className="product-page">
                <div className="product-gallery">
                    <Carousel>
                        {renderGallery(product.gallery)}
                    </Carousel>
                </div>
                <div className="product-price">
                    <Card style={{ width: '22rem' }}>
                        <Card.Img variant="top" src={product.image} />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                            <Card.Text>Price: <span> ${product.price}</span></Card.Text>
                            <Button variant="primary">Add to Card</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}

ProductPage.defaultProps = {
    title: 'Product',
    price: 0,
    brand: 'Original',
    image: '',
    gallery: ''
}

ProductPage.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    brand: PropTypes.string,
    image: PropTypes.string.isRequired,
    gallery: PropTypes.string
}

export default ProductPage;

