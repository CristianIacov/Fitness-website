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
import ShopItems from './Components/ShopItems';
import About from './Components/About';
import SPORTIFYIMAGE from './SPORTIFYIMAGE.jpg';
import Appay from './Components/PaypalApp';
import 'tachyons';

export default class App extends React.Component{
  constructor(){
    super();
    this.state={
      route: 'home',
        user: {
        
        id: '',
  name: '',
  email: '',

  entries: 0,
  joined:''
     

    }
  }}
  loadUser= (data) =>{
this.setState({user:
{  
        id: data.id,
  name: data.name,
  email: data.email,

  entries: data.entries,
  joined:data.joined

}})}
onInputChange=(event) =>{
      this.setState({input: event.target.value});
    }
setLogin = (data) =>
  this.setState({isSignedin : data
  });
    onRouteChange = (route) => {
    if( route === 'signout'){
      this.setState({isSignedIn: false})

    }
    else if (route === 'home')
    {
      this.setState({isHome: true})
    }
   
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
        

      <div className="align" >
      
            
       <h1 className="par">
        “Respect your body. It’s the only one you get.”</h1>
        

      
        </div>

      
      
  
      :  (route === 'about'?
      <About />
      :(route === 'apppay'?
        <Appay items={this.props.items}/>
      : (route === 'login'?
      <Login  onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
      : (route === 'workout'?
      <Workout />
      : (route === 'diet'?
      <Diet />
      :(route === 'cart'?
      <Cart onRouteChange={this.onRouteChange}/>
      :((route === 'shop' && this.state.isSignedin===true)?
      <ShopItems/>
        :(route === 'register'?
          <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser} setLogin={this.setLogin}/>
          :
       <Login  onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
    ))))))))

    }
    </div>
);
}

}