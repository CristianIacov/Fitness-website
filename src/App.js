import React, { Component } from 'react';
import './App.css';
import Login from './Component/Login';
import Register from './Component/Register';
import Contact from './Component/Contact';
import Background from './Component/Background';
import {render} from 'react-dom';


class App extends Component{
  constructor(){
    super();
    this.state={
    }
  }
render(){
 return (
    <div>

    <Login/>
    <Shop/>
    <Workout/>
    <Diet/>
    <Contact/>

    </div>



);
}
} 

export default App;
