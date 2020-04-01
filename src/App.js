import React, { Component } from 'react';
import './App.css';
import Login from './Component/Login';
import Register from './Component/Register';
import Contact from './Component/Contact';
import Background from './Component/Background';
import {render} from 'react-dom';
import Navigation from './Component/Navigation';
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

    <Login/>
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
