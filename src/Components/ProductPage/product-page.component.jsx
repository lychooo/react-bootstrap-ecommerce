import React, { Fragment } from 'react';
import { Card, Button, Carousel, Tabs, Tab, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
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
    })
}

const renderSingleImage = (images) => {
    let index = 1;
    return images.map(image => {
        return (
            <Image key={`image${index++}`} src={image} fluid />
        )
    })
}


class ProductPage extends React.Component {

    render() {
        const product = data.filter(item => {
            return item.id === this.props.match.params.id
        })[0];
        console.log(product)

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
                            <Card style={{ width: '22rem' }}>
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>Price: <span> ${product.price}</span></Card.Text>
                                    <Button variant="primary">Add to Card</Button>
                                    <Button variant="secondary">Buy Now</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                    <div className="product-page-body">

                        <div className="product-tab">
                            <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
                                <Tab eventKey="home" title="Description">
                                    <div>
                                        <h5>Description</h5>
                                        {product.description}
                                    </div>
                                </Tab>
                                <Tab eventKey="profile" title="Shipping">
                                    <div>
                                        <h5>Shipping Info</h5>
                                        <p>The total delivery time is calculated from the time your order is placed until the time it is delivered to you. Total delivery time is broken down into processing time and shipping time.</p>
                                        <p>Processing time: The time it takes to prepare your item(s) to ship from our warehouse. This includes preparing your items, performing quality checks, and packing for shipment.</p>
                                        <p>Shipping time: The time for your item(s) to travel from our warehouse to your destination.</p>
                                    </div>
                                </Tab>
                                <Tab eventKey="contact" title="Return Policy">
                                    <div>
                                        <h5>Return Policy</h5>
                                        <p>We offer one year warranty for phones. Accessories such as batteries, cables and chargers have a one month warranty.If the phone is faulty within one year (counted from the date of delivery), customers can send them back for free repair. Artificial factors such as dis-assembly, misuse, drops or falls, water damage, un official firmware or software modifications or any others causes of damage are not covered.</p>
                                        <p>If approved, we will cover the entire repair fee, handling fee and the defective component replacement charge for the phone (the motherboard and screen are not in the scope of this free repair policy).</p>
                                        <p>If accessories like batteries or charger cables are faulty within one month (counted from the date of arrival), we can arrange to resend or refund once you have confirmed the issue with us by sending photos or videos showing the issue. Artificial factors such as dis-assembly, misuse, drops or falls, water damage, un official firmware or software modifications or any others causes of damage are not covered.</p>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>

                        <div className="single-image">
                            {renderSingleImage(product.gallery)}
                        </div>

                    </div>
                </div>
            </Fragment>
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

