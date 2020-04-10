import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Product from '../product/Product'
import './product-list.css';
import data from '../data';

const renderProduct = (products) => {
    return products.map(product => {
        return (<Product key={product.id} product={product} />)
    })
}

class ProductList extends React.Component {
    
    render() {
        return (
                <div className="product-list">
                    {renderProduct(data)}
                </div>
        )
    }
}

ProductList.defaultProps = {
    products: []
}

ProductList.propTypes = {
    products: PropTypes.array.isRequired
}

export default ProductList