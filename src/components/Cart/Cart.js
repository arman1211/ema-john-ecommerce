import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props
    console.log(cart)
    let price = 0;
    let tax = 0
    let total = 0
    cart.map(product => {
        price = price + product.price
        tax = price * 0.15
        total = price + tax
    })

    return (
        <div class="card">
            <div class="card-header" >
                <h3 class="card-title">Cart</h3>
            </div>
            <div class="card-body">
                <p>Item: <span class="item-name">{cart.length}</span></p>
                <p>Price: <span class="item-price">{price}</span></p>
                <p>Tax: <span class="item-tax">${tax.toFixed(2)}</span></p>
                <p>Total: <span class="item-total">${total}</span></p>
                <button class="place-order-btn">Place Order</button>
            </div>
        </div>

    );
};

export default Cart;