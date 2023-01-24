import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop_container'>
            <div className="products_container">
                {
                    products.map(product => <Product product={product} />)
                }
            </div>
            <div className="cart_container">
                <h2>Cart</h2>
            </div>
        </div>
    );
};

export default Shop;