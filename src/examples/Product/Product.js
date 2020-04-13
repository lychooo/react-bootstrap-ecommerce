import React from 'react';
import './Product.css'
import PropTypes from 'prop-types';
// import { LinkContainer } from 'react-router-bootstrap'

class Product extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }
    }

    handleClick = (event) => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        const { product } = this.props;
        const { counter } = this.state;

        return (
            <div className="product">
                <img className="product-image" src={product.image} alt={product.title} />
                <div>
                    <span className="product-brand"> {product.brand} </span>
                    <br />
                    <span className="product-title"> {product.title} </span>
                    <p className="product-price">
                        Price:
                    <span> ${product.price} </span>
                    </p>
                </div>
                <button onClick={this.handleClick}>Show More {counter}</button>
            </div>
        )
    }
}

Product.defaultProps = {
    title: 'Product',
    price: 0,
    brand: 'Original',
    image: ''
}

Product.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    brand: PropTypes.string,
    image: PropTypes.string.isRequired
  }

export default Product