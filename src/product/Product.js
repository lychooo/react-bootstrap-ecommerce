import React from 'react';

const Product = ({ product }) => {

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
        </div>
    )
}

export default Product