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
     

    };
  }
render(){
 return (
    <div>

    <Navigation/>
    <About/>
    <Shop/>
    <Workout/>
    <Diet/>
    <Contact/>

<main className="pa3 pa5-ns">
   <p className="f4 lh-copy measure">
   START YOUR TRANSFORMATION NOW 
   WITH THE BEST WORKOUT&DIET PLANS
   ON THE MARKET RIGHT NOW.
   </p>
   </main>
    
    </div>
    



);
}
} 

export default App;
