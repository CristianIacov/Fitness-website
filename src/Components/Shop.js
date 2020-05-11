import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ShopNavbar from './ShopNavbar'
import HomeNavbar from './HomeNavbar'
import Cart from './Cart'

class Shop extends Component {
  render() {
    return (
     
            <div className="Shopp">
            
              <ShopNavbar onRouteChange={this.props.onRouteChange}/>
              
             </div>
      
      
    );
  }
}

export default Shop