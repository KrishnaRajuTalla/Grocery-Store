import React from 'react';
import './LoginPage.css';
import AvatarIcon from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import SignUp from './SignUp';
function LoginPage() {
  return (
    <div className='login'>
        <div className='box'>
        <AvatarIcon className='avatarIcon1'/>
        <h1>Sign in to Account</h1>
        <div className='input-data'>
            <input type='text' placeholder='Email' /><br />
            <input type='password' placeholder='password' /><br/>
            <h4>Forgot password?</h4>
            <div className='last'> 
            <Link to="/signup" >
            <h3>Sign Up</h3>
            </Link>          
            <button className='button'>SignIn</button>
            </div>
        </div>
        </div>

    </div>
  )
}

export default LoginPage