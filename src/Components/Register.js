import React from 'react';
import './Login.css';

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
  this.setState({signInPassword:event.target.value})
}
onSubmitSignIn= () => {
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
        if(user.id ){
            window.alert('You are logged in');
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        }
        else
        	 window.alert('Invalid user');
       
  })
 
}
	render(){
  return (
<form>
<ul class="form-style-1">
<h1> Login </h1>

<li>
    <label>Email <span class="required">*</span></label>
        <input type="email" name="field3" class="field-long"  onChange={this.onEmailChange} />
        <label>Password <span class="required">*</span></label>
        <input type="password" name="field5" class="field-long"     onChange={this.onPasswordChange} />

</li>
   <li>
        
        
        
    </li>
<li>
 <input type="submit" value="Submit"   onClick={this.onSubmitSignIn}/>
 </li>  

</ul>
</form>	
    
  );
}}

export default Register;
