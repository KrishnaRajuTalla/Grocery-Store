import React from 'react'
import './SignUp.css'
function SignUp() {
  return (
    <div className='signup'>
        <div className='box'>
            <h1>SignUp</h1>
            <div className='signupdata'>
                <input type='text' placeholder='Email'/><br />
                <input type='password' placeholder='Password'/><br />
                <input type='password' placeholder='Confirm Password'/><br />
                <div className='last'>
                    <div className='las'>
                    <input type='checkbox'  className='checkbox'/>
                    <h4>remember me?</h4>
                    </div>
                    <button className='button1'>Sign Up</button>
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default SignUp