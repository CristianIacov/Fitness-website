import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.css';
import './Navigation.css';
//npm install react-bootstrap bootstrap
class  Login extends React.Component {
     constructor(props){
  super(props);
  this.state={
    email:'',
    password:'',
    name:''
  }}
  onNameChange= (event) =>{
  this.setState({name: event.target.value})
}
onEmailChange= (event) =>{
  this.setState({email: event.target.value})
}
onPasswordChange= (event)=>{
  this.setState({password:event.target.value})
}
onSubmitSignIn= () => {
  fetch('https://guarded-lowlands-54848.herokuapp.com/register',{
    method: 'post',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({
      email:this.state.email,
      password: this.state.password,
      name:this.state.name

    })
  })
  .then(response=>response.json())
  .then(user => {
    if (user){
      this.props.loadUser(user)
 this.props.onRouteChange('register');
 window.alert('Registered');
    }
    else
        window.alert('not working');
  })
 
}
onSubmitLogin= () => this.props.onRouteChange('register');
    render(){
  return (
<form>
<ul className="form-style-1">
    <li><label>Full Name <span className="required">*</span></label><input type="text" name="field1" className="field-divided" placeholder="First" /> <input type="text" name="field2" className="field-divided" placeholder="Last" /></li>
    <li>

        <label>Username <span className="required">*</span></label>
        <input type="text" name="field4" className="field-long" onChange={this.onNameChange}/>
        <label>Password <span className="required">*</span></label>
        <input type="password" name="field5" className="field-long"    onChange={this.onPasswordChange} />
        <label>Email <span className="required">*</span></label>
        <input type="email" name="field3" className="field-long"  onChange={this.onEmailChange}/>
        
    </li>
    <li>
        
        
        
    </li>
    
    <li>
     <input onClick={this.onSubmitSignIn} type="button" value="Submit"  />
       
        <a className=" hover-bg-light-green" onClick={this.onSubmitLogin}> Already have an account? </a>

    </li>
</ul>
</form>	
    
  );
}}
export default Login;
