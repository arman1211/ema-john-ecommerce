import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])


    const handleAddToCart = (product) => {
        console.log(product)

        const newCart = [...cart, product]
        setCart(newCart)
    }

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop_container'>
            <div className="products_container">
                {
                    products.map(product => <Product product={product} handleAddToCart={handleAddToCart} />)
                }
            </div>
            <div className="cart_container">
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Shop;