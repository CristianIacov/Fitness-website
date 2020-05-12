import React from 'react';
import './Navigation.css';
const Navigation = ({isContact,isSignedin,isShop,isAbout,isWorkout,isDiet,isCart,isHome,onRouteChange}) => {
  //https://github.com/AyaBellazreg/React-Shopping-Cart/blob/master/Shopping-Cart/src/App.js
  	
      return (
  	 <header className="black-80 tc pv4 avenir">
    
  <h1 className="mt2 mb0 baskerville i fw1 f1">Sportify</h1>
  <h2 className="mt2 mb0 f6 fw4 ttu tracked"></h2>
  <nav className="bt bb tc mw7 center mt4">
    <p onClick={() => onRouteChange('about')} className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" href="/about">About</p>
    <p  onClick={() => onRouteChange('contact')} className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" href="/contact">Contact</p>
    <p  onClick={() => onRouteChange('workout')} className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" href="/workout">Workout</p>
    <p  onClick={() => onRouteChange('diet')} className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" href="/diett">Diet</p>
    <p  onClick={() => onRouteChange('shop')} className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l" href="/shop">Shop</p>
    <p  onClick={() => onRouteChange('cart')} className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" href="/cart">Cart</p>
    <p  onClick={() => onRouteChange('login')} className="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l" href="/">Get Started</p>
    <p className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="/"></p>
  </nav>
</header>
);

  
  
}
export default Navigation;
