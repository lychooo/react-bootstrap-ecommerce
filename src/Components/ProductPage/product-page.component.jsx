import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../../redux/cart/cart.actions';

import { Card, Button, Carousel, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';

import ProductPageTabs from '../ProductPageTabs/product-page-tabs.component';

import './product-page.styles.css';
import data from '../../Data/data';

const renderGallery = (gallery) => {
    let index = 1;
    return gallery.map(image => {
        return (
            <Carousel.Item key={`image${index++}`}>
                <img
                    className="d-block w-100"
                    src={image}
                    alt="Third slide"
                />
            </Carousel.Item>
        )
    });
};

const renderSingleImage = (images) => {
    let index = 1;
    return images.map(image => {
        return (
            <Image key={`image${index++}`} src={image} fluid />
        )
    });
};

class ProductPage extends React.Component {

    render() {
        const product = data.filter(currentProduct => {
            return currentProduct.id === this.props.match.params.id
        })[0];

        const addProduct = this.props.addProduct;

        return (
            <Fragment>
                <div className="product-page">
                    <span className="page-title">category / {product.category}</span>
                    <div className="product-page-header">
                        <div className="product-gallery">
                            <Carousel>
                                {renderGallery(product.gallery)}
                            </Carousel>
                        </div>
                        <div className="product-price">
                            <Card >
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>Price: <span className='product-page-price'> ${product.price}</span></Card.Text>
                                    <Button variant="primary" onClick={() => addProduct(product)}>Add to Card</Button>
                                    {/* <Button variant="secondary">Buy Now</Button> */}
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                    <div className="product-page-body">

                        <div className="product-tab">
                            <ProductPageTabs description={product.description} />
                        </div>

                        <div className="single-image">
                            {renderSingleImage(product.gallery)}
                        </div>

                    </div>
                </div>
            </Fragment>
        )
    }
};

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

const mapDispatchToProps = dispatch => ({
    addProduct: product => dispatch(addProduct(product))
});

export default connect(null, mapDispatchToProps)(ProductPage);

