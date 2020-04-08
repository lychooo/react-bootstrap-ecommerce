import React from 'react';
import Product from './product/Product'

import './product-list/product-list.css';
import './product/product.css';

//Functional componet
const ProductList = ({ product }) => {
    return (
        <div className="conteiner">
           <Product product={product} />
        </div>
    )
}

export default ProductList