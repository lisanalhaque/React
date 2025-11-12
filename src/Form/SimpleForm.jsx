import React, { useState } from 'react'
import { Form } from 'react-router-dom';

const SimpleForm = () => {

    const [email,setEmail] = useState('');
    const [error, SetError] = useState('');

    const HandleSubmit = (e) => {
        e.preventDefault();

        if(!email){
            SetError('Email is reuired')
        }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            SetError("email is invalid")
        }else{
            SetError(' ');
            alert('form submitted succesfully');
            console.log('form submitted', email);
            
        }
    }
    
    

  return (
    <form onSubmit={HandleSubmit}>
        <input type="email" 
        value={email}
        placeholder='Enter your Email'
        onChange={(e) => setEmail(e.target.value)}
        /> <br /> <br />
        {error && <p style={{color: 'red'}}>{error}</p>}
        <button type='submit'>submit</button>
    </form>
  )
}

export default SimpleForm
