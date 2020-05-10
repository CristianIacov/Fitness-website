import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import Contact from './Components/Contact';
import {render} from 'react-dom';
import Navigation from './Components/Navigation';
import Shop from './Components/Shop';
import Workout from './Components/Workout';
import Diet from './Components/Diet';
import Cart from './Components/Cart';
import About from './Components/About';
import SPORTIFYIMAGE from './SPORTIFYIMAGE.jpg';
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
      isDiet:false,
      isCart:false,
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
    
<div className="App" >
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
      : (route === 'login'?
      <Login />
      : (route === 'workout'?
      <Workout />
    :
    <h1> Main Page </h1>
    )))

    }
    </div>
);
}

}
export default App;
