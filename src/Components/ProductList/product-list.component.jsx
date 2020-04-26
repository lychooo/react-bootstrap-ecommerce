import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard/product-card.component';
import './product-list.style.css';
import data from '../../Data/data';

const renderProduct = (products) => {
    return products.map(product => {
        return (<ProductCard key={product.id} product={product} />)
    })
}

class ProductList extends React.Component {

    render() {
        // console.log(data)
        return (
            <div className="product-list">
                {renderProduct(data)}
            </div>
        );
    }
}

ProductList.defaultProps = {
    products: []
}

ProductList.propTypes = {
    products: PropTypes.array.isRequired
}

export default ProductList;