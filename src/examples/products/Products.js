import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../../ProductCard/ProductCard'
import './products.css';
import data from '../../data';

const renderProduct = (products) => {
    return products.map(product => {
        return (<ProductCard key={product.id} product={product} />)
    })
}

class Products extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
                <div className="product-list">
                    {renderProduct(data)}
                </div>
        )
    }
}

Products.defaultProps = {
    products: []
}

Products.propTypes = {
    products: PropTypes.array.isRequired
}

export default Products