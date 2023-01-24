import React from 'react';
import './Product.css'

const Product = (props) => {
    const { product, handleAddToCart } = props

    const { img, price, name, rating } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product_details">
                <h3>{name}</h3>
                <div class="product-price-btn">
                    <p><span>{price}</span>$</p>
                    <button onClick={() => handleAddToCart(product)} type="button">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;