import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.css';
//npm install react-bootstrap bootstrap
const Login = () => {
  return (
<form>
<ul class="form-style-1">
    <li><label>Full Name <span class="required">*</span></label><input type="text" name="field1" class="field-divided" placeholder="First" /> <input type="text" name="field2" class="field-divided" placeholder="Last" /></li>
    <li>
        <label>Email <span class="required">*</span></label>
        <input type="email" name="field3" class="field-long" />
    </li>
    <li>
        
        
        
    </li>
    
    <li>
        <input type="submit" value="Submit" />
    </li>
</ul>
</form>	
    
  );
}
export default Login;
