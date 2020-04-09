import React, { Component } from 'react';
import './App.css';
import Login from './Component/Login';
import Register from './Component/Register';
import Contact from './Component/Contact';
import {render} from 'react-dom';
import Navigation from './Component/Navigation';
import Shop from './Component/Shop';
import Workout from './Component/Workout';
import Diet from './Component/Diet';
import About from './Component/About';
import 'tachyons';

class App extends Component{
  constructor(){
    super();
    this.state={
      route: 'home',
      isContact: false,
      isSignedin: false,
      isShop:false ,
      isAbout:false,
      isWorkout:false,
      isHome: true
     

    };
  }
    onRouteChange = (route) => {
    if( route === 'signout'){
      this.setState({isSignedIn: false})

    }
    else if (route === 'home')
    {
      this.setState({isHome: true})
    }
    else
      if (route === 'about')
        this.setState({isAbout: true})
    this.setState({route: route});
  }

render(){
  const {isSignedIn,route,isHome,isWorkout,isContact,isAbout,isShop}=this.state;
 return (
    
<div className="App">
    <Navigation  
   
    isContact={isContact} isSignedIn={isSignedIn} 
    isShop={isShop} isAbout={isAbout}  isWorkout={isWorkout} 
    isHome={isHome}  onRouteChange={this.onRouteChange}/>
     
  
{
route ==='home'?
<main>
<div className="pa3 pa5-ns" >
   
   <p className="f4 lh-copy measure">
   START YOUR TRANSFORMATION NOW 
   WITH THE BEST WORKOUT&DIET PLANS
   ON THE MARKET RIGHT NOW.
   
   </p>
   </div>
   </main>
  
   :  (route === 'about'?
<About />
:
<div>
<h1> asdsa </h1>
</div>)

}
   </div>
   
    
    



);
}

}
export default App;
