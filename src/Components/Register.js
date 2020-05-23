
import React, { Component } from 'react';
import './Register.css';

class  Register extends React.Component  {
	constructor(props){
  super(props);
  this.state={
    signInEmail:'',
    signInPassword:''
  }
}
onEmailChange= (event) =>{
  this.setState({signInEmail: event.target.value})
}
onPasswordChange= (event)=>{
  this.setState({signInPassword: event.target.value})
}
onSubmitLogin1= () => {
  fetch('http://localhost:3001/signin',{
    method: 'post',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({
      email:this.state.signInEmail,
      password: this.state.signInPassword
    })
  })
  .then(response=>response.json())
  .then(user => {
       
          if(user.id){
          
          this.props.setLogin(true);
          this.props.loadUser(user);
          this.props.onRouteChange('diet');
          window.alert("You are logged in");
        }
        else
        	window.alert("Wrong credentials");
       
        
        	
  })
 
}

changeRoute= () => 
	 this.props.onRouteChange('diet');

	render(){
		
  return (
<form>
<ul className="form-style-1">
<h1> Login </h1>

<li>
    <label>Email <span className="required">*</span></label>
        <input onChange={this.onEmailChange} type="email"  className="field-long"   />
        <label>Password <span className="required">*</span></label>
        <input  onChange={this.onPasswordChange} type="password"  className="field-long"     />

</li>
   <li>
        
        
        
    </li>
<li>

  <input onClick={this.onSubmitLogin1} type="button" value="Submit"  />
  
 </li>  

</ul>
</form>	
    
  );
}}

export default Register;







