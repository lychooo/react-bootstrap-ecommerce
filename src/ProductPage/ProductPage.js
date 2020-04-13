import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './product-page.css';
import data from '../data';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

class ProductPage extends React.Component {
    constructor(props) {
        super(props);        
    }

    render() {
        const product = data.filter(item => {
            return item.id === this.props.match.params.id
        })[0];        

        return (
            <Card style={{ width: '22rem' }}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text>Price: <span> ${product.price}</span></Card.Text>
                    <Button variant="primary">Add to Card</Button>
                </Card.Body>
            </Card>
        )
    }
}

// function ProductPage(props) {

//     const product = data.filter((item => {
//         return item.id === props.match.params.id
//     }))[0];

//     return (
//         <Card style={{ width: '22rem' }}>
//             <Card.Img variant="top" src={product.image} />
//             <Card.Body>
//                 <Card.Title>{product.title}</Card.Title>
//                 <Card.Text>{product.description}</Card.Text>
//                 <Card.Text>Price: <span> ${product.price}</span></Card.Text>
//                 <Button variant="primary">Add to Card</Button>
//             </Card.Body>
//         </Card>
//     )
// }

ProductPage.defaultProps = {
    title: 'Product',
    price: 0,
    brand: 'Original',
    image: ''
}

ProductPage.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    brand: PropTypes.string,
    image: PropTypes.string.isRequired
}

export default ProductPage;

