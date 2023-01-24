import React from 'react';
import logo from '../../images/Logo.svg'
import arman from '../../images/Arman-designstyle-smoothie-m.png'
import './Header.css'

const Header = () => {
    return (
        <nav className='header_nav'>
            <img src={arman} alt="" />
            <div className='nav_link'>
                <a href="/order">Order</a>
                <a href="/about">About</a>
                <a href="/inventorr">Inventory</a>
            </div>
        </nav>
    )
};

export default Header;