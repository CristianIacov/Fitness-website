import React from 'react';
import './Navigation.css';
const Navigation = () => {
  return (
  	
  	 <header className="bg-white black-80 tc pv4 avenir">

  <h1 className="mt2 mb0 baskerville i fw1 f1">Sportify</h1>
  <h2 className="mt2 mb0 f6 fw4 ttu tracked"></h2>
  <nav className="bt bb tc mw7 center mt4">
    <a className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" href="/about">About</a>
    <a className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" href="/contact">Contact</a>
    <a className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" href="/contact">Workout</a>
    <a className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l" href="/shop">Clothing & Suppliments</a>
    <a className="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l" href="/">Get Started</a>
    <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="/"></a>
  </nav>
</header>
  
  );
}
export default Navigation;
