import React from 'react';
import './css/login.css';
import { Link } from 'react-router-dom'

export const Signin = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Login</h1>
        <form>
          <div className="loginsignup-fields">
            <input type="email" placeholder="Email Address" required/>
            <input type="password" placeholder="Password" required/>
          </div>
          <button>Continue</button>
          <p className='loginsignup-login'>Don't have an account? <span>
          <Link style={{textDecoration:'none'}} to='/Signup'>
          Signup
          </Link></span></p>
        </form>
      </div>
    </div>
  );
};
