import React from 'react';
import { Link } from 'react-router-dom'
 const ShopNavbar = ({onRouteChange})=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <a className="brand-logo">Shopping</a>
                    
                    <ul className="right">
                        <li><p onClick={() => onRouteChange('homenavbar')}>Shop</p></li>
                        <li><p onClick={() => onRouteChange('cart')}>My cart</p></li>
                        <li><p onClick={() => onRouteChange('cart')}><i className="material-icons">shopping_cart</i></p></li>
                    </ul>
                </div>
            </nav>
   
        
    )
}

export default ShopNavbar;